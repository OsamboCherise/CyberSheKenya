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
document.querySelectorAll('.chapter, .timeline-phase, .preview-card, .pathway-card, .resource-card, .event-card').forEach(el => {
    observer.observe(el);
});

// Form submission handling for pathway buttons
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
    // Add current year to footer (optional)
    // const yearElement = document.querySelector('.footer-bottom p:first-child');
    // if(yearElement) {
    //     yearElement.innerHTML = yearElement.innerHTML.replace('2026', new Date().getFullYear());
    // }
    
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

// Function to scroll to form (for unlock buttons)
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

// Add CSS for pulse animation (if not already in style.css)
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(255, 46, 147, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(255, 46, 147, 0); }
        100% { box-shadow: 0 0 0 0 rgba(255, 46, 147, 0); }
    }
`;
document.head.appendChild(style);
