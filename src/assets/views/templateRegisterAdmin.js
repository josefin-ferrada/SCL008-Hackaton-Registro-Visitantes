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
        <input id="nombre"  class="form-control" type="text" placeholder="Nombre Y Apellido">
        </div>
        <div class="form-group">
        <input id="correo" type="email" class="form-control" placeholder="Correo Electronico">
        </div>
        <div class="form-group">
        <input id="contraseña" type="password"  class="form-control" class="form-group" placeholder="Contraseña">
        </div>
        <button class="btn btn-primary btn-lg" id=btnNew onclick="window.location.href='#/admin'">INGRESAR</button>
        
      </div>
      
    </div>
  </div>

`;
  containerRegisterAdmin.innerHTML = contentRegisterAdmin;

  //solo 1 vista, la que va a tener el boton con google
  return containerRegisterAdmin;
};
