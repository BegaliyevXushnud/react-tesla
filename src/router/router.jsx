
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Model3, ModelS, ModelX, ModelY, SolarPanels, SolarRoof, Header } from './pages'; // Sahifalaringizni import qiling

const router = createBrowserRouter([
  {
    path: '/',
    element: <ModelS />,
  },
  {
    path: '/model-3',
    element: <Model3 />,
  },
  {
    path: '/model-x',
    element: <ModelX />,
  },
  {
    path: '/model-y',
    element: <ModelY />,
  },
  {
    path: '/solar-roof',
    element: <SolarRoof />,
  },
  {
    path: '/solar-panels',
    element: <SolarPanels />,
  },
]);

function Index() {
  return <RouterProvider router={router} />;
}

ReactDOM.render(<Index />, document.getElementById('root'));
