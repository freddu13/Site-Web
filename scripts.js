window.addEventListener('DOMContentLoaded', (event) => {
    const projects = [
        { title: "Uno", lang: "Python", description: "projet tldraw miam", link: "https://github.com/freddu13/tldraw-project" },
        { title: "Dos", lang: "Python, Pandas", description: "code d'un jeu snake oicoubeh", link: "https://github.com/freddu13/snake.tmp" },
        { title: "Tres", lang: "Python", description: "hackathon 1 pagnan", link: "https://github.com/freddu13/pe-hackathon" },
        { title: "Cuatro", lang: "Python", description: "projet banger de fou -->", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
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
