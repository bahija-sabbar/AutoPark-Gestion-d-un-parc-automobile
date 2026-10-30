// import { voituresInitiales } from './data.js'
// let nbrId=7;
// let indexmod=-1;
//  const liste = document.querySelector('#liste-voitures');
// function afficher() {

//     liste.replaceChildren();
//     voituresInitiales.forEach(element => {
//         const tr = document.createElement('tr');
//         const td1 = document.createElement('td');
//         const strong = document.createElement('strong');
//         strong.textContent = element.marque;
//         td1.appendChild(strong);

//         const td2 = document.createElement('td');
//         td2.textContent = element.modele;

//         const td3 = document.createElement('td');
//         const span = document.createElement('span');
//         span.className = "registration";
//         span.textContent = element.immatriculation;
//         td3.appendChild(span);

//         const td4 = document.createElement('td');
//         td4.textContent = element.categorie;

//         const td5 = document.createElement('td');
//         td5.className = "price";
//         td5.textContent = element.prixJour + " ";
//         const span2 = document.createElement('span');
//         span2.textContent = " DH/jour";
//         td5.appendChild(span2);
//         const td6 = document.createElement('td');
//         const span3 = document.createElement('span');
//         span3.textContent = element.statut;
//         const statut = element.statut?.trim().toLowerCase();

//         if (statut === 'disponible') {
//             span3.className = "badge badge-disponible";
//         } else if (statut === 'louée') {
//             span3.className = "badge badge-louee";
//         } else if (statut === 'en maintenance') {
//             span3.className = " badge badge-maintenance";
//         }

//         td6.appendChild(span3);
//         //   console.log(element.statut);
//         //     console.log(span3.className);


//         const td7 = document.createElement('td');
//         const div = document.createElement('div');
//         div.className = "row-actions";

//         const btnEdit = document.createElement('button');
//         btnEdit.className = "button button-edit";
//         btnEdit.setAttribute("data-action", "modifier");
//         btnEdit.setAttribute("data-id", element.id);

//         btnEdit.setAttribute("aria-label", `modifier ${element.marque} ,${element.modele} ,${element.immatriculation}`);
//         btnEdit.textContent = "Modifier";
//          btnEdit.addEventListener('submit', () => {
//       modifier(index)
//     })

//         const btnDelete = document.createElement('button');
//         btnDelete.className = "button button-delete";
//         btnDelete.setAttribute("data-action", "supprimer");
//         btnDelete.setAttribute("data-id", element.id);
//         btnDelete.setAttribute("aria-label", `Supprimer ${element.marque} ,${element.modele} ,${element.immatriculation}`);
//         btnDelete.textContent = "Supprimer";

//         div.appendChild(btnEdit);
//         div.appendChild(btnDelete);
//         td7.appendChild(div);


//         tr.appendChild(td1);
//         tr.appendChild(td2);
//         tr.appendChild(td3);
//         tr.appendChild(td4);
//         tr.appendChild(td5);
//         tr.appendChild(td6);
//         tr.appendChild(td7);
//         liste.appendChild(tr);

//     });

// }

// //   4.3. Ajout d’une voiture
// // Utiliser le formulaire fourni pour :

// // Vérifier les champs obligatoires et refuser les espaces seuls.
// // Contrôler que le prix est strictement positif.
// // Empêcher les immatriculations en doublon (sans tenir compte de la casse ni des espaces autour).
// // Afficher les erreurs près des champs.
// // Ajouter sans rechargement, confirmer et réinitialiser le formulaire

// const formulaire = document.querySelector('#formulaire-voiture');
// const marque = document.querySelector('#marque');
// const modele = document.querySelector('#modele');
// const immatriculation = document.querySelector('#immatriculation');
// const categorie = document.querySelector('#categorie');
// const prixJour = document.querySelector('#prix-jour');
// const statut = document.querySelector('#statut');

// formulaire.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const marqueValue = marque.value.trim();
//     const modeleValue = modele.value.trim();
//     const immatriculationValue = immatriculation.value.trim();
//     const categorieValue = categorie.value.trim();
//     const prixValue =   Number(prixJour.value);
//     const statutValue = statut.value.trim();

