// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Member Spotlight: Cherise's Journey into Cybersecurity",
        excerpt: "Discover how Cherise went from a poor tech background to cybersecurity enthusiast through AGCCI and SiemensEmpowerHer Program.",
        author: "Cherise Osambo",
        date: "January, 2026",
        category: "spotlight",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "posts/cherise-journey.html",
        linkedin: "https://www.linkedin.com/in/cherise-o-435b64282"
    },
    {
        id: 2,
        title: "Recap:First Night of Code Event",
        excerpt: "Laughter and keystrokes blended into a working prototype for a local clinic.See what potential our members will build in just one night...",
        author: "Cherise O.",
        date: "December , 2025",
        category: "event",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "#",
        linkedin: "https://www.linkedin.com/posts/activity-7381983776056356864-JTTv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETe52kBYuUJ4RrZrjxpKJYzhiO7AXU65LE"
    },
    {
        id: 5,
        title: "Cybersecurity Workshop: Hands-on Training Recap",
        excerpt: "Highlights from our latest hands-on cybersecurity workshop where members practiced real-world security scenarios.",
        author: "Training Team",
        date: "November, 2025",
        category: "event",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "#",
        linkedin: "https://www.linkedin.com/company/cybershe"
    },
    {
        id: 6,
        title: "Networking Tips for Cybersecurity Professionals",
        excerpt: "How to build meaningful connections in the cybersecurity industry and advance your career through networking.",
        author: "Cherise O.",
        date: "November, 2025",
        category: "tutorial",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        link: "#",
        linkedin: "https://www.linkedin.com/posts/activity-7389282112555745281-_gDu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETe52kBYuUJ4RrZrjxpKJYzhiO7AXU65LE"
    }
];

// DOM Elements
const postsContainer = document.getElementById('postsContainer');
const filterButtons = document.querySelectorAll('.tag-btn');
const searchInput = document.getElementById('searchInput');

// Function to render posts
function renderPosts(posts) {
    postsContainer.innerHTML = '';
    
    posts.forEach(post => {
        const postCard = document.createElement('article');
        postCard.className = 'post-card';
        postCard.setAttribute('data-category', post.category);
        
        postCard.innerHTML = `
            <div class="post-image">
                <img src="${post.image}" alt="${post.title}">
                <span class="post-category">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
            </div>
            <div class="post-content">
                <h3>${post.title}</h3>
                <div class="post-meta-small">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-user"></i> ${post.author}</span>
                </div>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-actions">
                    <a href="${post.link}" class="post-link">Read Story <i class="fas fa-arrow-right"></i></a>
                    ${post.linkedin ? `<a href="${post.linkedin}" target="_blank" class="linkedin-badge">
                        <i class="fab fa-linkedin"></i> Connect
                    </a>` : ''}
                </div>
            </div>
        `;
        
        postsContainer.appendChild(postCard);
    });
}

// Filter posts by category
function filterPosts(category) {
    if (category === 'all') {
        renderPosts(blogPosts);
    } else {
        const filteredPosts = blogPosts.filter(post => post.category === category);
        renderPosts(filteredPosts);
    }
}

// Search posts
function searchPosts() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        renderPosts(blogPosts);
        return;
    }
    
    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.author.toLowerCase().includes(searchTerm)
    );
    
    renderPosts(filteredPosts);
}

// Initialize filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Filter posts
        const filter = this.getAttribute('data-filter');
        filterPosts(filter);
    });
});

// Search on Enter key
searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        searchPosts();
    }
});

// Add LinkedIn badge styles
const style = document.createElement('style');
style.textContent = `
    .post-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #f0f0f0;
    }
    
    .linkedin-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        background: #0077b5;
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        text-decoration: none;
        font-size: 0.8rem;
        transition: all 0.3s ease;
    }
    
    .linkedin-badge:hover {
        background: #005582;
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);

// Initialize with all posts
document.addEventListener('DOMContentLoaded', () => {
    renderPosts(blogPosts);
});