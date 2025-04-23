/**
 * Script para o componente de habilidades
 */
document.addEventListener('componenteCarregado', function(e) {
    if (e.detail.id === 'habilidades') {
        renderizarHabilidades();
    }
});

function renderizarHabilidades() {
    if (typeof skillsData === 'undefined') return;
    
    // Renderizar habilidades frontend
    const frontendContainer = document.getElementById('frontend-skills-container');
    if (frontendContainer) {
        frontendContainer.innerHTML = '';
        skillsData.frontend.forEach(skill => {
            if (skill.level !== "Nenhum") { // Ignorar habilidades com nível "Nenhum"
                frontendContainer.innerHTML += createSkillCard(skill);
            }
        });
    }
    
    // Renderizar habilidades backend
    const backendContainer = document.getElementById('backend-skills-container');
    if (backendContainer) {
        backendContainer.innerHTML = '';
        skillsData.backend.forEach(skill => {
            if (skill.level !== "Nenhum") { // Ignorar habilidades com nível "Nenhum"
                backendContainer.innerHTML += createSkillCard(skill);
            }
        });
    }
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
