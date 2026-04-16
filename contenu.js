// ╔══════════════════════════════════════════════════════════════════╗
// ║              OKWIDE — FICHIER DE CONTENU DU SITE                 ║
// ╠══════════════════════════════════════════════════════════════════╣
// ║  ✏️  Modifiez CE FICHIER pour changer le texte du site           ║
// ║  📷  Pour les photos, lisez le fichier GUIDE.txt                 ║
// ║  💾  Après chaque modification : Enregistrer → Actualiser Chrome ║
// ╚══════════════════════════════════════════════════════════════════╝

const CONTENU = {

  // ══════════════════════════════════════════════════════
  // 1. INFORMATIONS GÉNÉRALES
  // ══════════════════════════════════════════════════════
  infos: {
    email:     "okwiderepelec@gmail.com",
    telephone: "+33 (0)6 46 14 40 42",
    adresse:   "96 impasse du serpolet — 83210 La Farlede, France",
    horaires:  "Lun–Ven : 8h30 – 17h00",
  },

  // ══════════════════════════════════════════════════════
  // 2. SECTION HERO (grande bannière d'accueil)
  // ══════════════════════════════════════════════════════
  hero: {
    badge:       "Réparation - Maintenance - Vente",
    // Les 3 lignes du grand titre (titre_2 = ligne rouge) :
    titre_1:     "",               // ← ligne blanche (laisser vide pour commencer par le rouge)
    titre_2:     "EFOILS &",       // ← ligne en rouge
    titre_3:     "WATERTOYS",      // ← ligne blanche
    description: "Experts en réparation, maintenance et vente de matériels nautiques électriques. Efoils, Esurfs, foil assist — batterie, moteur, télécommande : nous intervenons sur l'ensemble de vos équipements, pour les particuliers comme les professionnels.",
    cta_1:       "Demander un devis",
    cta_2:       "Voir nos services",
    // 📷 Photo : déposez votre fichier sous le nom images/hero.webp
  },

  // ══════════════════════════════════════════════════════
  // 3. SERVICES (les 4 cartes de services)
  // ══════════════════════════════════════════════════════
  // Pour ajouter un service, copiez un bloc { ... } et collez-le après le dernier
  services: [
    {
      titre:       "Diagnostic & Réparation Efoil",
      description: "Analyse complète par nos techniciens. Identification précise des pannes électroniques, mécaniques et électriques sur tous modèles du marché.",
    },
    {
      titre:       "Maintenance Préventive",
      description: "Programmes de maintenance régulière adaptés à votre usage. Préservez la performance et la durée de vie de votre matériel.",
    },
    {
      titre:       "SAV Batteries & Électronique",
      description: "Reconditionnement Li-ion, réparation BMS, ESC... Intervention rapide avec pièces d'origine ou certifiées.",
    },
    {
      titre:       "Réparation Planche & Foils",
      description: "Réparation des impacts, fissures sur les planches et Foils en fibre ou carbone. Egalement réparation complète des boitiers arrachés ou fissurés sur les planches.",
    },
  ],

  // ══════════════════════════════════════════════════════
  // 4. À PROPOS
  // ══════════════════════════════════════════════════════
  apropos: {
    // Les 2 paragraphes de texte :
    texte_1: "Fondé par des passionnés de sports nautiques et d'électronique embarquée, Okwide est devenu une référence en matière de réparation et maintenance de vos Efoils et Esurfs. Notre atelier spécialisé traite chaque équipement avec rigueur et précision.",
    texte_2: "Nous intervenons sur toutes les marques du marché (Takuma, Sifly, Aerofoils, PWR, Jetwave ...) et proposons des pièces détachées d'origine ou certifiées compatibles, garantissant des réparations durables et des performances optimales.",
    // Les 3 chiffres clés :
    stats: [
      { valeur: 300,  suffixe: "+", label: "Réparations réalisées"  },
      { valeur: 5,    suffixe: "",  label: "Ans d'expérience"       },
      { valeur: 100,   suffixe: "+", label: "Clients particuliers et professionnels" },
    ],
    // 📷 Photo atelier : déposez votre fichier sous le nom images/atelier.webp
  },

  // ══════════════════════════════════════════════════════
  // 5. PRODUITS (les cartes de la boutique)
  // ══════════════════════════════════════════════════════
  // Pour ajouter un produit, copiez un bloc { ... } et collez-le à la suite
  // badge : mettez "" si vous ne voulez pas de badge
  // photo : chemin vers l'image du produit dans images/
  produits: [
    {
      badge:       "Occasion",
      categorie:   "Batterie",
      nom:         "Batterie Efoil Takuma 35Ah",
      description: "Batterie Li-ion haute performance. Occasion - Garantie 12 mois, BMS intégré.",
      prix:        "900 €",
      photo:       "images/batterie.webp",
      stock:       false,   // ← true = "En stock" | false = "Non disponible"
    },
    {
      badge:       "Occasion",
      categorie:   "Propulsion",
      nom:         "Propulsion Hélice Takuma - Mat 50cm",
      description: "Occasion révisée - Très bon état. Possible de le passer en mat 65cm.",
      prix:        "900 €",
      photo:       "images/propulsion.webp",
      stock:       true,
    },
    {
      badge:       "Top vente",
      categorie:   "Électronique",
      nom:         "Mini ESC Takuma",
      description: "ESC Takuma d'origine - neuf.",
      prix:        "1200 €",
      photo:       "images/esc.webp",
      stock:       true,
    },
    {
      badge:       "Top vente",
      categorie:   "Télécommande",
      nom:         "Télécommande Takuma",
      description: "Pack complet neuf: Télécommande + chargeur.",
      prix:        "299 €",
      photo:       "images/Télécommande.webp",
      stock:       false,
    },
    {
      badge:       "Top vente",
      categorie:   "Télécommande",
      nom:         "Télécommande Takuma seule",
      description: "Télécommande seule neuve.",
      prix:        "250 €",
      photo:       "images/remoteonly.webp",
      stock:       false,
    },
    {
      badge:       "Reconditionné",
      categorie:   "Matériel reconditionné",
      nom:         "Efoil Complet Reconditionné",
      description: "Efoil révisé et reconditionné. Garantie 6 mois. Prix hors transport.",
      prix:        "3 850 €",
      stock:       true,
      photo:       "images/efoilcruising.jpg",
    },
  ],

  // ══════════════════════════════════════════════════════
  // 6. OFFRE MAINTENANCE PRÉVENTIVE (section avant Témoignages)
  // ══════════════════════════════════════════════════════
  maintenance: {
    tag:          "Maintenance préventive",
    titre:        "RÉVISION COMPLÈTE",
    prix:         "99€",
    prix_barre:   "150€",
    sous_titre:   "TTC · Révision complète",
    bouton:       "Réserver ma révision",
    // 🔗 Lien du formulaire de réservation :
    lien:         "https://forms.fillout.com/t/hVAQLjz5AJus",
    // Les conditions affichées sous le prix :
    conditions: [
      "Valable jusqu'au 30 avril",
      "Tous Efoils & engins nautiques électriques",
      "Pièces facturées en supplément si nécessaire",
      "A partir de 99€ selon la marque du matériel",
    ],
    // Les 4 étapes de la révision :
    etapes: [
      {
        titre:       "Contrôle de la visserie",
        description: "Inspection et serrage de l'ensemble de la visserie structurelle. Une étape fondamentale pour une navigation sûre et sans surprise.",
      },
      {
        titre:       "Connecteurs électriques",
        description: "Contrôle, nettoyage en profondeur et protection des connecteurs.",
      },
      {
        titre:       "Hélice & graissage",
        description: "Contrôle de l'état de l'hélice, graissage des pièces mécaniques mobiles et vérification des jeux pour un rendement maximal.",
      },
      {
        titre:       "Test moteur sur banc d'essai",
        description: "Test complet — puissance, vibrations — sur banc d'essai dédié avant remise à l'eau. Zéro compromis.",
      },
    ],
  },

  // ══════════════════════════════════════════════════════
  // 7. NOS PARTENAIRES (section À propos)
  // ══════════════════════════════════════════════════════
  // label = texte affiché si pas de logo | photo = chemin vers le fichier logo
  // 📷 Déposez vos logos dans images/ avec les noms indiqués
  clients: [
    { label: "Takuma",    photo: "images/takuma.webp" },
    { label: "Sifly",     photo: "images/sifly.webp" },
    { label: "Aerofoils", photo: "images/aerofoils.jpeg" },
    { label: "Duotone",   photo: "images/duotone.jpeg" },
  ],

  // ══════════════════════════════════════════════════════
  // 8. TÉMOIGNAGES
  // ══════════════════════════════════════════════════════
  // etoiles : nombre entre 1 et 5
  temoignages: [
    {
      texte:  "Merci à Okwide d'être présent pour la maintenance et réparation des efoils Takuma. Je suis très satisfait de leur prestation rapide sur mon efoil Vantage. En passant à leur atelier, j'ai pu constater leurs compétences et expertises, ce qui facilite grandement la recherche de panne et intervention. En plus ils sont très sympas et avenants. Je recommande, n'hésitez pas à les contacter même pour d'autre marques",
      nom:    "Jean-Paul C.",
      role:   "Particulier",
      etoiles: 5,
    },
    {
      texte:  "Je recommande l'entreprise Okwide pour sa compétence et son sérieux. Cyril saura vous réparer et entretenir les e-foil Takuma ainsi que toutes les autres marques.",
      nom:    "GM.",
      role:   "Pratiquant Efoil",
      etoiles: 5,
    },
    {
      texte:  "Nous avons sollicité à 2 reprises Okwide, ils ont été super pro pour nous le réparer rapidement étant en pleine saison d utilisation et ils viennent de faire l hivernage avec beaucoup de sérieux et de professionnalisme et en bonus ils sont super sympa.",
      nom:    "Sandra T.",
      role:   "Particulier — Côte d'Azur",
      etoiles: 5,
    },
    {
      texte:  "Équipe parfaite et extrêmement compétente!",
      nom:    "Arnaud G.",
      role:   "Gérant — Base nautique",
      etoiles: 5,
    },
  ],

};
// ══════════════════════════════════════════════════════════════════
// ⚠️  NE MODIFIEZ PAS CE QUI EST EN DESSOUS DE CETTE LIGNE
// ══════════════════════════════════════════════════════════════════
