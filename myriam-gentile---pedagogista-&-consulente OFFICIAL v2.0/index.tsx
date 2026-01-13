
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

/**
 * Smart Router Strategy:
 * - HashRouter is used in environments that don't support SPA routing (like AI Studio preview).
 * - BrowserRouter is used in production (Vercel) for better SEO and clean URLs.
 */
const isPreview = 
  window.location.hostname.includes('usercontent.goog') || 
  window.location.hostname.includes('aistudio.google.com') ||
  window.location.protocol === 'blob:' ||
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

const Router = isPreview ? HashRouter : BrowserRouter;

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
