export const templateNewVisitor = () => {
    //creamos div que contendrá la plantilla
    const containerNewVisitor = document.createElement('div');
    const contentNewVisitor = `<div><button id="newvisitor" onclick="window.location.href='#/Finish'">Ingresar</button></div>`
    //pasar cel contenido al div
    containerNewVisitor.innerHTML = contentNewVisitor;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerNewVisitor.querySelector('#newvisitor');

    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {

    });
}