# Sahar Nails – Frontend (Next.js)

Frontend SaaS moderne pour Sahar Nail Care, basé sur Next.js, Tailwind CSS et déployé sur Vercel.

## Résumé du projet
- Migration complète depuis Create React App vers Next.js
- UI mobile-first, composants réutilisables, intégration Tailwind
- Formulaire de réservation avec validation téléphone (react-phone-input-2)
- Proxy API vers le backend Render
- CI/CD automatisé (GitHub Actions, Vercel)

## Installation locale

```bash
# 1. Cloner le repo
 git clone https://github.com/iseuuh/sahar-frontend-prod.git
 cd sahar-frontend-prod

# 2. Installer les dépendances
 npm install

# 3. Créer le fichier .env.local
 cp .env.local.example .env.local

# 4. Lancer le serveur de dev
 npm run dev
```

## Déploiement cloud
- **Vercel** : push sur `main` déclenche le build et le déploiement automatique
- Configurer la variable d'environnement `NEXT_PUBLIC_API_URL` sur Vercel

## Variables d'environnement
- `NEXT_PUBLIC_API_URL` : URL du backend (ex : https://sahar-backend-prod.onrender.com)

## Structure des dossiers

```
frontend/
├── components/         # Composants React réutilisables
├── pages/              # Pages Next.js (index.tsx, ...)
├── public/             # Assets statiques (images, icônes, ...)
├── styles/             # Fichiers CSS globaux (Tailwind)
├── .github/            # Workflows CI/CD
├── package.json        # Dépendances et scripts
├── tsconfig.json       # Config TypeScript
└── ...
```

## TODO / besoins métiers
- [ ] Corriger le bug de validation téléphone (préfixe +216)
- [ ] Ajouter l'authentification/multi-tenant
- [ ] Intégrer le paiement en ligne
- [ ] Monitoring et alerting (Sentry, LogRocket...)
- [ ] RGPD et consentement cookies
- [ ] Nettoyer les anciens dossiers hérités (frontend-vite, src, etc.)

---

Pour toute question ou contribution, ouvrez une issue ou contactez l'équipe Sahar Nails.
