import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './Pages/Accueil/Accueil';
import Apropos from './Pages/Apropos/Apropos';
import Logements from './Pages/Logements/Logements';
import Error from './components/Error/Error';
import Layout from './components/Agencement/Layout';
import './SASS/index.scss';


function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil/>} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logements/:id" element={<Logements />} errorElement={<Error/>} />
        <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes