// Initialize Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA6BJbaxhIaGCkkVk7S7bx2jHbnMLFijZw",
  authDomain: "hackaton-registro-visitantes.firebaseapp.com",
  databaseURL: "https://hackaton-registro-visitantes.firebaseio.com",
  projectId: "hackaton-registro-visitantes",
  storageBucket: "hackaton-registro-visitantes.appspot.com",
  messagingSenderId: "193966524440",
  appId: "1:193966524440:web:be0f2e07f4787d98"
};

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


  
  import { initRouter } from './route.js';
  
  const init = () => {
    initRouter();
  }
  window.addEventListener('load', init);