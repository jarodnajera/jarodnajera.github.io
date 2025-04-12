const projects = document.getElementById('projects');
const clientPortfolio = document.getElementById('client-portfolio');

function toggleProjects() {
    projects.classList.remove('hidden');
    if(!clientPortfolio.classList.contains('hidden')) {
        clientPortfolio.classList.add('hidden');
    }
}

function toggleClientPortfolio() {
    clientPortfolio.classList.remove('hidden');
    if(!projects.classList.contains('hidden')) {
        projects.classList.add('hidden');
    }
}