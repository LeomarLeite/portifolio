/**
 * Arquivo principal para carregamento de dados
 * Este arquivo importa todos os arquivos de dados do projeto
 */

// Função para carregar um script dinamicamente
function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Falha ao carregar o script ${url}`));
        document.head.appendChild(script);
    });
}

// Lista de arquivos de dados para carregar
const dataFiles = [
    'data/skills.js',
    'data/projects.js',
    'data/services.js',
    'data/recommendations.js'
];

// Carregar todos os arquivos de dados em sequência
async function loadAllDataFiles() {
    for (const file of dataFiles) {
        try {
            await loadScript(file);
        } catch (error) {
            console.error(error);
        }
    }
    
    // Disparar um evento quando todos os dados estiverem carregados
    document.dispatchEvent(new CustomEvent('dadosCarregados'));
}

// Iniciar o carregamento dos arquivos de dados
loadAllDataFiles();
