async function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postPath = urlParams.get('post');
    
    if (!postPath) {
        document.getElementById('post-content').innerHTML = `
            <h1>Error</h1>
            <p>No post specified.</p>
            <p><a href="index.html">Return to home</a></p>
        `;
        return;
    }

    try {
        const response = await fetch(postPath);
        if (!response.ok) {
            throw new Error(`Failed to load post (${response.status})`);
        }
        
        const markdown = await response.text();
        
        // Parse frontmatter and content
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
        
        // Configure marked
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

        // Render content
        const renderedContent = marked.parse(content);
        document.title = frontmatter.title || 'Blog Post';
        
        // Create header
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

        // Update page
        document.getElementById('post-content').innerHTML = headerHtml + renderedContent;
        
        // Initialize syntax highlighting
        document.querySelectorAll('pre code').forEach(block => hljs.highlightBlock(block));

    } catch (error) {
        document.getElementById('post-content').innerHTML = `
            <h1>Error loading post</h1>
            <p>The post could not be loaded.</p>
            <p>Error details: ${error.message}</p>
            <p><a href="index.html">Return to home</a></p>
        `;
    }
}

// Load post when page loads
document.addEventListener('DOMContentLoaded', loadPost); 