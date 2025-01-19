import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import TicketContextProvider from './Frontend/Context/TicketContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TicketContextProvider>
        <App />
      </TicketContextProvider>
    </BrowserRouter>
  </StrictMode>
);
