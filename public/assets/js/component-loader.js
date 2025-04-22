/**
 * Sistema de carregamento de componentes HTML
 * Versão simplificada e robusta
 */
document.addEventListener('DOMContentLoaded', function() {
  // Lista de componentes a serem carregados
  const componentes = [
      { id: 'menu', arquivo: 'components/html/header.html' },
      { id: 'sobre', arquivo: 'components/html/about.html' },
      { id: 'habilidades', arquivo: 'components/html/skills.html' },
      { id: 'servicos', arquivo: 'components/html/services.html' },
      { id: 'projetos', arquivo: 'components/html/projects.html' },
      { id: 'recomendacoes', arquivo: 'components/html/recommendations.html' },
      { id: 'contato', arquivo: 'components/html/contact.html' },
      { id: 'rodape', arquivo: 'components/html/footer.html' }
  ];
  
  // Função para carregar um componente
  function carregarComponente(id, arquivo) {
      const elemento = document.getElementById(id);
      if (!elemento) {
          console.warn(`Elemento com ID "${id}" não encontrado.`);
          return Promise.resolve(); // Retorna uma promessa resolvida para não quebrar o Promise.all
      }
      
      return fetch(arquivo)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Erro ao carregar ${arquivo}: ${response.status} ${response.statusText}`);
              }
              return response.text();
          })
          .then(html => {
              elemento.innerHTML = html;
              console.log(`Componente ${id} carregado com sucesso.`);
              
              // Disparar evento de componente carregado
              const event = new CustomEvent('componenteCarregado', { 
                  detail: { id: id },
                  bubbles: true 
              });
              elemento.dispatchEvent(event);
          })
          .catch(error => {
              console.error(`Erro ao carregar o componente ${id}:`, error);
              elemento.innerHTML = `<p>Erro ao carregar o componente ${id}</p>`;
          });
  }
  
  // Carregar todos os componentes
  const promessas = componentes.map(comp => carregarComponente(comp.id, comp.arquivo));
  
  // Quando todos os componentes forem carregados
  Promise.all(promessas)
      .then(() => {
          console.log('Todos os componentes foram carregados.');
          // Disparar evento de todos os componentes carregados
          document.dispatchEvent(new CustomEvent('todosComponentesCarregados'));
      })
      .catch(error => {
          console.error('Erro ao carregar componentes:', error);
      });
});
