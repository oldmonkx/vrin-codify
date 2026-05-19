import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ThankYouPage from './ThankYouPage';

createRoot(document.getElementById('thank-you-root')!).render(
  <StrictMode>
    <ThankYouPage />
  </StrictMode>,
);