//     //    if (!marqueValue || !modeleValue || !immatriculationValue || !categorieValue || !statutValue || prixJour.value.trim() === '') {
//     //     alert("Veuillez remplir tous les champs");
//     //     return;
//     // }
//     // if( isNaN(prixValue) ||prixValue<0){
//     //     alert("le prix doit etre str positif!");
//     //     return;
//     // }
//     // if(immatriculationValue=){

//     // }

//     if(indexmod===-1){
//     const nouveauVoiture = {
//         id: nbrId++,
//         marque: marqueValue,
//         modele: modeleValue,
//         immatriculation:immatriculationValue,
//         categorie:categorieValue,
//         prixJour:prixValue,
//         statut:statutValue
//     }; voituresInitiales.push(nouveauVoiture);

//     }else{
//      voituresInitiales[indexmod].marque = marqueValue;
//     voituresInitiales[indexmod].modele = modeleValue;
//     voituresInitiales[indexmod].immatriculation= immatriculationValue;
//     voituresInitiales[indexmod].prixJour =prixValue;
//     voituresInitiales[indexmod].categorie =categorieValue;
//     voituresInitiales[indexmod].statut =statutValue;
//     indexmod = -1;
//     button.textContent = 'Ajouter les domandes';
//   }
//     voituresInitiales.push(nouveauVoiture);
//     afficher();
//     formulaire.reset();
//     console.log(nouveauVoiture.id);
    

// });

// // supprission 

// function supprimer(id) {
//   const voiture = voituresInitiales.find(v => v.id === id);
  
//   if (!confirm(`Supprimer ${voiture.marque} ${voiture.modele} (${voiture.immatriculation}) ?`)) {
//     return;
//   }
//   const garde = voituresInitiales.filter(v => v.id !== id);
//   voituresInitiales.length = 0;
//   voituresInitiales.push(...garde); 
//   afficher();
// }
// liste.addEventListener('click', (e) => {
//   if (e.target.dataset.action === 'supprimer') {
//    supprimer(Number(e.target.dataset.id));
//   }
// });

// // modification


// function modifier(index) {
//   let voiture = voituresInitiales[index];
  
//   marque.value = voiture.marque;
//   modele.value = voiture.modele;
//   immatriculation.value = voiture.immatriculation;
//   prixJour.value = voiture.prixJour;
//   categorie.value = voiture.categorie;
//   statut.value = voiture.statut
  
//   indexmod= index; 
//   button.textContent = 'Enregistrer les modifications';
// }

// afficher();
import { voituresInitiales } from './data.js'

let nbrId = 7;
let indexmod = -1; 
const liste = document.querySelector('#liste-voitures');
const formulaire = document.querySelector('#formulaire-voiture');
const marque = document.querySelector('#marque');
const modele = document.querySelector('#modele');
const immatriculation = document.querySelector('#immatriculation');
const categorie = document.querySelector('#categorie');
const prixJour = document.querySelector('#prix-jour');
const statut = document.querySelector('#statut');
const boutonEnregistrer = document.querySelector('#bouton-enregistrer');
const boutonAnnuler = document.querySelector('#annuler-modification');

function afficher() {
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
        const statutLower = element.statut?.trim().toLowerCase();
        if (statutLower === 'disponible') span3.className = "badge badge-disponible";
        else if (statutLower === 'louée') span3.className = "badge badge-louee";
        else if (statutLower === 'en maintenance') span3.className = "badge badge-maintenance";
        td6.appendChild(span3);

        const td7 = document.createElement('td');
        const div = document.createElement('div');
        div.className = "row-actions";

        const btnEdit = document.createElement('button');
        btnEdit.className = "button button-edit";
        btnEdit.setAttribute("data-action", "modifier");
        btnEdit.setAttribute("data-id", element.id);
        // btnDelete.setAttribute("aria-label", `modifier ${element.marque} ,${element.modele} ,${element.immatriculation}`);
        btnEdit.textContent = "Modifier";

        const btnDelete = document.createElement('button');
        btnDelete.className = "button button-delete";
        btnDelete.setAttribute("data-action", "supprimer");
        btnDelete.setAttribute("data-id", element.id);
        // btnDelete.setAttribute("aria-label", `Supprimer ${element.marque} ,${element.modele} ,${element.immatriculation}`);
        btnDelete.textContent = "Supprimer";

        div.appendChild(btnEdit);
        div.appendChild(btnDelete);
        td7.appendChild(div);

        tr.append(td1, td2, td3, td4, td5, td6, td7);
        liste.appendChild(tr);
    });
}

