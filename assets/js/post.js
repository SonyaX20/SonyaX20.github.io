async function loadPost() {
    // Get post URL from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const postPath = urlParams.get('post');
    
    if (!postPath) {
        window.location.href = 'index.html';
        return;
    }

    try {
        const response = await fetch(postPath);
        const markdown = await response.text();
        
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
        const content = marked.parse(markdown);
        document.getElementById('post-content').innerHTML = content;
        
        // Initialize syntax highlighting
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });

        // Update page title
        const title = document.querySelector('h1')?.textContent || 'Blog Post';
        document.title = `${title} - Sonya's Blog`;

    } catch (error) {
        console.error('Error loading post:', error);
        document.getElementById('post-content').innerHTML = '<h1>Error loading post</h1><p>The post could not be loaded.</p>';
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