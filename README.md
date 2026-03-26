# Okwide — Site web okwide-repair.fr

Site vitrine pour **Okwide**, spécialiste de la réparation, maintenance et vente de matériels nautiques électriques (Efoils, Esurfs, Foil Assist) basé à La Farlède, Var (83).

---

## Structure du projet

```
okwide-v2/
├── index.html              # Page d'accueil principale
├── maintenance.html        # Page Maintenance Préventive
├── faq.html                # Foire Aux Questions
├── mentions-legales.html   # Mentions légales
├── confidentialite.html    # Politique de confidentialité (RGPD)
├── cgv.html                # Conditions Générales de Vente
├── cgps.html               # Conditions Générales de Prestations de Services
├── cookies.html            # Politique cookies
├── contenu.js              # ✏️ Fichier de contenu — à modifier pour changer les textes
├── sitemap.xml             # Sitemap Google
├── robots.txt              # Directives robots
├── vercel.json             # Config Vercel (cleanUrls)
└── images/                 # Photos et logos
```

---

## Comment modifier le contenu

Toutes les informations du site (textes, prix, produits, témoignages...) sont centralisées dans **`contenu.js`**. C'est le seul fichier à modifier pour les mises à jour courantes :

- Informations de contact
- Section hero (titre, description)
- Services
- À propos + statistiques
- Produits (nom, prix, stock)
- Offre maintenance préventive
- Partenaires
- Témoignages

> Ne pas modifier `index.html` directement.

---

## Design system

| Élément | Valeur |
|---------|--------|
| Fond principal | `#0A0A0A` |
| Fond cartes | `#141414` |
| Accent rouge | `#E63946` |
| Texte | `#F5F5F5` |
| Police titres | Bebas Neue |
| Police corps | DM Sans |

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Hero, services, produits, maintenance, témoignages, contact |
| Maintenance | `/maintenance` | Page dédiée révision annuelle + forfaits par marque |
| FAQ | `/faq` | 5 questions fréquentes en accordéon |
| Mentions légales | `/mentions-legales` | Informations légales I.E.T. |
| Confidentialité | `/confidentialite` | Politique RGPD |
| CGV | `/cgv` | Conditions de vente produits |
| CGPS | `/cgps` | Conditions prestations de services |
| Cookies | `/cookies` | Politique cookies |

---

## Déploiement

Le site est déployé sur **Vercel** connecté à ce dépôt GitHub.
Chaque `git push` sur `main` déclenche un déploiement automatique.

URL de production : **https://www.okwide-repair.fr**

---

## Intégrations

- **Fillout** — Formulaires de contact, devis et commandes
- **Stripe via Pennylane** — Paiement sécurisé
- **Google Maps** — Localisation atelier
- **Google Search Console** — Suivi indexation

---

## Entreprise

**I.E.T. (Ingénierie Electronic Technic)**
Marque commerciale : Okwide
SIRET : 953 263 209 00017
96 impasse du serpolet — 83210 La Farlède, France
okwiderepelec@gmail.com — 06 46 14 40 42
