import {React} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter} from 'react-router-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
reportWebVitals();
