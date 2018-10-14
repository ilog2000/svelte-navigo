import router from './router/router';
import App from './App.html';
import Home from './pages/Home.html';
import Products from './pages/Products.html';
import Product from './pages/Product.html';
import Jobs from './pages/Jobs.html';
import About from './pages/About.html';
import { Store } from 'svelte/store.js';

const store = new Store({
  // Page value has to be equal to one of comopents
  Page: Home,
  id: null,
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
  '/products/:id': (params) => {
    logRoute();
    store.set({ Page: Product });
    store.set({ id: params.id });
  },
  '/products': () => {
    logRoute();
    store.set({ Page: Products });
    store.set({ id: null });
  },
  '/jobs': () => {
    logRoute();
    store.set({ Page: Jobs });
    store.set({ id: null });
  },
  '/about': () => {
    logRoute();
    store.set({ Page: About });
    store.set({ id: null });
  },
  '/': () => {
    logRoute();
    store.set({ Page: Home });
    store.set({ id: null });
  }
})
  .resolve();
