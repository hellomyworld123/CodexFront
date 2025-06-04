// lib/api.js

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://sahar-backend-prod.onrender.com/api";

// Fonction générique pour fetcher des données
export async function fetchData(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, options);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// Objet api pour correspondre à l'import des pages
export const api = {
  // Connexion utilisateur/admin
  async login({ email, password }) {
    return fetchData('/auth/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  },

  // Récupérer les réservations (admin)
  async getReservations(token) {
    return fetchData('/reservations', {
      headers: {
        "Authorization": token ? `Bearer ${token}` : undefined,
        "Content-Type": "application/json"
      }
    });
  },

  // Tu peux ajouter ici d’autres méthodes comme createReservation, updateReservation, etc.
};
