// ─────────────────────────────────────────────
// TRACKING DES CTA — Vercel Web Analytics
// Écoute tous les clics sur les liens marqués data-track
// et envoie l'événement avec ses propriétés à Vercel.
// ─────────────────────────────────────────────
document.addEventListener('click', (e) => {
    const cible = e.target.closest('[data-track]');
    if (!cible) return;

    const nom = cible.dataset.track;
    const proprietes = { ...cible.dataset };
    delete proprietes.track;

    if (typeof window.va === 'function') {
        window.va('event', { name: nom, ...proprietes });
    }
});
