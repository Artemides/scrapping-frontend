import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
