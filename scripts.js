window.addEventListener('DOMContentLoaded', (event) => {
    // Exemple de données pour les projets
    const projects = [
        { title: "Projet 1", lang: "Python", description: "projet tldraw", link: "https://github.com/freddu13/tldraw-project" },
        { title: "Projet 2", lang: "Python, Pandas", description: "code d'un jeu snake", link: "https://github.com/freddu13/snake.tmp" },
        { title: "Projet 3", lang: "Python", description: "hackathon 1", link: "https://github.com/freddu13/pe-hackathon" }
    ];

    // Fonction pour créer une ligne de tableau HTML pour chaque projet
    function populateTable() {
        const projectsTable = document.getElementById('projects-table');
        projects.forEach(project => {
            let row = projectsTable.insertRow();
            let titleCell = row.insertCell(0);
            let langCell = row.insertCell(1);
            let descCell = row.insertCell(2);
            let linkCell = row.insertCell(3);

            titleCell.textContent = project.title;
            langCell.textContent = project.lang;
            descCell.textContent = project.description;
            linkCell.innerHTML = `<a href="${project.link}" target="_blank">Voir Projet</a>`;
        });
    }

    populateTable();
});

// Fonction de filtrage (exemple simple)
function filterTable() {
    let input = document.getElementById('filterInput');
    let filter = input.value.toUpperCase();
    let table = document.getElementById('projects-table');
    let tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];  // Changer l'index selon la colonne à filtrer, 0 pour titre
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}
