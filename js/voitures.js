import { voituresInitiales } from './data.js'
let nbrId=7;
function afficher() {

    const liste = document.querySelector('#liste-voitures');
    liste.replaceChildren();
    voituresInitiales.forEach(element => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const strong = document.createElement('strong');
        strong.textContent = element.marque;
        td1.appendChild(strong);

        const td2 = document.createElement('td');
        td2.textContent = element.modele;

        const td3 = document.createElement('td');
        const span = document.createElement('span');
        span.className = "registration";
        span.textContent = element.immatriculation;
        td3.appendChild(span);

        const td4 = document.createElement('td');
        td4.textContent = element.categorie;

        const td5 = document.createElement('td');
        td5.className = "price";
        td5.textContent = element.prixJour + " ";
        const span2 = document.createElement('span');
        span2.textContent = " DH/jour";
        td5.appendChild(span2);
        const td6 = document.createElement('td');
        const span3 = document.createElement('span');
        span3.textContent = element.statut;
        const statut = element.statut?.trim().toLowerCase();

        if (statut === 'disponible') {
            span3.className = "badge badge-disponible";
        } else if (statut === 'louée') {
            span3.className = "badge badge-louee";
        } else if (statut === 'en maintenance') {
            span3.className = " badge badge-maintenance";
        }

        td6.appendChild(span3);
        //   console.log(element.statut);
        //     console.log(span3.className);


        const td7 = document.createElement('td');
        const div = document.createElement('div');
        div.className = "row-actions";

        const btnEdit = document.createElement('button');
        btnEdit.className = "button button-edit";
        btnEdit.setAttribute("data-action", "modifier");
        btnEdit.setAttribute("data-id", element.id);

        btnEdit.setAttribute("aria-label", `modifier ${element.marque} ,${element.modele} ,${element.immatriculation}`);
        btnEdit.textContent = "Modifier";

        const btnDelete = document.createElement('button');
        btnDelete.className = "button button-delete";
        btnDelete.setAttribute("data-action", "supprimer");
        btnDelete.setAttribute("data-id", element.id);
        btnDelete.setAttribute("aria-label", `Supprimer ${element.marque} ,${element.modele} ,${element.immatriculation}`);
        btnDelete.textContent = "Supprimer";

        div.appendChild(btnEdit);
        div.appendChild(btnDelete);
        td7.appendChild(div);


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        liste.appendChild(tr);

    });

}
afficher();
//   4.3. Ajout d’une voiture
// Utiliser le formulaire fourni pour :

// Vérifier les champs obligatoires et refuser les espaces seuls.
// Contrôler que le prix est strictement positif.
// Empêcher les immatriculations en doublon (sans tenir compte de la casse ni des espaces autour).
// Afficher les erreurs près des champs.
// Ajouter sans rechargement, confirmer et réinitialiser le formulaire

const formulaire = document.querySelector('#formulaire-voiture');
const marque = document.querySelector('#marque');
const modele = document.querySelector('#modele');
const immatriculation = document.querySelector('#immatriculation');
const categorie = document.querySelector('#categorie');
const prixJour = document.querySelector('#prix-jour');
const statut = document.querySelector('#statut');

formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    const marqueValue = marque.value.trim();
    const modeleValue = modele.value.trim();
    const immatriculationValue = immatriculation.value.trim();
    const categorieValue = categorie.value.trim();
    const prixValue =   Number(prixJour.value);
    const statutValue = statut.value.trim();

       if (!marqueValue || !modeleValue || !immatriculationValue || !categorieValue || !statutValue || prixJour.value.trim() === '') {
        alert("Veuillez remplir tous les champs");
        return;
    }
    if( isNaN(prixValue) ||prixValue<0){
        alert("le prix doit etre str positif!");
        return;
    }
    if(immatriculationValue=){

    }

    const nouveauVoiture = {
        id: nbrId++,
        marque: marqueValue,
        modele: modeleValue,
        immatriculation:immatriculationValue,
        categorie:categorieValue,
        prixJour:prixValue,
        statut:statutValue
    };
    voituresInitiales.push(nouveauVoiture);
    afficher();
    formulaire.reset();
    console.log(nouveauVoiture.id);
    

});
afficher();


