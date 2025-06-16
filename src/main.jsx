import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import AppRoutes from './route.jsx';
import { ArtigosProvider } from './context/artigoContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArtigosProvider>
      <AppRoutes />
    </ArtigosProvider>
  </StrictMode>,
)
