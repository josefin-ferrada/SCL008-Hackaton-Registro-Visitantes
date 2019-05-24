import { registerVisitor } from '../js/visitors.js';

export const templateNewVisitor = () => {
    //creamos div que contendrá la plantilla
    const containerNewVisitor = document.createElement('div');
    const contentNewVisitor = `  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" onclick="window.location.href=''"></a>
    <img src="./assets/img/LobbyLogo.png" style="height: 70px; width: 200px" alt="">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    </nav>
    <form class="col-9">
    <p><strong>Nuevo visitante</strong></p>
      <div class="form-group">
        <label for="exampleInputEmail1">Nombre y Apellido</label>
        <input type="text"   id="name" class="form-control" >
        
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Fecha de llegada </label>
        <input id="date" type="date" class="form-control" placeholder="Password">
      </div>
      <div class="form-group">
      <label for="exampleInputPassword1">Hora de llegada</label>
      <input type="time" id="hour" class="form-control" placeholder="Password">
    </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Rut</label>
    <input type="text" id="rut" class="form-control">
      </div>
    <div class="form-group">
    <label for="exampleFormControlFile1">Añadir foto (opcional)</label>
    <input id="photo" type="file" class="form-control-file">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Anfitrión</label>
    <select class="form-control" id="search" >
  <option>Default select</option>
  
</select>
      </div>
      
      <button  id="newvisitor" onclick="window.location.href='#/Finish'" type="submit" class="btn btn-primary">Registrar</button>
    
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