// Dark mode toggle functionality
(function() {
  // Check for saved preference or system preference
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply navbar styles directly (bypasses Bootstrap CSS specificity)
  function applyNavbarStyles(theme) {
    var navbars = document.querySelectorAll('.navbar-default');
    navbars.forEach(function(navbar) {
      if (theme === 'dark') {
        navbar.style.backgroundColor = '#16213e';
        navbar.style.borderColor = '#0f3460';
        navbar.style.backgroundImage = 'none';
      } else {
        navbar.style.backgroundColor = '';
        navbar.style.borderColor = '';
        navbar.style.backgroundImage = '';
      }
    });
  }

  // Apply theme
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    // Also add class to body for maximum compatibility
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
    updateIcon(theme);
    applyNavbarStyles(theme);
  }

  // Update the toggle icon
  function updateIcon(theme) {
    const icon = document.getElementById('dark-mode-icon');
    if (icon) {
      if (theme === 'dark') {
        icon.classList.remove('fa-moon-o');
        icon.classList.add('fa-sun-o');
      } else {
        icon.classList.remove('fa-sun-o');
        icon.classList.add('fa-moon-o');
      }
    }
  }

  // Initialize on page load
  function init() {
    const theme = getPreferredTheme();
    setTheme(theme);

    // Add click handler to toggle button
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      });
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Also apply theme immediately to prevent flash
  const theme = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', theme);
})();
