/* Entry point — this one is done for you.
   Every stylesheet is imported here once, in cascade order. */
import React from 'react';
import ReactDOM from 'react-dom/client';

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
