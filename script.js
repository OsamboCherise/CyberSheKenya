// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Calculate position accounting for fixed header
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav links based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    const headerHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(scrollY >= (sectionTop - headerHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.chapter, .timeline-phase, .preview-card, .pathway-card, .resource-card').forEach(el => {
    observer.observe(el);
});

// Form submission handling
document.querySelectorAll('.btn-pathway').forEach(button => {
    button.addEventListener('click', function(e) {
        if(this.getAttribute('href') === '#') {
            e.preventDefault();
            alert('Form functionality will be implemented with WordPress integration. In the live site, this will open the respective application form.');
        }
    });
});

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', function() {
    // Add current year to footer
    const yearElement = document.querySelector('.footer-bottom p');
    if(yearElement && yearElement.textContent.includes('2026')) {
        // Already hardcoded to 2026, could make dynamic if needed
        // yearElement.textContent = yearElement.textContent.replace('2026', new Date().getFullYear());
    }
    
    // Partnership form handling
    const partnerForm = document.getElementById('partnerInquiryForm');
    const successModal = document.getElementById('successModal');
    const closeModalBtns = document.querySelectorAll('.close-modal, .close-modal-btn');
    
    if(partnerForm) {
        partnerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For now, just show success modal
            if(successModal) {
                successModal.classList.add('active');
            }
            
            // Reset form
            this.reset();
        });
    }
    
    // Close modal functionality
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if(successModal) {
                successModal.classList.remove('active');
            }
        });
    });
    
    // Close modal when clicking outside
    if(successModal) {
        successModal.addEventListener('click', function(e) {
            if(e.target === this) {
                this.classList.remove('active');
            }
        });
    }
    
    // Resource Library Interactive Features
    const resourceCards = document.querySelectorAll('.resource-card');
    
    resourceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Smooth scroll to membership section
    const joinButtons = document.querySelectorAll('.resource-btn, .btn-primary[href="#get-involved"]');
    
    joinButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#get-involved') {
                e.preventDefault();
                const target = document.getElementById('get-involved');
                if (target) {
                    const headerHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Track resource clicks (optional analytics)
    const resourceLinks = document.querySelectorAll('.resource-link, .platform-card');
    
    resourceLinks.forEach(link => {
        link.addEventListener('click', function() {
            const resourceName = this.querySelector('span')?.textContent || 
                                this.querySelector('h4')?.textContent || 
                                'Unknown Resource';
            
            console.log(`Resource clicked: ${resourceName}`);
            // You can add Google Analytics or other tracking here
        });
    });
    
    // Add fade-in animation to story chapters
    const chapters = document.querySelectorAll('.chapter');
    chapters.forEach((chapter, index) => {
        chapter.style.opacity = '0';
        chapter.style.transform = 'translateY(20px)';
        chapter.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            chapter.style.opacity = '1';
            chapter.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// Function to download all resources (for modal button)
function downloadAllResources() {
    alert('This would trigger a download of all partnership resources. In a real implementation, this would be a ZIP file download.');
    
    // In a real implementation, this would be:
    // window.location.href = '/downloads/partnership-resources.zip';
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        const successModal = document.getElementById('successModal');
        if(successModal && successModal.classList.contains('active')) {
            successModal.classList.remove('active');
        }
    }
});
// Update the smooth scrolling for the new partnership section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Calculate position accounting for fixed header
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Update active navigation for new section
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Function to update active navigation
    function updateActiveNav() {
        let current = '';
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const scrollY = window.scrollY || window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - headerHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', updateActiveNav);
    
    // Initial call to set active nav on page load
    updateActiveNav();
    
    // Add animation to new partnership elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe new partnership elements
    document.querySelectorAll('.tier-card, .document-card, .stat').forEach(el => {
        if (el) {
            observer.observe(el);
        }
    });
});
// Partnership form handling with Formspree
const partnerForm = document.getElementById('partnerInquiryForm');
const successModal = document.getElementById('successModal');

if(partnerForm) {
    partnerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(this);
        
        try {
            // Send data to Formspree
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if(response.ok) {
                // Show success modal
                if(successModal) {
                    successModal.classList.add('active');
                }
                
                // Reset form
                this.reset();
            } else {
                // Show error message
                alert('There was an error submitting your form. Please try again or email us directly at patiencefasey@gmail.com');
            }
        } catch(error) {
            console.error('Error:', error);
            alert('There was an error submitting your form. Please try again or email us directly at patiencefasey@gmail.com');
        }
    });
}// Function to scroll to form
function scrollToForm() {
    const formSection = document.getElementById('partnership-form');
    if (formSection) {
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = formSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Highlight the form
        formSection.style.animation = 'pulse 2s';
        setTimeout(() => {
            formSection.style.animation = '';
        }, 2000);
    }
}

