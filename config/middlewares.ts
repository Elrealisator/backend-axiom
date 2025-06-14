module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      // La liste 'origin' doit inclure toutes les URL qui sont autorisées à faire des requêtes vers votre backend Strapi.
      // - 'http://localhost:5173' : Pour votre environnement de développement local (frontend Nuxt.js ou React, etc.)
      // - 'http://127.0.0.1:5173' : Alternative pour le développement local si localhost ne fonctionne pas
      // - 'https://axiom-elrealisator.vercel.app' : L'URL de votre frontend Nuxt.js déployé sur Vercel
      // Assurez-vous que cette liste est à jour avec toutes les origines de vos applications clientes.
      origin: [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
        'https://axiom-elrealisator.vercel.app',
        // Si vous avez un domaine personnalisé pour votre frontend Vercel, ajoutez-le ici aussi :
        // 'https://votre-domaine-personnalise.com',
      ],
      // Les méthodes HTTP que votre frontend est autorisé à utiliser. Celles-ci sont standard.
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      // 'headers: *' autorise toutes les en-têtes HTTP de la requête.
      headers: '*',
      // 'keepHeaderOnError: true' maintient les en-têtes CORS même en cas d'erreur.
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',  // Ajoute l'en-tête X-Powered-By
  'strapi::logger',     // Gère le logging des requêtes
  'strapi::query',      // Traite les paramètres de requête URL
  'strapi::body',       // Parse le corps des requêtes (JSON, formulaires, etc.)
  'strapi::session',    // Gère les sessions utilisateur
  'strapi::favicon',    // Sert l'icône de favori
  'strapi::public',     // Sert les fichiers statiques du dossier 'public'
];