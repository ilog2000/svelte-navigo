import Navigo from 'navigo';

const base = 'http://localhost:5000';
const useHash = true; //Defaults to false
const hash = '#!'; //Defaults to '#'
const router = new Navigo(base, useHash, hash);

export default router;
