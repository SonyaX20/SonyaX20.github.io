// Sample blog posts data
const posts = [
    {
        title: 'Welcome to My Blog',
        date: '2024-03-20',
        summary: 'This is my first blog post, introducing how this website was built...',
        image: 'assets/images/posts/image.png',
        url: 'posts/welcome.md'
    },
    {
        title: 'Latest Developments and Applications of ResNet',
        date: '2025-01-24',
        summary: 'An in-depth exploration of ResNet, a powerful platform for computer vision tasks including dataset management, model training, and deployment.',
        image: 'assets/images/posts/pc.png',
        url: 'posts/resnet.md'
    },
    {
        title: 'Understanding Off-the-Shelf Models in Computer Vision',
        date: '2025-01-24',
        summary: 'An in-depth exploration of off-the-shelf models in computer vision, a powerful platform for computer vision tasks including dataset management, model training, and deployment.',
        image: 'assets/images/posts/pc.png',
        url: 'posts/off-the-shelf-models.md'
    },
    {
        title: 'A Comprehensive Guide to Roboflow Universe',
        date: '2025-01-23',
        summary: 'An in-depth exploration of Roboflow Universe, a powerful platform for computer vision tasks including dataset management, model training, and deployment.',
        image: 'assets/images/posts/pc.png',
        url: 'posts/roboflow-intro.md'
    },
    {
        title: 'How to Build a Blog with GitHub Pages',
        date: '2024-03-21',
        summary: 'A step-by-step guide to creating your own blog using GitHub Pages...',
        image: 'assets/images/posts/image.png',
        url: 'posts/github-pages-tutorial.md'
    },
    {
        title: 'Web Development Fundamentals',
        date: '2024-03-22',
        summary: 'Learn about the core concepts and best practices in modern web development...',
        image: 'assets/images/posts/image.png',
        url: 'posts/web-development-basics.md'
    },
    {
        title: 'Introduction to Machine Learning',
        date: '2024-03-23',
        summary: 'A beginner-friendly guide to understanding machine learning concepts...',
        image: 'assets/images/posts/image.png',
        url: 'posts/machine-learning-intro.md'
    },
    {
        title: 'Coding Best Practices and Clean Code',
        date: '2024-03-24',
        summary: 'Essential principles for writing clean, maintainable code...',
        image: 'assets/images/posts/image.png',
        url: 'posts/coding-best-practices.md'
    },
    {
        title: 'Essential Cybersecurity Concepts',
        date: '2024-03-25',
        summary: 'Understanding fundamental cybersecurity principles and best practices...',
        image: 'assets/images/posts/image.png',
        url: 'posts/cybersecurity-basics.md'
    },
];

// Load posts
function loadPosts() {
    const postsContainer = document.querySelector('.posts-grid');
    
    posts.forEach(post => {
        const postElement = createPostCard(post);
        postsContainer.appendChild(postElement);
    });
}

// Create post card
function createPostCard(post) {
    const article = document.createElement('article');
    article.className = 'post-card';
    
    article.innerHTML = `
        <div class="post-content">
            <img src="${post.image}" class="post-image" alt="${post.title}">
            <h2>${post.title}</h2>
            <p class="post-date">${post.date}</p>
            <p>${post.summary}</p>
            <a href="post.html?post=${encodeURIComponent(post.url)}" class="read-more">Read More</a>
        </div>
    `;
    
    return article;
}

// 添加侧边栏相关功能
function loadSidebar() {
    const sidebarList = document.querySelector('.posts-list');
    
    posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="post.html?post=${encodeURIComponent(post.url)}">${post.title}</a>`;
        sidebarList.appendChild(li);
    });
}

function setupSidebarToggle() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        sidebarToggle.classList.toggle('collapsed');
        main.classList.toggle('sidebar-collapsed');
        nav.classList.toggle('sidebar-collapsed');
        
        // 更改箭头方向
        const icon = sidebarToggle.querySelector('i');
        if (sidebar.classList.contains('collapsed')) {
            icon.classList.remove('fa-chevron-left');
            icon.classList.add('fa-chevron-right');
        } else {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-left');
        }
    });
}

// 修改现有的 DOMContentLoaded 事件监听器
document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
    loadSidebar();
    setupSidebarToggle();
}); 