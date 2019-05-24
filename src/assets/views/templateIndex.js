import { showVisitors } from '../js/visitors.js';

export const templateIndex = () => {
  //creamos div que contendrá la plantilla
  document.getElementById('root').innerHTML = '';
  const containerIndex = document.createElement('div');
  const contentIndex = `<div class="center size">
  <img src="./assets/img/LobbyLogo.png" style="height: 120px; width: 330px; margin: auto;" alt="">
    
    <button class="btn btn-primary btn-lg" id=btnNew onclick="window.location.href='#/RegisterAdmin'">ACCESO ADMINISTRADOR</button>
    <br>
    <br>
    <button class="btn btn-primary btn-lg" id=btnNew onclick="window.location.href='#/NewVisitor'">REGISTRO VISITANTE</button></div>
    `;

  //<button id="newvisitor">REGISTRO VISITANTE</button></div>
  // < div > <button id="newvisitor">ACCESO ADMINISTRADOR</button></div>`
  //pasar cel contenido al div
  containerIndex.innerHTML = contentIndex;
  //le pido que busque el id del botón dentro del div cerrado
  const btn = containerIndex.querySelector('#btnNew');
  let post = showVisitors();
  console.log(post)

  //evento del botón que llama a la autentificación de Google
  btn.addEventListener('click', () => {});
  return containerIndex;
};
