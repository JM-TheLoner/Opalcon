import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { validateData } from "./data/Validate";
import Categories from "./data/Categories.js";
import Images from "./data/Images.js";
import SubServices from "./data/SubServices.js";


if (import.meta.env.DEV) validateData(Categories, SubServices, Images);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </Router>
  </StrictMode>
);