// Function to unlock resources after form submission
function unlockResources() {
    const lockedResources = document.querySelectorAll('.locked-resource');
    
    lockedResources.forEach(resource => {
        // Remove locked state
        resource.classList.remove('locked-resource');
        
        // Change lock icon to unlock
        const lockIcon = resource.querySelector('.fa-lock');
        if (lockIcon) {
            lockIcon.classList.remove('fa-lock');
            lockIcon.classList.add('fa-unlock');
            lockIcon.parentElement.textContent = ' Unlocked';
        }
        
        // Change button to download
        const unlockBtn = resource.querySelector('.unlock-btn');
        if (unlockBtn) {
            unlockBtn.innerHTML = '<i class="fas fa-download"></i> Download Now';
            unlockBtn.onclick = function() {
                downloadResource(resource.dataset.doc);
            };
        }
    });
    
    // Hide unlock instructions
    const instructions = document.querySelector('.unlock-instructions');
    if (instructions) {
        instructions.style.display = 'none';
    }
    
    // Show success message
    const resourcesSection = document.querySelector('.resources-section');
    if (resourcesSection) {
        const successMsg = document.createElement('div');
        successMsg.className = 'unlock-success';
        successMsg.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>All partnership resources are now unlocked! Check your email for download links.</p>
        `;
        resourcesSection.insertBefore(successMsg, resourcesSection.querySelector('.documents-grid').nextSibling);
    }
}

// Function to simulate downloading a resource
function downloadResource(resourceType) {
    const resourceData = {
        'prospectus': {
            name: 'CyberShe Partnership Prospectus 2026',
            url: '#',
            size: '2.4 MB'
        },
        'impact-report': {
            name: 'CyberShe Impact Report 2026',
            url: '#',
            size: '3.1 MB'
        },
        'agreement': {
            name: 'CyberShe Partnership Agreement Template',
            url: '#',
            size: '1.8 MB'
        },
        'brand-kit': {
            name: 'CyberShe Brand Kit & Guidelines',
            url: '#',
            size: '15.2 MB'
        }
    };
    
    const resource = resourceData[resourceType];
    if (resource) {
        alert(`Downloading: ${resource.name}\n\nNote: In the actual implementation, this would download the ${resource.size} file.\n\nYou will receive the actual files via email after your inquiry is processed.`);
        
        // In real implementation, you would do:
        // window.location.href = resource.url;
        
        // For now, just log it
        console.log(`Downloading ${resource.name}`);
    }
}

// Update the partnership form submission to unlock resources
document.addEventListener('DOMContentLoaded', function() {
    const partnerForm = document.getElementById('partnerInquiryForm');
    
    if (partnerForm) {
        partnerForm.addEventListener('submit', function(e) {
            // Prevent default for demonstration
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const companyName = formData.get('companyName');
            const email = formData.get('email');
            
            // Show success modal
            const successModal = document.getElementById('successModal');
            if (successModal) {
                successModal.classList.add('active');
            }
            
            // Unlock resources
            unlockResources();
            
            // Simulate sending email (in real implementation, this would go to your backend)
            console.log(`Form submitted for ${companyName} (${email})`);
            console.log('Sending email to patiencefasey@gmail.com with inquiry details...');
            
            // Reset form
            this.reset();
            
            // In real implementation, you would use fetch() to send data to your server
            // and the server would send the actual email
        });
    }
});

// Add CSS for pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(255, 46, 147, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(255, 46, 147, 0); }
        100% { box-shadow: 0 0 0 0 rgba(255, 46, 147, 0); }
    }
    
    .unlock-success {
        background: rgba(76, 175, 80, 0.1);
        border-left: 4px solid #4CAF50;
        padding: 20px;
        border-radius: 10px;
        margin: 20px 0;
        display: flex;
        align-items: center;
        gap: 15px;
        animation: fadeIn 0.5s ease;
    }
    
    .unlock-success i {
        font-size: 1.5rem;
        color: #4CAF50;
    }
    
    .unlock-success p {
        margin: 0;
        color: #333;
        font-weight: 500;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);