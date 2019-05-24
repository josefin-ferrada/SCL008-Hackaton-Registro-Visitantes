export const templateFinish = () => {
    //creamos div que contendrá la plantilla
    const containerFinish = document.createElement('div');
    const contentFinish = `<div><button id="finish" >mensaje exito</button> <button onclick="window.location.href='#/activeVisitors'"> volver a admin</button></div>`
    //pasar cel contenido al div
    containerFinish.innerHTML = contentFinish;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerFinish.querySelector('#finish');

    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {

    });

    return containerFinish;
}