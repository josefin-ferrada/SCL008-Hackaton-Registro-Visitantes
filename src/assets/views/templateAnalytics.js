import { showVisitors } from '../js/visitors.js';


export const templateAnalytics= () => {
    const containerAnalytics = document.createElement('div');
    const contentAnalytics = `
    <head>
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

        </head>
      <br>
      <br>

      <div class="card-group">
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">TOTAL VISITANTES HOY</h5>
      <h1 class="card-text center">3</h1>
    </div>
    <div class="card-footer">
      <small class="text-muted">Ultima actualización 5 hace seg...</small>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">ANFITRIÓN MÁS VISITADO</h5>
      <h4 class="card-text center">Gatolate</h4>
    </div>
    <div class="card-footer">
      <small class="text-muted">Ultima actualización 5 hace seg...</small>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <h5 class="">HORARIO MAYOR FRECUENCIA</h5>
      <h4 class="card-text center">10:00 am-11:00 am</h4>
    </div>
    <div class="card-footer">
      <small class="text-muted">Ultima actualización 5 hace seg...</small>
    </div>
  </div>
</div>
  `;
    containerAnalytics.innerHTML = contentAnalytics;
    let post = showVisitors();
  console.log(post)

  
  
      //evento del botón que llama a la autentificación de Google
   
    return containerAnalytics;
  };
  