// AJOUT 
formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    const marqueValue = marque.value.trim();
    const modeleValue = modele.value.trim();
    const immatriculationValue = immatriculation.value.trim();
    const categorieValue = categorie.value.trim();
    const prixValue = Number(prixJour.value);
    const statutValue = statut.value.trim();

    
    // if (!marqueValue || !modeleValue || !immatriculationValue || !categorieValue) {
    //   alert("Champs obligatoires !"); return;
    // }
    // if (isNaN(prixValue) || prixValue <= 0) {
    //   alert("Prix doit être > 0"); return;
    // }
    // // Doublon
    // const doublon = voituresInitiales.some(v => 
    //   v.immatriculation.trim().toLowerCase() === immatriculationValue.toLowerCase() && 
    //   voituresInitiales.indexOf(v) !== indexmod
    // );
    // if (doublon) { alert("Immatriculation déjà existante !"); return; }

    if (indexmod === -1) {
        // AJOUT
        const nouveauVoiture = {
            id: nbrId++,
            marque: marqueValue,
            modele: modeleValue,
            immatriculation: immatriculationValue,
            categorie: categorieValue,
            prixJour: prixValue,
            statut: statutValue
        };
        voituresInitiales.push(nouveauVoiture);
    } else {
        // MODI
        voituresInitiales[indexmod].marque = marqueValue;
        voituresInitiales[indexmod].modele = modeleValue;
        voituresInitiales[indexmod].immatriculation = immatriculationValue;
        voituresInitiales[indexmod].prixJour = prixValue;
        voituresInitiales[indexmod].categorie = categorieValue;
        voituresInitiales[indexmod].statut = statutValue;
        
        indexmod = -1;
        boutonEnregistrer.textContent = 'Ajouter la voiture';
        boutonAnnuler.hidden = true;
    }

    afficher();
    formulaire.reset();
});

// SUPPRESSION
function supprimer(id) {
  const voiture = voituresInitiales.find(v => v.id === id);
  if (!voiture) return;
  if (!confirm(`Supprimer ${voiture.marque} ${voiture.modele} ?`)) return;
  
  const garde = voituresInitiales.filter(v => v.id !== id);
  voituresInitiales.length = 0;
  voituresInitiales.push(...garde); 
  afficher();
}

// MODIFICATION
function modifier(id) {
  const index = voituresInitiales.findIndex(v => v.id === id);
  if (index === -1) return;
  
  let voiture = voituresInitiales[index];
  marque.value = voiture.marque;
  modele.value = voiture.modele;
  immatriculation.value = voiture.immatriculation; 
  prixJour.value = voiture.prixJour;
  categorie.value = voiture.categorie;
  statut.value = voiture.statut;
  
  indexmod = index; 
  boutonEnregistrer.textContent = 'Enregistrer les modifications';
  boutonAnnuler.hidden = false;
  formulaire.scrollIntoView({ behavior: 'smooth' });
}

liste.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  if (btn.dataset.action === 'supprimer') supprimer(id);
  if (btn.dataset.action === 'modifier') modifier(id);
});

boutonAnnuler.addEventListener('click', () => {
  indexmod = -1;
  formulaire.reset();
  boutonEnregistrer.textContent = 'Ajouter la voiture';
  boutonAnnuler.hidden = true;
});
afficher();
// // RECHERCHER
const recherche = document.querySelector('#recherche');
const filtreStatut = document.querySelector('#filtre-statut');
const filtreCategorie = document.querySelector('#filtre-categorie');
const triPrix = document.querySelector('#tri-prix');
const btnReset = document.querySelector('#reinitialiser-filtres');
const etatVide = document.querySelector('#etat-vide');
const messageParc = document.querySelector('#message-parc');

function rechercheFiltre(voitures) {
  const terme = recherche.value.trim().toLowerCase();
  if (!terme) return voitures;
  
  return voitures.filter(v => 
    v.marque.toLowerCase().includes(terme) ||
    v.modele.toLowerCase().includes(terme) ||
    v.immatriculation.toLowerCase().includes(terme)
  );
}
function statutFiltre(voitures) {
  const statut = filtreStatut.value;
  if (!statut) return voitures;
  
  return voitures.filter(v => v.statut === statut);
}




