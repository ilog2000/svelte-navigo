import router from './router/router';
import App from './App.html';
import Home from './pages/Home.html';
import Products from './pages/Products.html';
import Product from './pages/Product.html';
import Jobs from './pages/Jobs.html';
import About from './pages/About.html';
import { Store } from 'svelte/store.js';

const store = new Store({
  Page: Home,
  id: undefined,
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
  },
  '/jobs': () => {
    logRoute();
    store.set({ Page: Jobs });
  },
  '/about': () => {
    logRoute();
    store.set({ Page: About });
  },
  '/': () => {
    logRoute();
    store.set({ Page: Home });
  }
})
  .resolve();
