import router from './router/router';
import App from './App.html';
import Home from './pages/Home.html';
import Products from './pages/Products.html';
import Jobs from './pages/Jobs.html';
import About from './pages/About.html';
import { Store } from 'svelte/store.js';

const store = new Store({
  Page: Home
});

window.store = store; // useful for debugging!

const app = new App({
  target: document.querySelector('root'),
  store
});

const logRoute = () => {
  console.log(JSON.stringify(router.lastRouteResolved(), null, 2));
};

router.on({
    '/products': {
      as: 'Products',
      uses: () => {
        logRoute();
        store.set({ Page: Products });
      }
    },
    '/jobs': {
      as: 'Jobs',
      uses: () => {
        logRoute();
        store.set({ Page: Jobs });
      }
    },
    '/about': {
      as: 'About',
      uses: () => {
        logRoute();
        store.set({ Page: About });
      }
    },
    '/': {
      as: 'Home',
      uses: () => {
        logRoute();
        store.set({ Page: Home });
      }
    }
  })
  .resolve();
