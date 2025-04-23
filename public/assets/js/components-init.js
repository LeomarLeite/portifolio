/**
 * Inicialização dos componentes após carregamento
 */
document.addEventListener('todosComponentesCarregados', function() {
    console.log('Inicializando componentes...');
    
    // Inicializar serviços
    inicializarServicos();
    
    // Inicializar habilidades
    inicializarHabilidades();
    
    // Inicializar projetos
    inicializarProjetos();
    
    // Inicializar recomendações
    inicializarRecomendacoes();
    
    console.log('Todos os componentes foram inicializados.');
});

// Funções de inicialização para cada componente

function inicializarServicos() {
    const servicesContainer = document.getElementById('services-container');
    if (!servicesContainer || typeof servicesData === 'undefined') return;
    
    servicesContainer.innerHTML = '';
    servicesData.forEach(service => {
        servicesContainer.innerHTML += createServiceCard(service);
    });
    
    console.log('Componente de serviços inicializado.');
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

function inicializarHabilidades() {
    if (typeof skillsData === 'undefined') return;
    
    // Renderizar habilidades frontend
    const frontendContainer = document.getElementById('frontend-skills-container');
    if (frontendContainer) {
        frontendContainer.innerHTML = '';
        skillsData.frontend.forEach(skill => {
            frontendContainer.innerHTML += createSkillCard(skill);
        });
    }
    
    // Renderizar habilidades backend
    const backendContainer = document.getElementById('backend-skills-container');
    if (backendContainer) {
        backendContainer.innerHTML = '';
        skillsData.backend.forEach(skill => {
            backendContainer.innerHTML += createSkillCard(skill);
        });
    }
    
    console.log('Componente de habilidades inicializado.');
}

function createSkillCard(skill) {
    return `
        <article class="habilidade">
            <div class="habilidade_icon">
                <i class="fa-brands fa-${skill.icon}"></i>
            </div>
            <h4>${skill.name}</h4>
            <small>${skill.level}</small>
        </article>
    `;
}

function inicializarProjetos() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer || typeof projectsData === 'undefined') return;
    
    projectsContainer.innerHTML = '';
    projectsData.forEach(project => {
        projectsContainer.innerHTML += createProjectCard(project);
    });
    
    console.log('Componente de projetos inicializado.');
}

function createProjectCard(project) {
    const technologies = project.technologies.map(tech => 
        `<span class="projeto_tecnologia">${tech}</span>`
    ).join('');
    
    return `
        <article class="projeto">
            <div class="projeto_imagem">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="projeto_tecnologias">
                ${technologies}
            </div>
            <div class="projeto_links">
                <a href="${project.github}" target="_blank" class="btn btn-primary">GitHub</a>
                <a href="${project.demo}" target="_blank" class="btn">Demo</a>
            </div>
        </article>
    `;
}

function inicializarRecomendacoes() {
    const recommendationsContainer = document.getElementById('recommendations-container');
    if (!recommendationsContainer || typeof recommendationsData === 'undefined') return;
    
    recommendationsContainer.innerHTML = '';
    recommendationsData.forEach(recommendation => {
        recommendationsContainer.innerHTML += createRecommendationCard(recommendation);
    });
    
    console.log('Componente de recomendações inicializado.');
}

function createRecommendationCard(recommendation) {
    return `
        <article class="recomendacao">
            <div class="recomendacao_avatar">
                <img src="${recommendation.avatar}" alt="${recommendation.name}">
            </div>
            <div class="recomendacao_info">
                <h4>${recommendation.name}</h4>
                <small>${recommendation.position} | ${recommendation.company}</small>
                <p>${recommendation.text}</p>
            </div>
        </article>
    `;
}
