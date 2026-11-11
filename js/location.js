


const config = {
  voitures: [
    {
      id: 1,
      marque: "Dacia",
      modele: "Sandero",
      immatriculation: "AUTO-001",
      categorie: "Citadine",
      prixJour: 250,
      statut: "Disponible",
    },
    {
      id: 2,
      marque: "Renault",
      modele: "Clio",
      immatriculation: "AUTO-002",
      categorie: "Citadine",
      prixJour: 300,
      statut: "Disponible",
    },
    {
      id: 3,
      marque: "Dacia",
      modele: "Duster",
      immatriculation: "AUTO-003",
      categorie: "SUV",
      prixJour: 450,
      statut: "Disponible",
    },
  ],

  modesRecuperation: [
    { id: "agence", nom: "À l’agence", fraisFixes: 0 },
    { id: "aeroport", nom: "À l’aéroport", fraisFixes: 150 },
    { id: "adresse", nom: "À une adresse", fraisFixes: 100 },
  ],

  agences: ["Casablanca — Centre-ville", "Rabat — Agdal", "Marrakech — Guéliz"],

  aeroports: ["Casablanca — Mohammed V", "Rabat — Salé", "Marrakech — Ménara"],

  options: [
    { id: "siegeBebe", nom: "Siège bébé", prixParJour: 30 },
    {
      id: "conducteurSupplementaire",
      nom: "Conducteur supplémentaire",
      prixParJour: 200,
    },
  ],
};


document.addEventListener('DOMContentLoaded', () => {
    const liste = document.querySelector('.cars');
    if (!liste) return;
    liste.innerHTML = '';

    config.voitures.forEach((voiture, index) => {
        const label = document.createElement('label');
        label.className = 'car';
        if (index === 0) label.classList.add('selected');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'voitureSelectionnee';
        input.hidden = true;
        if (index === 0) input.checked = true;

        const carTop = document.createElement('div');
        carTop.className = 'car-top';

        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = voiture.categorie;

        const radio = document.createElement('div');
        radio.className = 'radio';
        if (index === 0) radio.classList.add('on');

        const b = document.createElement('b');
        b.textContent = voiture.marque + ' ' + voiture.modele;

        const dispo = document.createElement('p');
        dispo.className = 'green';
        dispo.textContent = voiture.statut;

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = voiture.prixJour + ' MAD / jour';

        carTop.appendChild(tag);
        carTop.appendChild(radio);
        label.appendChild(input);
        label.appendChild(carTop);
        label.appendChild(b);
        label.appendChild(dispo);
        label.appendChild(price);


 function afficherDansSide(voiture) {
        document.querySelector('#side-title').textContent = voiture.marque + ' ' + voiture.modele;
        document.querySelector('#side-desc').textContent = voiture.categorie + ' - ' + voiture.prixJour + ' MAD / jour';
    }

        input.addEventListener('change', () => {
            document.querySelectorAll('.car').forEach(el => el.classList.remove('selected'));
            document.querySelectorAll('.car .radio').forEach(el => el.classList.remove('on'));

            label.classList.add('selected');
            radio.classList.add('on');

            afficherDansSide(voiture);
        });

        liste.appendChild(label);

        if (index === 0) afficherDansSide(voiture);
    });
});
function validationDate() {
  const debutInput = document.querySelector('#dateDebut');
  const finInput = document.querySelector('#dateFin');
  const erreur = document.querySelector('#erreurDates');
  const info = document.querySelector('#infoDuree');
  const btnSuivant = document.querySelector('.btn-blue');

  const debut = debutInput.value;
  const fin = finInput.value;


  erreur.style.display = 'none';
  erreur.textContent = '';



  function afficherErreur(message) {
    erreur.textContent = message;
    erreur.style.display = 'block';
    info.textContent = 'Veuillez corriger vos dates.';
    btnSuivant.disabled = true;
    return false;
  }


  if (!debut || !fin) {
    info.textContent = 'Choisissez vos dates.';
    return false;
  }

  const d1 = new Date(debut);
  const d2 = new Date(fin);
  const aujourdHui = new Date();
  aujourdHui.setHours(0, 0, 0, 0);

  if (d1 < aujourdHui) {
    return afficherErreur('La date de début ne peut pas être dans le passé.');
  }
   if (d2 < d1) {
    return afficherErreur('La date de fin doit être après la date de début.');
  }
    const nbJours = (d2 - d1) / (1000 * 60 * 60 * 24) + 1;

  btnSuivant.disabled = false;
  btnSuivant.style.opacity = '1';
  info.textContent = `Durée : ${nbJours} jours. Les dates de début et de fin sont incluses.`;
  return true;
}

function  calculerTotal(){
  const debut = document.querySelector('#dateDebut').value;
  const fin = document.querySelector('#dateFin').value;
  if (!debut || !fin) return 0;

  const d1 = new Date(debut);
  const d2 = new Date(fin);
  const nbJours = (d2 - d1) / (1000 * 60 * 60 * 24) + 1;
  if (nbJours <= 0 || nbJours > 30) return 0;

  const prixVehicule = voiture.prixJour * nbJours;
  const total = prixVehicule;

  const opts = { day: 'numeric', month: 'long', year: 'numeric' };
  document.querySelector('.side .bold-small').textContent =
    d1.toLocaleDateString('fr-FR', opts) + ' → ' + d2.toLocaleDateString('fr-FR', opts);


  const smallGreys = document.querySelectorAll('.side .small-grey');
  smallGreys[1].textContent = `${nbJours} jours - dates incluses`;


  const lines = document.querySelectorAll('.side .line');
  lines[0].children[0].textContent = `Véhicule - ${nbJours} × ${voiture.prixJour} MAD`;
  lines[0].children[1].textContent = `${prixVehicule} MAD`;


  document.querySelector(' .big-blue').textContent = `${total} MAD`;

  return total;
}

document.querySelector('#dateDebut').addEventListener('change', () => {
  validationDate();
  calculerTotal();
});
document.querySelector('#dateFin').addEventListener('change', () => {
  validationDate();
  calculerTotal();
});


document.querySelector('.btn-blue').addEventListener('click', (e) => {
  if (!validationDate()) {
    e.preventDefault();
    alert(' corriger vos dates ');
  } else {
    alert('Dates valides. passe a l’étape 2');
  }
});



    
