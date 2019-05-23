export const templateIndex = () => {
    //creamos div que contendrá la plantilla
    document.getElementById('root').innerHTML='';
    const containerIndex = document.createElement('div');
    const contentIndex = `<button id=btnNew onclick="window.location.href='#/NewVisitor'">Ingresar</button>`
    //pasar cel contenido al div
    containerIndex.innerHTML = contentIndex;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerIndex.querySelector('#btnNew');

    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {

    });
    return containerIndex;
}