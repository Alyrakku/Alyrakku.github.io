document.addEventListener("click", function (event) {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    if (
      navbarCollapse.classList.contains("show") &&
      !navbarCollapse.contains(event.target) &&
      !navbarToggler.contains(event.target)
    ) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  
    if (event.target.classList.contains("nav-link") && window.innerWidth < 992) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });



// Cambiar tema
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// Mostrar/Ocultar proyectos
const showMoreBtn = document.getElementById('showMore');
const showLessBtn = document.getElementById('showLess');
const hiddenProjects = document.querySelectorAll('.hidden-project');

showMoreBtn.addEventListener('click', () => {
    hiddenProjects.forEach(project => project.style.display = 'block');
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'inline-block';
});

showLessBtn.addEventListener('click', () => {
    hiddenProjects.forEach(project => project.style.display = 'none');
    showMoreBtn.style.display = 'inline-block';
    showLessBtn.style.display = 'none';
});