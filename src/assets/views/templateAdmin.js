export const templateAdmin = () => {
  //creamos div que contendrá la plantilla
  const containerAdmin = document.createElement('div');
  const contentAdmin = `<head>
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#"></a>
                        <img src="./assets/img/LobbyLogo.png" style="height: 70px; width: 200px" alt="">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a onclick="window.location.href='#/activeVisitors'" id="activeVisitors" class="nav-link" >Visitantes<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item ">
                                <a onclick="window.location.href=''" id="activeVisitors" class="nav-link" >Registro<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a   class="nav-link" onclick="window.location.href='#/analytics'">Analiticas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onclick="window.location.href='#/NewAnf'">Nuevo anfitrion</a>
                            </li>
                            </ul>
                        </div>
                        </nav>
                         
                        </head>`;
  //pasar cel contenido al div
  containerAdmin.innerHTML = contentAdmin;
  //le pido que busque el id del botón dentro del div cerrado
  const btn = containerAdmin.querySelector('#activeVisitors');

  //evento del botón que llama a la autentificación de Google
  btn.addEventListener('click', () => {});

  return containerAdmin;
};
