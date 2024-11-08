import { createRoot } from 'react-dom/client'
import './App.css';
import App from './App.jsx';
import "../index.css"
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from '../contexts/UserContext.jsx';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
)
