async function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postPath = urlParams.get('post');
    
    if (!postPath) {
        document.getElementById('post-content').innerHTML = `
            <h1>Error</h1>
            <p>No post path was provided in the URL.</p>
            <p>Details: Missing 'post' parameter in URL</p>
            <p><a href="index.html">Return to home</a></p>
        `;
        return;
    }

    try {
        // 1. 加载 Markdown 文件
        const response = await fetch(postPath);
        if (!response.ok) {
            throw new Error(`Failed to fetch post file (HTTP ${response.status}). Path: ${postPath}`);
        }
        
        const markdown = await response.text();

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
                } else {
                    throw new Error('Invalid frontmatter format: Missing ending delimiter');
                }
            }
        } catch (frontmatterError) {
            document.getElementById('post-content').innerHTML = `
                <h1>Warning: Frontmatter Error</h1>
                <p>The post metadata could not be parsed correctly.</p>
                <p>Details: ${frontmatterError.message}</p>
                <hr>
                <div class="markdown-body">${marked.parse(markdown)}</div>
            `;
            return;
        }

        // 3. 配置 marked 和渲染内容
        try {
            marked.setOptions({
                highlight: function(code, lang) {
                    try {
                        if (lang && hljs.getLanguage(lang)) {
                            return hljs.highlight(code, { language: lang }).value;
                        }
                        return hljs.highlightAuto(code).value;
                    } catch (highlightError) {
                        return code; // 返回原始代码
                    }
                },
                breaks: true,
                gfm: true
            });

            const renderedContent = marked.parse(content);
            document.title = frontmatter.title || 'Blog Post';

            // 创建页头和内容
            const headerHtml = `
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

            document.getElementById('post-content').innerHTML = headerHtml + renderedContent;

            // 初始化语法高亮
            document.querySelectorAll('pre code').forEach(block => {
                try {
                    hljs.highlightBlock(block);
                } catch (highlightError) {
                    block.classList.add('no-highlight');
                }
            });

        } catch (renderError) {
            document.getElementById('post-content').innerHTML = `
                <h1>Error: Rendering Failed</h1>
                <p>The markdown content could not be rendered.</p>
                <p>Details: ${renderError.message}</p>
                <hr>
                <pre class="raw-content">${content}</pre>
            `;
        }

    } catch (error) {
        document.getElementById('post-content').innerHTML = `
            <div class="error-container">
                <h1>Error Loading Post</h1>
                <p>The post could not be loaded.</p>
                <div class="error-details">
                    <h2>Error Details:</h2>
                    <p>${error.message}</p>
                    <p>Attempted to load: ${postPath}</p>
                </div>
                <div class="error-actions">
                    <a href="index.html" class="return-home">Return to Home</a>
                    <button onclick="window.location.reload()" class="retry-button">Try Again</button>
                </div>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', loadPost); 