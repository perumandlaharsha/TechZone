import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import Store from './store/Store';


createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
      <BrowserRouter>
    <App />
  </BrowserRouter>
    </Provider>
)