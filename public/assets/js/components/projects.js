/**
 * Script para o componente de projetos
 */
document.addEventListener('componenteCarregado', function(e) {
    if (e.detail.id === 'projetos') {
        renderizarProjetos();
    }
});

function renderizarProjetos() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer || typeof projectsData === 'undefined') return;
    
    projectsContainer.innerHTML = '';
    projectsData.forEach(project => {
        projectsContainer.innerHTML += createProjectCard(project);
    });
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
