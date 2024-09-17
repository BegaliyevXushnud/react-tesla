import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import ModelS from '../pages/model-s';
import ModelX from '../pages/model-x';
import ModelY from '../pages/model-y';
import Model3 from '../pages/model-3';
import SolarRoof from '../pages/solor-roof';
import SolarPanels from '../pages/solor-panels';
import App from '../App'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<ModelS />} />
      <Route path="model-s" element={<ModelS />} />
      <Route path="model-x" element={<ModelX />} />
      <Route path="model-y" element={<ModelY />} />
      <Route path="model-3" element={<Model3 />} />
      <Route path="solar-roof" element={<SolarRoof />} />
      <Route path="solar-panels" element={<SolarPanels />} />
    </Route>
  )
);

export default router;