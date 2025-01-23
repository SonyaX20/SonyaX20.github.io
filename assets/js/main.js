// Sample blog posts data
const posts = [
    {
        title: 'A Comprehensive Guide to Roboflow Universe',
        date: '2024-03-21',
        summary: 'An in-depth exploration of Roboflow Universe, a powerful platform for computer vision tasks including dataset management, model training, and deployment.',
        image: 'assets/images/posts/pc.png',
        url: 'posts/roboflow-intro.md'
    },
    {
        title: 'Welcome to My Blog',
        date: '2024-03-20',
        summary: 'This is my first blog post, introducing how this website was built...',
        image: 'assets/images/posts/image.png',
        url: 'posts/welcome.md'
    },
    {
        title: 'How to Build a Blog with GitHub Pages',
        date: '2024-03-21',
        summary: 'A step-by-step guide to creating your own blog using GitHub Pages...',
        image: 'assets/images/posts/pc.png',
        url: 'posts/github-pages-tutorial.md'
    },
    {
        title: 'Web Development Fundamentals',
        date: '2024-03-22',
        summary: 'Learn about the core concepts and best practices in modern web development...',
        image: 'assets/images/posts/pc.png',
        url: 'posts/web-development-basics.md'
    },
    {
        title: 'Introduction to Machine Learning',
        date: '2024-03-23',
        summary: 'A beginner-friendly guide to understanding machine learning concepts...',
        image: 'assets/images/posts/pc.png',
        url: 'posts/machine-learning-intro.md'
    },
    {
        title: 'Coding Best Practices and Clean Code',
        date: '2024-03-24',
        summary: 'Essential principles for writing clean, maintainable code...',
        image: 'assets/images/posts/pc.png',
        url: 'posts/coding-best-practices.md'
    },
    {
        title: 'Essential Cybersecurity Concepts',
        date: '2024-03-25',
        summary: 'Understanding fundamental cybersecurity principles and best practices...',
        image: 'assets/images/posts/pc.png',
        url: 'posts/cybersecurity-basics.md'
    },
    {
        title: 'Remote Sensing Image Analysis with Python',
        date: '2024-03-26',
        summary: 'Analyzing Sentinel-2 satellite imagery of Wismar area using Python, including image classification and edge detection...',
        image: 'assets/images/posts/globe.png',
        url: 'posts/remote-sensing-analysis.md'
    },
    {
        title: 'Explore Google CoLab',
        date: '2024-03-28',
        summary: 'Understanding why Google CoLab is essential for deep learning projects, especially for hardware compatibility and GPU acceleration...',
        image: 'assets/images/posts/pc.png',
        url: 'posts/explore-google-colab.md'
    }
];

// Load posts
function loadPosts() {
    console.log('Loading posts:', posts);
    const postsContainer = document.querySelector('.posts-grid');
    
    if (!postsContainer) {
        console.error('Posts container not found!');
        return;
    }
    
    console.log('Found posts container:', postsContainer);
    
    posts.forEach((post, index) => {
        console.log(`Creating card for post ${index}:`, post);
        const postElement = createPostCard(post);
        postsContainer.appendChild(postElement);
    });
}

// Create post card
function createPostCard(post) {
    const article = document.createElement('article');
    article.className = 'post-card';
    
    // 添加星星
    const starCount = 8; // 每边的星星数量
    const starPositions = [
        { left: '-15px', top: '10%' },
        { left: '-12px', top: '30%' },
        { left: '-18px', top: '50%' },
        { left: '-14px', top: '70%' },
        { right: '-15px', top: '20%' },
        { right: '-12px', top: '40%' },
        { right: '-18px', top: '60%' },
        { right: '-14px', top: '80%' }
    ];
    
    starPositions.forEach((pos, index) => {
        const star = document.createElement('div');
        star.className = 'star';
        Object.assign(star.style, pos);
        star.style.animationDelay = `${index * 0.2}s`;
        article.appendChild(star);
    });
    
    article.innerHTML += `
        <div class="post-content">
            <img src="${post.image}" class="post-image" alt="${post.title}">
            <h2>${post.title}</h2>
            <p class="post-date">${post.date}</p>
            <p>${post.summary}</p>
            <a href="${post.url.replace('posts/', 'post/').replace('.md', '.html')}" class="read-more">Read More</a>
        </div>
    `;
    
    // 添加鼠标悬停效果
    article.addEventListener('mouseenter', () => {
        article.querySelectorAll('.star').forEach(star => {
            star.style.animationDuration = '0.8s';
        });
    });
    
    article.addEventListener('mouseleave', () => {
        article.querySelectorAll('.star').forEach(star => {
            star.style.animationDuration = '1.5s';
        });
    });
    
    return article;
}

// Execute when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
}); 