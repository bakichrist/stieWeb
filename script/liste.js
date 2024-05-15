fetch('../db/listes-onglets.json')
    .then(response => response.json())
    .then(data => {
        const listeHorizontale = document.querySelector(".ul-listes");
        data.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.href; // URL de la page de redirection
            a.textContent = item.title;
            const img = document.createElement('img');
            img.src = item.img;
            li.appendChild(img);
            li.appendChild(a);
            listeHorizontale.appendChild(li);
        });
    })
    .catch(error => console.error('Une erreur s\'est produite : ', error));