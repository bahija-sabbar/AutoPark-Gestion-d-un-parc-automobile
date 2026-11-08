

patrie2
# 🚗 AutoPark – Configurateur de location

## 📌 Présentation du projet

AutoPark est une application web développée dans le cadre d'un projet individuel chez YouCode, pour une agence fictive de location de voitures appelée **Atlas Auto**.

L'objectif de cette deuxième partie est de créer une interface permettant aux clients de sélectionner un véhicule et de définir leur période de location.

### 🔗 Liens
- **Démo en ligne:** (https://bahija-sabbar.github.io/AutoPark-Gestion-d-un-parc-automobile/)
- **Repo GitHub:**(https://github.com/bahija-sabbar/AutoPark-Gestion-d-un-parc-automobile)
- **Jira:**![Aperçu AutoPark](https://github.com/bahija-sabbar/AutoPark-Gestion-d-un-parc-automobile/blob/main/js/jira/image.png)
- ![Aperçu AutoPark](https://github.com/bahija-sabbar/AutoPark-Gestion-d-un-parc-automobile/blob/main/js/jira/image2.png))
---
## 🛠️ Technologies utilisées

- HTML5
- CSS3
- JavaScript Vanilla
- Manipulation du DOM

## ✨ Fonctionnalités réalisées

### 1. Sélection du véhicule
- Affichage dynamique des véhicules à partir d'un tableau JavaScript.
- Présentation des informations de chaque véhicule.
- Affichage de la marque et du modèle.
- Affichage de la catégorie et du prix journalier.
- Affichage du statut de disponibilité.
- Sélection d'un véhicule.
- Mise en évidence du véhicule sélectionné.
- Actualisation des informations du véhicule dans la zone latérale.

### 2. Gestion des dates
- Sélection de la date de début et de fin de location.
- Vérification des dates obligatoires.
- Vérification de la date de début pour empêcher une date passée.
- Vérification de la date de fin pour empêcher une date antérieure au début.
- Calcul du nombre de jours de location.
- Limitation de la durée de location à 30 jours.
- Affichage des messages d'erreur.
- Affichage de la durée de location lorsque les dates sont valides.

## 🚘 Véhicules proposés

| Véhicule | Catégorie | Prix / jour |
|---|---|---:|
| Dacia Sandero | Citadine | 250 MAD |
| Renault Clio | Citadine | 300 MAD |
| Dacia Duster | SUV | 450 MAD |

## 📂 Structure du projet

```text
AutoPark-Configurateur-Location/
│
├── location.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

## 🚀 Installation et lancement

1. Cloner le dépôt GitHub :

```bash
git clone URL_DU_DEPOT
```

2. Ouvrir le dossier du projet dans Visual Studio Code.

3. Lancer le fichier `location.html` avec Live Server.

## 👩‍💻 Réalisation

- Formation : YouCode
- Type de projet : Travail individuel
- Agence fictive : Atlas Auto
- Durée : 4 jours
- Date de lancement : 02 Novembre 2026
- Date de rendu : 05 Novembre 2026

partie1
# AutoPark - Gestion de Parc Automobile
## 📌 État du projet

Projet en cours de développement.

Projet individuel DWWM - Atlas Auto, agence fictive de location de voitures.

Application web vanilla JS permettant de gérer un parc automobile sans backend, avec persistance via localStorage.

### 🔗 Liens
- **Démo en ligne:** (https://bahija-sabbar.github.io/AutoPark-Gestion-d-un-parc-automobile/)
- **Repo GitHub:**(https://github.com/bahija-sabbar/AutoPark-Gestion-d-un-parc-automobile)
- **Jira:**![Aperçu AutoPark](https://github.com/bahija-sabbar/AutoPark-Gestion-d-un-parc-automobile/blob/main/js/jira/image.png)
- ![Aperçu AutoPark](https://github.com/bahija-sabbar/AutoPark-Gestion-d-un-parc-automobile/blob/main/js/jira/image2.png))
---

### 🚀 Présentation
AutoPark est composée de 2 pages:
1.  **Gestion du parc (`voitures.html`):** Tableau dynamique, ajout, modification, suppression, recherche, filtres et tri.
2.  **Dashboard (`index.html`):** 4 indicateurs calculés en temps réel.

L'application fonctionne 100% côté client.

### 🛠️ Technologies
- HTML5 sémantique
- CSS3 responsive (starter fourni + dashboard custom)
- JavaScript Vanilla ES6+ (modules `import/export`)
- localStorage pour la persistance
- Git / GitHub
- Jira pour le suivi

### ✨ Fonctionnalités réalisées

**4.2 Affichage:**
- Génération dynamique du tableau avec `forEach()`
- Badges visuels selon statut (Disponible / Louée / En maintenance)
- Message état vide géré avec `#etat-vide`

**4.3 Ajout:**
- `trim()` pour refuser les espaces seuls
- Contrôle prix > 0
- **Regex immatriculation:** `^[A-Z]{3}-[0-9]{3}$` (ex: ABC-123)
- Anti-doublon avec `some()` + `toLowerCase().trim()`
- Erreurs affichées près des champs `#erreur-*`
- Ajout sans rechargement + confirmation

**4.4 Modification:**
- Bouton Modifier préremplit le formulaire avec `findIndex()`
- Garde le même `id`, permet de conserver son immatriculation
- Bouton Annuler pour quitter le mode édition
- `scrollIntoView({behavior: 'smooth'})`

**4.5 Suppression:**
- `confirm()` avant suppression
- Suppression avec `filter()` + `length = 0` + `push()`

**4.6 Recherche / Filtres / Tri:**
- Recherche instantanée `input` event sur marque, modèle, immatriculation avec `includes()`
- Filtres catégorie et statut
- Tri numérique prix croissant / décroissant avec `sort()`
- `appliquerFiltres()` combine tous les critères
- Bouton réinitialiser + message si aucun résultat

**4.7 Persistance:**
- `localStorage` avec `JSON.stringify()` / `JSON.parse()`
- Sauvegarde après chaque CRUD via fonction `sauvegarder()`
- Au chargement: si sauvegarde existe on l'utilise, sinon on utilise `data.js`
- Si parc vidé volontairement, il reste vide

**4.8 Dashboard:**

### 📁 Structure des fichiers
/
├── index.html              # Dashboard (réalisé entièrement)
├── voitures.html           # Gestion du parc (starter rendu interactif)
├── css/
│   ├── style.css           # Starter
│  
├── js/
│   ├── data.js             # Données initiales (6 voitures)
│   ├── voitures.js         # Toute la logique CRUD + filtres + localStorage + validation
│   └── jira                # les images de jira
└── README.md
