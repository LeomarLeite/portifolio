  
// Adicione eventos de clique a todos os itens de menu
// Função para destacar um item de menu
function highlightMenu(e) {
  // Obtenha o elemento de menu que foi clicado (o link <a>)
  const menuItem = e.target.closest("a");

  if (!menuItem) {
    // Se o clique não foi diretamente em um link <a>, saia da função
    return;
  }

  // Remova a classe active de todos os itens de menu
  const menuItems = document.querySelectorAll(".menu li a");
  menuItems.forEach(item => item.classList.remove("active"));

  // Adicione a classe active ao item de menu clicado
  menuItem.classList.add("active");
}

// Adicione eventos de clique a todos os itens de menu
const menuItems = document.querySelectorAll(".menu li a");
menuItems.forEach(item => item.addEventListener("click", highlightMenu));

// Verifica o fragmento da URL ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const fragment = window.location.hash;

  if (fragment) {
    // Remove a classe active de todos os itens de menu
    menuItems.forEach(item => item.classList.remove("active"));

    // Adiciona a classe active ao item de menu correspondente ao fragmento
    const activeMenuItem = document.querySelector(`.menu li a[href="${fragment}"]`);
    if (activeMenuItem) {
      activeMenuItem.classList.add("active");
    }
  }
});
