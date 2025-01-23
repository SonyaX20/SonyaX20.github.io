async function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postPath = urlParams.get('post');
    
    if (!postPath) {
        console.error('No post path provided');
        document.getElementById('post-content').innerHTML = `
            <h1>Error</h1>
            <p>No post specified.</p>
            <p><a href="index.html">Return to home</a></p>
        `;
        return;
    }

    console.log('Loading post:', postPath);
    console.log('Full URL:', window.location.href);
    console.log('Base URL:', document.baseURI);

    const response = await fetch(postPath);
    console.log('Response:', response);

    if (!response.ok) {
        console.error('Failed to load post:', response.status, response.statusText);
        document.getElementById('post-content').innerHTML = `
            <h1>Error loading post</h1>
            <p>Status: ${response.status}</p>
            <p><a href="index.html">Return to home</a></p>
        `;
        return;
    }

    const markdown = await response.text();
    console.log('Markdown loaded, length:', markdown.length);

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
        }
    }

    console.log('Frontmatter:', frontmatter);

    // Render content
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

    const renderedContent = marked.parse(content);
    console.log('Content rendered');

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
}

document.addEventListener('DOMContentLoaded', loadPost); 