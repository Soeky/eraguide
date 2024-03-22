import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import TutorialPage from './Pages/App';
import AutomatPage from './Pages/Automat';
import BefehlPage from './Pages/Befehl';
import PipelinePage from './Pages/Pipeline';
import BddPage from './Pages/Bdd';
import AigPage from './Pages/Aig';
import SatPage from './Pages/Sat';
import KontaktPage from './Pages/Kontakt';



import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TutorialPage />,
    errorElement: <TutorialPage />,
  },
  {
    path: '/automat',
    element: <AutomatPage />,
  },
  {
    path: '/befehl',
    element: <BefehlPage />,
  },
  {
    path: '/pipeline',
    element: <PipelinePage />,
  },
  {
    path: '/bdd',
    element: <BddPage />,
  },
  {
    path: '/aig',
    element: <AigPage />,
  },
  {
    path: '/sat',
    element: <SatPage />,
  },
  {
    path: '/kontakt',
    element: <KontaktPage />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
