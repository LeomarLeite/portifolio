/**
 * Script para o componente de serviços
 */
document.addEventListener('componenteCarregado', function(e) {
    if (e.detail.id === 'servicos') {
        renderizarServicos();
    }
});

function renderizarServicos() {
    const servicesContainer = document.getElementById('services-container');
    if (!servicesContainer || typeof servicesData === 'undefined') return;
    
    servicesContainer.innerHTML = '';
    servicesData.forEach(service => {
        servicesContainer.innerHTML += createServiceCard(service);
    });
}

function createServiceCard(service) {
    // Criar itens da lista
    const listItems = service.items.map(item => 
        `<li>
            <span class="check-icon">✓</span>
            <p>${item}</p>
        </li>`
    ).join('');
    
    return `
        <article class="servico">
            <div class="servico_head">
                <h3>${service.title}</h3>
            </div>
            <ul class="servico_list">
                ${listItems}
            </ul>
        </article>
    `;
}
