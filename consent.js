// ─────────────────────────────────────────────
// GESTION DU CONSENTEMENT COOKIES — RGPD
// Affiche une bannière "Accepter / Refuser" et charge
// Google Tag Manager uniquement après acceptation.
// Le choix est mémorisé 13 mois dans localStorage.
// ─────────────────────────────────────────────

(function () {
  const GTM_ID = 'GTM-5G33L3RZ';
  const STORAGE_KEY = 'okwide_consent';
  const STORAGE_TS_KEY = 'okwide_consent_ts';
  const CONSENT_DURATION_MS = 13 * 30 * 24 * 60 * 60 * 1000; // 13 mois (recommandation CNIL)

  // Charge Google Tag Manager dynamiquement
  function chargerGTM() {
    if (window.__gtmCharge) return;
    window.__gtmCharge = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    document.head.appendChild(s);
  }

  // Lit le choix stocké (ou null si expiré / absent)
  function lireChoix() {
    const choix = localStorage.getItem(STORAGE_KEY);
    const ts = parseInt(localStorage.getItem(STORAGE_TS_KEY) || '0', 10);
    if (!choix || !ts) return null;
    if (Date.now() - ts > CONSENT_DURATION_MS) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_TS_KEY);
      return null;
    }
    return choix;
  }

  // Enregistre le choix de l'utilisateur
  function enregistrerChoix(valeur) {
    localStorage.setItem(STORAGE_KEY, valeur);
    localStorage.setItem(STORAGE_TS_KEY, String(Date.now()));
  }

  // Crée et injecte la bannière dans le DOM
  function afficherBanniere() {
    if (document.getElementById('okwide-consent-banner')) return;

    const banniere = document.createElement('div');
    banniere.id = 'okwide-consent-banner';
    banniere.setAttribute('role', 'dialog');
    banniere.setAttribute('aria-label', 'Consentement cookies');
    banniere.innerHTML = `
      <style>
        #okwide-consent-banner {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 99999;
          background: #141414; border-top: 2px solid #E63946;
          padding: 1.25rem 5%; display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 1rem;
          font-family: 'DM Sans', sans-serif;
          box-shadow: 0 -8px 24px rgba(0,0,0,.4);
        }
        #okwide-consent-banner p {
          color: rgba(248,248,248,.75); font-size: .84rem; line-height: 1.6;
          max-width: 720px; margin: 0;
        }
        #okwide-consent-banner a {
          color: #E63946; text-decoration: none; margin-left: .35rem;
        }
        #okwide-consent-banner .okwide-consent-actions {
          display: flex; gap: .6rem; flex-wrap: wrap; flex-shrink: 0;
        }
        #okwide-consent-banner button {
          border: none; padding: 10px 22px; border-radius: 2px;
          font-family: 'DM Sans', sans-serif; font-size: .8rem; font-weight: 600;
          letter-spacing: .08em; text-transform: uppercase; cursor: pointer;
          white-space: nowrap; transition: opacity .2s;
        }
        #okwide-consent-banner button:hover { opacity: .85; }
        #okwide-consent-banner .okwide-btn-refuser {
          background: transparent; color: #F8F8F8;
          border: 1px solid rgba(255,255,255,.25);
        }
        #okwide-consent-banner .okwide-btn-accepter {
          background: #E63946; color: #fff;
        }
        @media (max-width: 640px) {
          #okwide-consent-banner { flex-direction: column; align-items: stretch; }
          #okwide-consent-banner .okwide-consent-actions { justify-content: stretch; }
          #okwide-consent-banner button { flex: 1; }
        }
      </style>
      <p>
        Nous utilisons des cookies pour mesurer l'audience du site (Google Analytics) et améliorer votre expérience.
        Les cookies techniques (formulaires, paiement) restent actifs.
        <a href="/cookies">En savoir plus</a>
      </p>
      <div class="okwide-consent-actions">
        <button class="okwide-btn-refuser" type="button">Refuser</button>
        <button class="okwide-btn-accepter" type="button">Accepter</button>
      </div>
    `;
    document.body.appendChild(banniere);

    banniere.querySelector('.okwide-btn-accepter').addEventListener('click', () => {
      enregistrerChoix('accepted');
      banniere.remove();
      chargerGTM();
    });
    banniere.querySelector('.okwide-btn-refuser').addEventListener('click', () => {
      enregistrerChoix('denied');
      banniere.remove();
    });
  }

  // Permet de rouvrir la bannière depuis la page cookies.html
  window.okwideOuvrirConsentement = function () {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_TS_KEY);
    afficherBanniere();
  };

  // Point d'entrée : on attend que le DOM soit prêt
  function demarrer() {
    const choix = lireChoix();
    if (choix === 'accepted') {
      chargerGTM();
    } else if (choix === null) {
      afficherBanniere();
    }
    // Si 'denied' : on ne fait rien
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', demarrer);
  } else {
    demarrer();
  }
})();
