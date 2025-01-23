// 文章内容存储
const blogPosts = {
    'welcome': {
        title: 'Welcome to My Blog',
        date: '2024-03-20',
        content: `
# Welcome to My Blog

This is my first blog post, introducing how this website was built...

## About This Site

This blog is built using:
- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

## Features
- Responsive design
- Markdown support
- Syntax highlighting
- Tag system
        `,
        tags: ['welcome', 'introduction']
    },
    'roboflow-intro': {
        title: 'A Comprehensive Guide to Roboflow Universe',
        date: '2024-03-21',
        content: `
# A Comprehensive Guide to Roboflow Universe

An in-depth exploration of Roboflow Universe, a powerful platform for computer vision tasks...

## What is Roboflow?

Roboflow is a comprehensive platform that helps developers build computer vision applications...

## Key Features

1. Dataset Management
2. Model Training
3. Deployment Options
        `,
        tags: ['AI', 'computer-vision', 'tutorial']
    }
    // 可以继续添加更多文章...
};

function loadPost() {
    // 从 URL 获取文章 ID
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post')?.replace('posts/', '').replace('.md', '');
    
    console.log('Loading post:', postId);

    // 检查文章是否存在
    if (!postId || !blogPosts[postId]) {
        console.error('Post not found:', postId);
        document.getElementById('post-content').innerHTML = '<p>Post not found</p>';
        return;
    }

    const post = blogPosts[postId];
    console.log('Post data:', post);

    // 配置 marked
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

    // 渲染内容
    const renderedContent = marked.parse(post.content);
    console.log('Content rendered');

    // 更新页面
    document.getElementById('post-content').innerHTML = `
        <header class="post-header">
            <h1>${post.title}</h1>
            <div class="post-meta">
                <span class="post-date">${post.date}</span>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                </div>
            </div>
        </header>
        <div class="markdown-body">
            ${renderedContent}
        </div>
    `;

    // 初始化语法高亮
    document.querySelectorAll('pre code').forEach(block => hljs.highlightBlock(block));
    console.log('Syntax highlighting initialized');
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, starting post load process');
    loadPost();
}); 