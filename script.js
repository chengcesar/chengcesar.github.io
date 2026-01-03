// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Generate project grid from central configuration
function generateProjectGrid() {
    const projectGridContainer = document.querySelector('.project-grid .container');
    if (!projectGridContainer) return;
    
    // Filter only visible projects
    const visibleProjects = projectsConfig.filter(project => project.visible !== false);
    
    // Clear existing content (in case of re-render)
    projectGridContainer.innerHTML = '';
    
    // Generate project items
    visibleProjects.forEach(project => {
        const projectItem = document.createElement('a');
        projectItem.href = `project.html?project=${project.id}`;
        projectItem.className = 'project-item';
        
        // Create cover image
        const coverImg = document.createElement('img');
        coverImg.src = project.coverImage;
        coverImg.alt = `${project.title} Cover`;
        coverImg.className = 'project-cover';
        coverImg.onerror = function() {
            this.style.display = 'none';
            const placeholder = this.nextElementSibling;
            if (placeholder) placeholder.style.display = 'block';
        };
        
        // Create placeholder square (shown if image fails to load)
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder-square';
        placeholder.style.display = 'none';
        
        // Create caption
        const caption = document.createElement('div');
        caption.className = 'project-caption';
        caption.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        
        // Append elements
        projectItem.appendChild(coverImg);
        projectItem.appendChild(placeholder);
        projectItem.appendChild(caption);
        
        // Add to container
        projectGridContainer.appendChild(projectItem);
    });
}

// Initialize project grid when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateProjectGrid);
} else {
    generateProjectGrid();
}

// Mobile menu toggle functionality
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (!mobileMenuToggle || !mobileNav) {
        console.log('Mobile menu elements not found');
        return;
    }

    // Toggle menu on button click
    mobileMenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isActive = mobileNav.classList.contains('active');
        
        if (isActive) {
            mobileNav.classList.remove('active');
            const span = this.querySelector('span');
            if (span) span.textContent = 'Menu';
        } else {
            mobileNav.classList.add('active');
            const span = this.querySelector('span');
            if (span) span.textContent = 'Close';
        }
    });

    // Close menu when clicking on a link
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            const span = mobileMenuToggle.querySelector('span');
            if (span) span.textContent = 'Menu';
        });
    });

    // Close menu when clicking outside (with slight delay to avoid conflicts)
    setTimeout(function() {
        document.addEventListener('click', function(event) {
            if (!mobileNav.classList.contains('active')) return;
            
            const isClickInsideNav = mobileNav.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle) {
                mobileNav.classList.remove('active');
                const span = mobileMenuToggle.querySelector('span');
                if (span) span.textContent = 'Menu';
            }
        });
    }, 100);
}

// Initialize mobile menu when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
    initMobileMenu();
}

