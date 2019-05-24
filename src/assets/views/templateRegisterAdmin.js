import { createAccount } from '../js/visitors.js';

export const templateRegisterAdmin = () => {
  const containerRegisterAdmin = document.createElement('div');
  const contentRegisterAdmin = `
    <head>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" onclick="window.location.href=''"></a>
        <img src="./assets/img/LobbyLogo.png" style="height: 70px; width: 200px" alt="">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        </nav>
    </head>

    <div class="container">
      <div class="row">
      <div class="col-6">
          
          
          <h4>Inicio Sesión Administrador</h4>
          
          <div class="form-group">
          <input  type="email" class="form-control" placeholder="Correo Electronico">
          </div>
          <div class="form-group">
          <input  type="password"  class="form-control" class="form-group" placeholder="Contraseña">
          </div>
          <button class="btn btn-primary btn-lg" id=btnNew onclick="window.location.href='#/activeVisitors'">INGRESAR</button>
          
        </div>
        <div class="col-6">
          
          <div class="form-group" >
          <h4>Registro Administrador</h4>
          <input id="name" class="form-control" type="text" placeholder="Nombre Y Apellido">
          </div>
          <div class="form-group">
          <input id="mail" type="email" class="form-control" placeholder="Correo Electronico">
          </div>
          <div class="form-group">
          <input id="pass" type="password"  class="form-control" class="form-group" placeholder="Contraseña">
          </div>
          <button class="btn btn-primary btn-lg" id="btnNew" onclick="window.location.href='#/analytics'">INGRESAR</button>
          
        </div>
        
      </div>
    </div>

`;
  containerRegisterAdmin.innerHTML = contentRegisterAdmin;

  const btn = containerRegisterAdmin.querySelector('#btnNew');

    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {

      let name = containerRegisterAdmin.querySelector('#name').value;
      let pass = containerRegisterAdmin.querySelector('#pass').value;
      let mail = containerRegisterAdmin.querySelector('#mail').value;
      
      createAccount(mail, pass, name);


    })
  return containerRegisterAdmin;
};
