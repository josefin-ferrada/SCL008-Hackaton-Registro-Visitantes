import { registerVisitor } from '../js/visitors.js';

export const templateNewVisitor = () => {
    //creamos div que contendrá la plantilla
    const containerNewVisitor = document.createElement('div');
    const contentNewVisitor = `    <img src="assets/img/LobbyLogo.png" width="150px" alt="logo">
    <p><strong>Nuevo visitante</strong></p>
    <p>Nombre y Apellido</p>
        <input type="text" class="lastname" id="name" name="">
        <p>Fecha de llegada </p>
        <input id="date" type="date">
        <p>Hora de llegada </p>
        <input type="time" id="hour" name="">
        <p>Rut </p>
        <input type="text" id="rut" name="">
        <form action="../../form-result.php" method="post" enctype="multipart/form-data" target="_blank">
          <p>        
            Seleccionar foto (opcional) </p>     
            <input type="file" name="archivosubido">                
        </form><br>
        <form>
        <div>
        <label for="mySearch"><p>Anfitrión</p></label>
        <input type="search" id="search" name="q" size="30" minlength="4" maxlength="80">
        <button>Buscar</button>
    <span class="validity"></span>
  </div>
</form><br>
        <div>
        <button id="newvisitor" onclick="window.location.href='#/Finish'">Registrar</button>
            </div>`
    //pasar cel contenido al div
    containerNewVisitor.innerHTML = contentNewVisitor;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerNewVisitor.querySelector('#newvisitor');

    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {
        let nameLastName = containerNewVisitor.querySelector('#name').value;
        let arrivalDate = containerNewVisitor.querySelector('#date').value;
        let checkIn = containerNewVisitor.querySelector('#hour').value;
        let visitorRut = containerNewVisitor.querySelector('#rut').value;
        let host = containerNewVisitor.querySelector('#search').value;

        registerVisitor(nameLastName,arrivalDate,checkIn,visitorRut,host)

    });

    return containerNewVisitor;
}