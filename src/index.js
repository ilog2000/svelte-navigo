import router from './router/router';
import App from './App.html';
import Home from './pages/Home.html';
import Products from './pages/Products.html';
import Jobs from './pages/Jobs.html';
import About from './pages/About.html';

const app = new App({
  target: document.querySelector('root')
});

const logRoute = () => {
  console.log(JSON.stringify(router.lastRouteResolved(), null, 2));
};

router.on({
    '/products': {
      as: 'Products',
      uses: () => {
        logRoute();
        app.set({ Page: Products });
      }
    },
    '/jobs': {
      as: 'Jobs',
      uses: () => {
        logRoute();
        app.set({ Page: Jobs });
      }
    },
    '/about': {
      as: 'About',
      uses: () => {
        logRoute();
        app.set({ Page: About });
      }
    },
    '/': {
      as: 'Home',
      uses: () => {
        logRoute();
        app.set({ Page: Home });
      }
    }
  })
  .resolve();
