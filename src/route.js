import { templateIndex } from './assets/views/templateIndex.js';
import { templateNewVisitor } from './assets/views/templateNewVisitor.js';
import { templateFinish } from './assets/views/templateFinish.js';
import { templateRegisterAdmin } from './assets/views/templateRegisterAdmin.js';
import { templateAdmin } from './assets/views/templateAdmin.js';

const changeRouter = hash => {
  if (hash === '') {
    return showTemplate(hash);
  }
  if (hash === '#/NewVisitor') {
    return showTemplate(hash);
  }
  if (hash === '#/Finish') {
    return showTemplate(hash);
  }
  if (hash === '#/RegisterAdmin') {
    return showTemplate(hash);
  }
  if (hash === '#/admin') {
    return showTemplate(hash);
  }
};

// imprimirá el template en el HTML
const showTemplate = hash => {
  const router = hash.substring(2);
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  //hacemos el match del hash utilizado y el template que quiero msotrar

  switch (router) {
    case '':
      return containerRoot.appendChild(templateIndex());
      break;
    case 'NewVisitor':
      return containerRoot.appendChild(templateNewVisitor());
      break;
    case 'Finish':
      return containerRoot.appendChild(templateFinish());
      break;
    case 'RegisterAdmin':
      return containerRoot.appendChild(templateRegisterAdmin());
      break;
    case 'admin':
      return containerRoot.appendChild(templateAdmin());
    break;
  }
};

/*  inicializamos el tema de las rutas para que se ejecute nuestra función changeRouter()
    y en su defecto showTemplate() 
 */

export const initRouter = () => {
  window.addEventListener('load', changeRouter(window.location.hash));
};

//reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter

if ('onhashchange' in window) {
  window.onhashchange = () => {
    changeRouter(window.location.hash);
  };
}
