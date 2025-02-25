import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './store/store';
import './style/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
