// ─────────────────────────────────────────────
// TRACKING DES CTA — Vercel + Google Analytics 4
// Écoute tous les clics sur les liens marqués data-track
// et envoie l'événement :
//   • à Vercel Web Analytics (toujours, sans cookies)
//   • à GA4 via le dataLayer de GTM (uniquement si consenti)
// ─────────────────────────────────────────────
document.addEventListener('click', (e) => {
    const cible = e.target.closest('[data-track]');
    if (!cible) return;

    const nom = cible.dataset.track;
    const proprietes = { ...cible.dataset };
    delete proprietes.track;

    // ── Vercel Web Analytics (cookieless, pas de consentement requis)
    if (typeof window.va === 'function') {
        window.va('event', { name: nom, ...proprietes });
    }

    // ── Google Analytics 4 via dataLayer GTM
    // On ne pousse que si GTM a été chargé après consentement (flag posé par consent.js)
    if (window.__gtmCharge && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
            event: nom,
            ...proprietes
        });
    }
});
