import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/reset.css';
import './styles/tokens.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages/home.css';
import './styles/pages/timer.css';
import './styles/pages/decks.css';
import './styles/pages/study.css';
import './styles/pages/stats.css';
import './styles/pages/settings.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
