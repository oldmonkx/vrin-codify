import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initTracking } from './tracking';

// Initialise Google Analytics, Meta Pixel, etc. — IDs live in src/tracking.ts
initTracking();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
