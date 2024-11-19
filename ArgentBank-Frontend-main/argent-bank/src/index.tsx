import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
// Redux

// Assurer que l'élément root est correctement typé
const rootElement = document.getElementById('root');

// Vérifier que rootElement n'est pas null pour éviter des erreurs TypeScript
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
