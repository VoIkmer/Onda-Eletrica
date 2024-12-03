document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-item a');

  // Function to close the menu
  const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') 
      ? 'hidden' 
      : 'auto';
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      // Prevent default only for internal links
      if (link.getAttribute('href').startsWith('#') || link.getAttribute('href').startsWith('/')) {
        event.preventDefault();
        
        // Navigate to the link after a short delay to ensure menu closes
        setTimeout(() => {
          window.location.href = link.getAttribute('href');
        }, 50);
      }
      
      closeMenu();
    });
  });

  // Close menu if clicked outside
  document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  // Prevent menu from closing when clicking inside the menu
  navMenu.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});