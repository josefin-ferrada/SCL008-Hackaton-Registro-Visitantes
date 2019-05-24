export const templateHost = () => {
  const containerHost = document.createElement('div');
  const contentHost = `
    <head>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" onclick="window.location.href=''"></a>
        <img src="./assets/img/LobbyLogo.png" style="height: 70px; width: 200px" alt="">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>

        </button>
        </nav>
    </head>
    <form class ="col-6">
  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
  
  </div>
  <button type="submit" class="btn btn-primary">Ingresar</button>
</form>
<br>
<br>
<label class="switchBtn">

    <input type="checkbox">

    <div class="slide round">ONPEN</div>

    <font style="vertical-align: inherit;">Mostrar empleado como anfitrión en el quiosco de visitantes</font>
    

</label>
`;
  containerHost.innerHTML = contentHost;

  //evento del botón que llama a la autentificación de Google

  return containerHost;
};
