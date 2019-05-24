import { showVisitors } from '../js/visitors.js';

export const templateActiveVisitors = () => {
    //creamos div que contendrá la plantilla
    const containerActiveVisitors = document.createElement('div');
    const contentActiveVisitors = `<head>
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
                            
                            <section id=detailsVisitors>
                            </section>
                            `
    //pasar cel contenido al div
    containerActiveVisitors.innerHTML = contentActiveVisitors;
    //le pido que busque el id del botón dentro del div cerrado
    let posts = showVisitors();

   
    console.log(posts)
    let text = '';
    let containerPost = containerActiveVisitors.querySelector('#detailsVisitors');

    
    posts.forEach(function(element){
   console.log("entre")
    text +=`<div class="card">
            <div class="card-header">
                <div class="row">
                <div class="col-2">
                    Foto: 
                    </div>
                    <div class="col-2">
                    Fecha: 
                    </div>
                    <div class="col-2">
                    Hora de Ingreso:
                    </div>
                    <div class="col-2">
                    Nombre:
                    </div>
                    <div class="col-2">
                    Rut:
                    </div>
                    <div class="col-2">
                    Anfitrión:
                    </div>
                </div>
           
            </div>
                <div class="card-body">
                    <div class="row">
                    <div class="col-2">
                    FOTO
                    </div>
                    <div class="col-2">
                    <p class="card-title">${element.Date}</p>
                    </div>
                    <div class="col-2">
                    <p class="card-title">${element.check}</p>
                    <a href="#" class="btn btn-primary">Desconectar</a>
                    </div>
                    <div class="col-2">
                    <p class="card-title">${element.name}</p>
                    </div>
                    <div class="col-2">
                    <p class="card-title">${element.rut}</p>
                    </div>
                    <div class="col-2">
                    <p class="card-title">${element.host}</p>
                    </div>

                    </div>
                   
                   
                </div>
            </div>`;

    });
    containerPost.innerHTML= text;

    

    return containerActiveVisitors;
}