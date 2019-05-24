export const templateFinish = () => {
    //creamos div que contendrá la plantilla
    const containerFinish = document.createElement('div');
    const contentFinish = `<head>
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <a class="navbar-brand" onclick="window.location.href=''"></a>
                            <img src="./assets/img/LobbyLogo.png" style="height: 70px; width: 200px" alt="">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            </nav>
                            </head>
                            <p class="text" >¡Su registro de visitante <br> se ha creado con exito! </p>
                                <div class="center"><button id="finish" onclick="window.location.href='#/activeVisitors'" class="btn btn-primary"> volver a admin</button></div>`
    //pasar cel contenido al div
    containerFinish.innerHTML = contentFinish;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerFinish.querySelector('#finish');

    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {

    });

    return containerFinish;
}
//su registro de visitante se creado con exito 