import React from 'react'; // Importation de React, nécessaire pour créer des composants React.
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importation des composants de routage de React Router.
import Accueil from './Pages/Accueil/Accueil'; // Importation du composant Accueil.
import Apropos from './Pages/Apropos/Apropos'; // Importation du composant Apropos.
import Logement from './Pages/Logements/Logements'; // Importation du composant Logements.
import Error from './components/Error/Error'; // Importation du composant d'erreur.
import Layout from './components/Agencement/Layout'; // Importation du composant de mise en page.

function AppRoutes () {
  return (
    <BrowserRouter> {/* Utilisation de BrowserRouter pour gérer le routage en mode historique */}
      <Routes> {/* Conteneur pour définir les différentes routes de l'application */}
        <Route element={<Layout />}> {/* Définition d'une route qui utilise le composant Layout comme wrapper */}
          <Route path="/" element={<Accueil/>} /> {/* Route pour la page d'accueil */}
          <Route path="/apropos" element={<Apropos />} /> {/* Route pour la page "À propos" */}
          <Route path="/logement/:id" element={<Logement />} /> {/* Route pour la page Logements, avec un paramètre dynamique :id */}
          <Route path="*" element={<Error />} /> {/* Route de capture qui redirige vers la page d'erreur pour toutes les routes non définies */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes; // Exportation du composant AppRoutes pour qu'il puisse être utilisé dans d'autres fichiers.
