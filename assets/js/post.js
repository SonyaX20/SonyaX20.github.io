function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postPath = urlParams.get('post');
    
    if (!postPath) {
        console.error('Error: No post path provided in URL');
        console.log('Current URL:', window.location.href);
        console.log('Search params:', window.location.search);
        return;
    }

    console.log('Attempting to load post:', postPath);
    console.log('Full URL:', window.location.href);
    console.log('Base URL:', document.baseURI);

    // 使用 fetch Promise
    fetch(postPath)
        .then(response => {
            console.log('Fetch response:', {
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                type: response.type,
                url: response.url
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(markdown => {
            console.log('Markdown loaded successfully', {
                length: markdown.length,
                preview: markdown.substring(0, 100)
            });

            // Parse frontmatter
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
                    console.log('Frontmatter parsed:', frontmatter);
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
            console.log('Content rendered successfully');

            // Update page
            document.getElementById('post-content').innerHTML = `
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
                <div class="markdown-body">
                    ${renderedContent}
                </div>
            `;

            // Initialize syntax highlighting
            document.querySelectorAll('pre code').forEach(block => hljs.highlightBlock(block));
            console.log('Syntax highlighting initialized');
        })
        .catch(error => {
            console.error('Error in loadPost:', error);
            console.log('Stack:', error.stack);
            console.log('Error occurred at:', new Date().toISOString());
        });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, starting post load process');
    loadPost();
}); 