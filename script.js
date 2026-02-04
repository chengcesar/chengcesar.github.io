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

// Current active filter (null means show all)
let activeFilter = null;

// Generate project grid from central configuration
function generateProjectGrid(filterTag = null) {
    const projectGridContainer = document.querySelector('.project-grid .container');
    if (!projectGridContainer) return;
    
    // Filter only visible projects
    let visibleProjects = projectsConfig.filter(project => project.visible !== false);
    
    // Apply tag filter if provided
    if (filterTag) {
        visibleProjects = visibleProjects.filter(project => {
            const projectTags = project.tags || [];
            return projectTags.includes(filterTag);
        });
    }
    
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

// Filter projects by tag
function filterProjectsByTag(tagTitle) {
    // Handle "Show all" tag
    if (tagTitle === 'Show all') {
        activeFilter = null;
    } else {
        // Toggle filter: if clicking the same tag, clear filter
        if (activeFilter === tagTitle) {
            activeFilter = null;
        } else {
            activeFilter = tagTitle;
        }
    }
    
    // Regenerate project grid with filter
    generateProjectGrid(activeFilter);
    
    // Update active state of tag links
    updateActiveTagState();
}

// Update active state of tag links
function updateActiveTagState() {
    const tagLinks = document.querySelectorAll('.artifacts-list[data-list-type="tags"] .hero-link.tag-filter');
    tagLinks.forEach(link => {
        const tagTitle = link.getAttribute('data-tag');
        const dot = link.querySelector('.tag-filter-dot');
        const isActive = tagTitle === activeFilter || (tagTitle === 'Show all' && activeFilter === null);
        
        if (isActive) {
            link.classList.add('active');
            if (dot) {
                // Show the dot using CSS class
                dot.classList.add('visible');
            }
        } else {
            link.classList.remove('active');
            if (dot) {
                // Hide the dot by removing CSS class
                dot.classList.remove('visible');
            }
        }
    });
}

// Generate artifacts lists from central configuration
function generateArtifactsLists() {
    // Generate artifacts list
    const artifactsList = document.querySelector('.artifacts-list[data-list-type="artifacts"]');
    if (artifactsList && artifactsConfig && artifactsConfig.artifacts) {
        artifactsList.innerHTML = '';
        const visibleArtifacts = artifactsConfig.artifacts.filter(item => item.visible !== false);
        
        visibleArtifacts.forEach((artifact, index) => {
            const link = document.createElement('a');
            link.href = artifact.url;
            link.className = 'hero-link';
            // Add comma after all items except the last one with proper spacing
            link.textContent = index < visibleArtifacts.length - 1 ? `${artifact.title},` : artifact.title;
            artifactsList.appendChild(link);
        });
    }
    
    // Generate tags list
    const tagsList = document.querySelector('.artifacts-list[data-list-type="tags"]');
    if (tagsList && artifactsConfig && artifactsConfig.tags) {
        tagsList.innerHTML = '';
        const visibleTags = artifactsConfig.tags.filter(item => item.visible !== false);
        
        visibleTags.forEach((tag, index) => {
            const link = document.createElement('a');
            // For tags, use # for href and add click handler for filtering
            link.href = '#';
            link.className = 'hero-link tag-filter';
            link.setAttribute('data-tag', tag.title);
            
            // Create SVG dot circle that appears when active
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.className = 'tag-filter-dot';
            svg.setAttribute('viewBox', '0 0 8 8');
            svg.setAttribute('width', '8');
            svg.setAttribute('height', '8');
            // Hide by default - will be shown by updateActiveTagState if needed
            svg.style.cssText = 'display: none; visibility: hidden;';
            
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', '4');
            circle.setAttribute('cy', '4');
            circle.setAttribute('r', '3');
            circle.setAttribute('fill', '#0011C8');
            
            svg.appendChild(circle);
            
            // Add text node for the tag title
            const textNode = document.createTextNode(index < visibleTags.length - 1 ? `${tag.title},` : tag.title);
            
            // Append SVG and text to link
            link.appendChild(svg);
            link.appendChild(textNode);
            
            // Add click handler for filtering
            link.addEventListener('click', function(e) {
                e.preventDefault();
                filterProjectsByTag(tag.title);
            });
            
            tagsList.appendChild(link);
        });
        
        // Update active state after generating tags (ensures dots are properly hidden initially)
        updateActiveTagState();
    }
}

// Generate artifacts table from central configuration
function generateArtifactsTable() {
    const artifactsTableContainer = document.querySelector('.artifacts-table');
    if (!artifactsTableContainer || !artifactsConfig || !artifactsConfig.artifacts) return;
    
    // Filter only visible artifacts, excluding the "more . . ." item
    const visibleArtifacts = artifactsConfig.artifacts.filter(item => 
        item.visible !== false && 
        item.id !== 'more' && 
        item.title !== 'more . . .'
    );
    
    // Clear existing content
    artifactsTableContainer.innerHTML = '';
    
    // Create table element
    const table = document.createElement('table');
    table.className = 'artifacts-table-content';
    
    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Title</th>
        <th>Tags</th>
        <th></th>
    `;
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create table body
    const tbody = document.createElement('tbody');
    
    visibleArtifacts.forEach(artifact => {
        const row = document.createElement('tr');
        
        // Make entire row clickable
        row.style.cursor = 'pointer';
        row.addEventListener('click', function() {
            if (artifact.url && artifact.url !== '#') {
                window.location.href = artifact.url;
            }
        });
        
        // Title cell with link
        const titleCell = document.createElement('td');
        const titleLink = document.createElement('a');
        titleLink.href = artifact.url;
        titleLink.className = 'artifact-link';
        titleLink.textContent = artifact.title;
        titleLink.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent double navigation
        });
        titleCell.appendChild(titleLink);
        row.appendChild(titleCell);
        
        // Tags cell
        const tagsCell = document.createElement('td');
        if (artifact.tags && artifact.tags.length > 0) {
            tagsCell.textContent = artifact.tags.join(', ');
        } else {
            tagsCell.textContent = '—';
        }
        row.appendChild(tagsCell);
        
        // Arrow cell
        const arrowCell = document.createElement('td');
        arrowCell.textContent = '→';
        arrowCell.className = 'arrow-cell';
        row.appendChild(arrowCell);
        
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    artifactsTableContainer.appendChild(table);
}

// Initialize project grid when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        generateProjectGrid();
        generateArtifactsLists();
        generateArtifactsTable();
    });
} else {
    generateProjectGrid();
    generateArtifactsLists();
    generateArtifactsTable();
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

// Typewriter animation
function initTypewriter() {
    const typewriterElement = document.querySelector('.typewriter');
    if (!typewriterElement) return;

    // Array of locations to cycle through
    const locations = [
        'Bogota',
        'Colombia',
        // 'New York',
        // 'Tokyo',
        // 'London',
        // 'Berlin',
        // 'Barcelona'
    ];

    let locationIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function type() {
        const currentLocation = locations[locationIndex];

        // If we're paused (after completing a word), wait before deleting
        if (isPaused) {
            isPaused = false;
            setTimeout(type, 2000); // Pause for 2 seconds before deleting
            return;
        }

        // Deleting characters
        if (isDeleting) {
            typewriterElement.textContent = currentLocation.substring(0, charIndex - 1);
            charIndex--;

            // If we've deleted all characters
            if (charIndex === 0) {
                isDeleting = false;
                locationIndex = (locationIndex + 1) % locations.length; // Move to next location
                setTimeout(type, 500); // Pause before typing next word
            } else {
                setTimeout(type, 50); // Speed of deleting
            }
        }
        // Typing characters
        else {
            typewriterElement.textContent = currentLocation.substring(0, charIndex + 1);
            charIndex++;

            // If we've typed the complete word
            if (charIndex === currentLocation.length) {
                isDeleting = true;
                isPaused = true;
                setTimeout(type, 100); // Small delay before triggering the pause
            } else {
                setTimeout(type, 100); // Speed of typing
            }
        }
    }

    // Start the animation after a short delay
    setTimeout(type, 500);
}

// Initialize typewriter when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTypewriter);
} else {
    initTypewriter();
}

// Email Copy to Clipboard Functionality
function initEmailCopy() {
    const emailCopyLink = document.querySelector('.email-copy-link');
    
    if (emailCopyLink) {
        emailCopyLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = this.getAttribute('data-email');
            const tooltip = this.querySelector('.copy-tooltip');
            
            // Copy to clipboard
            navigator.clipboard.writeText(email).then(() => {
                // Change tooltip text
                tooltip.textContent = 'copied!';
                tooltip.classList.add('copied');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    tooltip.textContent = 'copy';
                    tooltip.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy email:', err);
                tooltip.textContent = 'failed';
                setTimeout(() => {
                    tooltip.textContent = 'copy';
                }, 2000);
            });
        });
    }
}

// Initialize email copy when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEmailCopy);
} else {
    initEmailCopy();
}