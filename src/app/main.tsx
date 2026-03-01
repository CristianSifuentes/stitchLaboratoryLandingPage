import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './views/App';
import { useInitializeApp } from './hooks/useInitializeApp';
import '@/shared/theme/global.css';

const Bootstrap = () => {
  useInitializeApp();
  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Bootstrap />
    </BrowserRouter>
  </React.StrictMode>,
);
