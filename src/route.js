import { templateIndex } from './assets/views/templateIndex.js'

const changeRouter = (hash) => {

    if (hash === '') {
        return showTemplate(hash);
    }

}

// imprimirá el template en el HTML
const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';
    
    //hacemos el match del hash utilizado y el template que quiero msotrar

    switch (router) {
        case '': 
            return containerRoot.appendChild(templateIndex()); 
        break;
        
    }
}

/*  inicializamos el tema de las rutas para que se ejecute nuestra función changeRouter()
    y en su defecto showTemplate() 
 */

export const initRouter = () => {
    window.addEventListener('load', changeRouter(window.location.hash));

 }

  

     
     //reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter

     if ('onhashchange' in window){
         window.onhashchange = () => {
             changeRouter(window.location.hash)
         }
        }
    
