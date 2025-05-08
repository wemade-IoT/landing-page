// Manejo del menú flotante
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.querySelector('.navbar-overlay');
  const body = document.body;
  
  // Función para alternar la visibilidad del menú
  function toggleMenu() {
    navbar.classList.toggle('active');
    body.classList.toggle('menu-open');
  }
  
  // Abrir/cerrar menú al hacer clic en el botón hamburguesa
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }
  
  // Cerrar menú al hacer clic en un enlace del menú
  const menuLinks = document.querySelectorAll('.navbar-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      body.classList.remove('menu-open');
    });
  });
  
  // Cerrar menú al hacer clic en el botón de cerrar
  const closeButton = document.querySelector('.navbar-close');
  if (closeButton) {
    closeButton.addEventListener('click', toggleMenu);
  }
  
  // Cerrar menú al hacer clic en el overlay (fuera del menú)
  navbar.addEventListener('click', (e) => {
    if (e.target === navbar) {
      toggleMenu();
    }
  });
});