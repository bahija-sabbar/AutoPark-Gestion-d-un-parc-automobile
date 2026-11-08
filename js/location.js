


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

// document.addEventListener('DOMContentLoaded', () => {


//   const liste = document.querySelector('.cars');
//   if(!liste)return;
//   liste.innerHTML = '';

//   config.voitures.forEach((voiture , index)=> {


//     const label = document.createElement('label');
//     label.className = 'car';
//        if (index === 0) label.classList.add('selected');

//     const input = document.createElement('input');
//     input.type = 'radio';
//     input.name = 'voitureSelectionnee';
//     input.value = voiture.marque + ' ' + voiture.modele;
//     input.hidden = true;
//     if (index === 0) input.checked = true;

//     const carTop = document.createElement('div');
//     carTop.className = 'car-top';

//     const tag = document.createElement('span');
//     tag.className = 'tag';
//     tag.textContent = voiture.categorie;

//     const radio = document.createElement('div');
//     radio.className = 'radio';
//     if (index === 0) radio.classList.add('on');


//     const b = document.createElement('b');
//     b.textContent = voiture.marque + ' ' + voiture.modele;

//     const dispo = document.createElement('p');
//     dispo.className = 'green';
//     dispo.textContent = voiture.statut;

//     const price = document.createElement('p');
//     price.className = 'price';
//     price.textContent = voiture.prixJour + ' MAD / jour';


//     carTop.appendChild(tag);
//     carTop.appendChild(radio);

//     label.appendChild(input);
//     label.appendChild(carTop);
//     label.appendChild(b);
//     label.appendChild(dispo);
//     label.appendChild(price);

// input.addEventListener('change',()=>{

//  const  car=document.querySelectorAll('.car');
// car.forEach(el => el.classList.remove('selected'));


//  const change=document.querySelectorAll('.car .radio');
// change.forEach(el => el.classList.remove('on'));

//  label.classList.add('selected');
//  radio.classList.add('on');

//   const title=document.querySelector('#side-title')
//  const desc= document.querySelector('#side-desc');
//          title.textContent = voiture.marque + ' ' + voiture.modele;
//         desc.textContent = voiture.categorie + ' - ' + voiture.prixJour + ' MAD / jour';

// })
// liste.appendChild(label);
//   });

// });




document.addEventListener('DOMContentLoaded', () => {
    const liste = document.querySelector('.cars');
    if (!liste) return;
    liste.innerHTML = '';

    function afficherDansSide(voiture) {
        document.querySelector('#side-title').textContent = voiture.marque + ' ' + voiture.modele;
        document.querySelector('#side-desc').textContent = voiture.categorie + ' - ' + voiture.prixJour + ' MAD / jour';
    }

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
 function validationDate(){
    
 }
