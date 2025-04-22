/**
 * Script principal do site
 */
document.addEventListener('DOMContentLoaded', function() {
  // Adicionar classe ativa ao item de menu atual com base na seção visível
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('header nav ul li a');
  
  function highlightActiveSection() {
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 50;
          const sectionId = section.getAttribute('id');
          
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              navItems.forEach(item => {
                  item.classList.remove('active');
                  if (item.getAttribute('href') === `#${sectionId}`) {
                      item.classList.add('active');
                  }
              });
          }
      });
  }
  
  // Executar ao carregar e ao rolar a página
  highlightActiveSection();
  window.addEventListener('scroll', highlightActiveSection);
  
  // Rolagem suave para links de âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Adicionar evento para o formulário de contato
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          // O evento já é tratado no componente de contato
      });
  }
});