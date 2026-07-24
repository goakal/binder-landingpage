import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const spaRedirect = sessionStorage.getItem('spa-redirect');
if (spaRedirect) {
  sessionStorage.removeItem('spa-redirect');
  history.replaceState(null, '', spaRedirect);
}

createRoot(document.getElementById("root")!).render(<App />);
