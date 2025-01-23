async function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postPath = urlParams.get('post');
    
    if (!postPath) {
        console.error('Error: No post path provided in URL parameters');
        document.getElementById('post-content').innerHTML = `
            <h1>Error</h1>
            <p>No post specified.</p>
            <p><a href="index.html">Return to home</a></p>
        `;
        return;
    }

    try {
        // 1. 加载 Markdown 文件
        console.log('Attempting to fetch:', postPath);
        const response = await fetch(postPath);
        if (!response.ok) {
            throw new Error(`Failed to load post (HTTP ${response.status})`);
        }
        
        const markdown = await response.text();
        console.log('Successfully loaded markdown file');

        // 2. 解析 frontmatter
        let content = markdown;
        let frontmatter = {};
        
        try {
            if (markdown.startsWith('---')) {
                const endIndex = markdown.indexOf('---', 3);
                if (endIndex !== -1) {
                    const frontmatterText = markdown.slice(3, endIndex).trim();
                    frontmatterText.split('\n').forEach(line => {
                        const [key, ...valueParts] = line.split(':');
                        if (key && valueParts.length) {
                            frontmatter[key.trim()] = valueParts.join(':').trim();
                        }
                    });
                    content = markdown.slice(endIndex + 3).trim();
                    console.log('Successfully parsed frontmatter:', frontmatter);
                } else {
                    console.warn('No ending frontmatter delimiter found');
                }
            } else {
                console.warn('No frontmatter found in markdown');
            }
        } catch (frontmatterError) {
            console.error('Error parsing frontmatter:', frontmatterError);
            frontmatter = {};
        }

        // 3. 配置 marked
        try {
            marked.setOptions({
                highlight: function(code, lang) {
                    try {
                        if (lang && hljs.getLanguage(lang)) {
                            return hljs.highlight(code, { language: lang }).value;
                        }
                        return hljs.highlightAuto(code).value;
                    } catch (highlightError) {
                        console.error('Error highlighting code:', highlightError);
                        return code; // 返回原始代码
                    }
                },
                breaks: true,
                gfm: true
            });
            console.log('Marked options configured successfully');
        } catch (markedError) {
            console.error('Error configuring marked:', markedError);
            throw markedError;
        }

        // 4. 渲染内容
        let renderedContent;
        try {
            renderedContent = marked.parse(content);
            console.log('Successfully rendered markdown content');
        } catch (renderError) {
            console.error('Error rendering markdown:', renderError);
            throw renderError;
        }

        // 5. 更新页面标题
        try {
            document.title = frontmatter.title || 'Blog Post';
            console.log('Page title updated:', document.title);
        } catch (titleError) {
            console.error('Error updating page title:', titleError);
        }

        // 6. 创建页头
        let headerHtml;
        try {
            headerHtml = `
                <header class="post-header">
                    <h1>${frontmatter.title || ''}</h1>
                    <div class="post-meta">
                        <span class="post-date">${frontmatter.date || ''}</span>
                        ${frontmatter.tags ? 
                            `<div class="post-tags">
                                ${frontmatter.tags
                                    .replace(/[\[\]]/g, '')
                                    .split(',')
                                    .map(tag => `<span class="tag">${tag.trim()}</span>`)
                                    .join(' ')}
                            </div>` : ''
                        }
                    </div>
                </header>
            `;
            console.log('Header HTML generated successfully');
        } catch (headerError) {
            console.error('Error creating header HTML:', headerError);
            headerHtml = `<header class="post-header"><h1>${frontmatter.title || 'Error'}</h1></header>`;
        }

        // 7. 更新页面内容
        try {
            document.getElementById('post-content').innerHTML = headerHtml + renderedContent;
            console.log('Page content updated successfully');
        } catch (updateError) {
            console.error('Error updating page content:', updateError);
            throw updateError;
        }

        // 8. 初始化语法高亮
        try {
            document.querySelectorAll('pre code').forEach(block => hljs.highlightBlock(block));
            console.log('Syntax highlighting initialized');
        } catch (highlightError) {
            console.error('Error initializing syntax highlighting:', highlightError);
        }

    } catch (error) {
        console.error('Fatal error in loadPost:', error);
        document.getElementById('post-content').innerHTML = `
            <h1>Error loading post</h1>
            <p>The post could not be loaded.</p>
            <p>Error details: ${error.message}</p>
            <p><a href="index.html">Return to home</a></p>
        `;
    }
}

// 加载文章
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, starting post load process');
    loadPost().catch(error => {
        console.error('Unhandled error in loadPost:', error);
    });
}); 