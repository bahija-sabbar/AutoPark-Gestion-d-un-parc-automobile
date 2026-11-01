import { voituresInitiales } from './data.js'



const STORAGE_KEY = 'parc_automobile';

//LOCAL STORAGE 
const dataSauvegarde = localStorage.getItem(STORAGE_KEY);
if (dataSauvegarde) {
    const dataParse = JSON.parse(dataSauvegarde);
    voituresInitiales.length = 0;
    voituresInitiales.push(...dataParse);
}

function sauvegarder() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(voituresInitiales));
}

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
const recherche = document.querySelector('#recherche');
const filtreStatut = document.querySelector('#filtre-statut');
const filtreCategorie = document.querySelector('#filtre-categorie');
const triPrix = document.querySelector('#tri-prix');
const btnReset = document.querySelector('#reinitialiser-filtres');
const etatVide = document.querySelector('#etat-vide');


const erreurMarque = document.querySelector('#erreur-marque');
const erreurModele = document.querySelector('#erreur-modele');
const erreurImmat = document.querySelector('#erreur-immatriculation');
const erreurCategorie = document.querySelector('#erreur-categorie');
const erreurPrix = document.querySelector('#erreur-prix-jour');
const messageForm = document.querySelector('#message-formulaire');
const REGEX_MATRICULE = /^[A-Z]{3}-[0-9]{3}$/i; 

function afficher(listeAffiche = voituresInitiales) {
    liste.replaceChildren();
    if (etatVide) etatVide.hidden = listeAffiche.length !== 0;

    listeAffiche.forEach(element => {
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
        btnEdit.textContent = "Modifier";
        const btnDelete = document.createElement('button');
        btnDelete.className = "button button-delete";
        btnDelete.setAttribute("data-action", "supprimer");
        btnDelete.setAttribute("data-id", element.id);
        btnDelete.textContent = "Supprimer";
        div.appendChild(btnEdit);
        div.appendChild(btnDelete);
        td7.appendChild(div);
        tr.append(td1, td2, td3, td4, td5, td6, td7);
        liste.appendChild(tr);
    });
}

// VALIDATION + AJOUT
formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();
    
    const marqueValue = marque.value.trim();
    const modeleValue = modele.value.trim();
    const immatriculationValue = immatriculation.value.trim().toUpperCase();
    const categorieValue = categorie.value.trim();
    const prixValue = Number(prixJour.value);
    const statutValue = statut.value.trim();

    let isValid = true;

    // Marque
    if (!marqueValue) {
        erreurMarque.textContent = "Marque obligatoire";
        isValid = false;
    }
    // Modèle
    if (!modeleValue) {
        erreurModele.textContent = "Modèle obligatoire";
        isValid = false;
    }
    // Catégorie
    if (!categorieValue) {
        erreurCategorie.textContent = "Catégorie obligatoire";
        isValid = false;
    }
    // Prix
    if (isNaN(prixValue) || prixValue <= 0) {
        erreurPrix.textContent = "Prix doit être > 0";
        isValid = false;
    }
    // Immatriculation 
    if (!immatriculationValue) {
        erreurImmat.textContent = "Immatriculation obligatoire";
        isValid = false;
    } else if (!REGEX_MATRICULE.test(immatriculationValue)) {
        erreurImmat.textContent = "Format invalide ! Ex: ABC-123 (3 lettres - 3 chiffres)";
        isValid = false;
    } else {
        // Doublon
        const doublon = voituresInitiales.some(v => 
            v.immatriculation.trim().toLowerCase() === immatriculationValue.toLowerCase() && 
            voituresInitiales.indexOf(v) !== indexmod
        );
        if (doublon) {
            erreurImmat.textContent = "Immatriculation déjà existante !";
            isValid = false;
        }
    }

    if (!isValid) {
        messageForm.textContent = "Corrigez les erreurs du formulaire";
        messageForm.style.color = "red";
        return;
    }

    if (indexmod === -1) {
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
        messageForm.textContent = "Voiture ajoutée avec succès !";
    } else {
        voituresInitiales[indexmod].marque = marqueValue;
        voituresInitiales[indexmod].modele = modeleValue;
        voituresInitiales[indexmod].immatriculation = immatriculationValue;
        voituresInitiales[indexmod].prixJour = prixValue;
        voituresInitiales[indexmod].categorie = categorieValue;
        voituresInitiales[indexmod].statut = statutValue;
        indexmod = -1;
        boutonEnregistrer.textContent = 'Ajouter la voiture';
        boutonAnnuler.hidden = true;
        messageForm.textContent = "Voiture modifiée avec succès !";
    }

    messageForm.style.color = "green";
    sauvegarder();
    appliquerFiltres();
    formulaire.reset();
    setTimeout(() => messageForm.textContent = '', 3000);
});

function clearErrors() {
    if(erreurMarque) erreurMarque.textContent = '';
    if(erreurModele) erreurModele.textContent = '';
    if(erreurImmat) erreurImmat.textContent = '';
    if(erreurCategorie) erreurCategorie.textContent = '';
    if(erreurPrix) erreurPrix.textContent = '';
    if(messageForm) messageForm.textContent = '';
}


function supprimer(id) {
  const voiture = voituresInitiales.find(v => v.id === id);
  if (!voiture) return;
  if (!confirm(`Supprimer ${voiture.marque} ${voiture.modele} ?`)) return;
  const garde = voituresInitiales.filter(v => v.id !== id);
  voituresInitiales.length = 0;
  voituresInitiales.push(...garde); 
  sauvegarder();
  appliquerFiltres();
}

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

function appliquerFiltres() {
  let resultat = [...voituresInitiales];
  const terme = recherche.value.trim().toLowerCase();
  if (terme) {
    resultat = resultat.filter(v => 
      v.marque.toLowerCase().includes(terme) ||
      v.modele.toLowerCase().includes(terme) ||
      v.immatriculation.toLowerCase().includes(terme)
    );
  }
  if (filtreStatut.value) resultat = resultat.filter(v => v.statut === filtreStatut.value);
  if (filtreCategorie.value) resultat = resultat.filter(v => v.categorie === filtreCategorie.value);
  if (triPrix.value === 'croissant') resultat.sort((a, b) => a.prixJour - b.prixJour);
  if (triPrix.value === 'decroissant') resultat.sort((a, b) => b.prixJour - a.prixJour);
  afficher(resultat);
}

function reinitialiserFiltres() {
  recherche.value = '';
  filtreStatut.value = '';
  filtreCategorie.value = '';
  triPrix.value = '';
  afficher(voituresInitiales);
}

recherche.addEventListener('input', appliquerFiltres);
filtreStatut.addEventListener('change', appliquerFiltres);
filtreCategorie.addEventListener('change', appliquerFiltres);
triPrix.addEventListener('change', appliquerFiltres);
btnReset.addEventListener('click', reinitialiserFiltres);

afficher();