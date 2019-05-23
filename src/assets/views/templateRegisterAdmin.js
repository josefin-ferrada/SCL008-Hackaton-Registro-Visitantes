export const templateRegisterAdmin = () => {
  const containerRegisterAdmin = document.createElement('div');
  const contentRegisterAdmin = `
<div>
<img src="assets/img/LobbyLogo.png" alt="">
<h4>Ingreso Administrador</h4>
<hr>
<input id="nombre" type="text" placeholder="Nombre Y Apellido">
<br>
<br>
<input id="correo" type="text" placeholder="Correo Electronico">
<br>
<br>
<input id="contraseña" type="text" placeholder="Contraseña">
<br>
<br>
<button class="btn btn-primary btn-lg" id=btnNew onclick="window.location.href='#/Admin'">INGRESAR</button></div>
</div>`;
  containerRegisterAdmin.innerHTML = contentRegisterAdmin;

  //solo 1 vista, la que va a tener el boton con google
  return containerRegisterAdmin;
};
