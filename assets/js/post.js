async function loadPost() {
    // Get post URL from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const postPath = urlParams.get('post');
    
    if (!postPath) {
        console.error('No post path provided');
        window.location.href = 'index.html';
        return;
    }

    try {
        // 解码 URL 并移除前导斜杠
        const cleanPath = decodeURIComponent(postPath).replace(/^\//, '');
        console.log('Attempting to load post:', cleanPath);
        
        const response = await fetch(cleanPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const markdown = await response.text();
        console.log('Markdown content loaded:', markdown.substring(0, 100) + '...'); // Log first 100 chars
        
        // Parse YAML frontmatter
        let content = markdown;
        let frontmatter = {};
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
            }
        }
        
        // Configure marked options
        marked.setOptions({
            highlight: function(code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang }).value;
                }
                return hljs.highlightAuto(code).value;
            },
            breaks: true,
            gfm: true
        });

        // Render markdown content
        const renderedContent = marked.parse(content);
        
        // Update page metadata
        document.title = frontmatter.title || 'Blog Post';
        
        // Create post header with metadata
        const headerHtml = `
            <header class="post-header">
                <h1>${frontmatter.title || ''}</h1>
                <div class="post-meta">
                    <span class="post-date">${frontmatter.date || ''}</span>
                    ${frontmatter.categories ? 
                        `<div class="post-categories">
                            ${frontmatter.categories
                                .replace(/[\[\]]/g, '')  // Remove brackets
                                .split(',')              // Split into array
                                .map(cat => cat.trim())  // Trim whitespace
                                .join(', ')}             
                        </div>` : ''
                    }
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

        // Update content
        const postContent = document.getElementById('post-content');
        postContent.innerHTML = headerHtml + renderedContent;
        
        // Initialize syntax highlighting
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });

    } catch (error) {
        console.error('Detailed error loading post:', error);
        console.error('Post path was:', postPath);
        document.getElementById('post-content').innerHTML = `
            <h1>Error loading post</h1>
            <p>The post could not be loaded.</p>
            <p>Error details: ${error.message}</p>
        `;
    }
}

function share(platform) {
    const url = window.location.href;
    const title = document.title;
    
    let shareUrl;
    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Load post when page loads
document.addEventListener('DOMContentLoaded', loadPost); 