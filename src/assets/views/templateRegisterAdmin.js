export const templateRegisterAdmin = () => {
  const containerRegisterAdmin = document.createElement('div');
  const contentRegisterAdmin = `
<div>
<img src="assets/img/LobbyLogo.png" alt="">
<h4>NUEVO VISITANTE</h4>
<hr>
<input id="visitante" type="text" placeholder="TIPO DE VISITANTE">
<input id="fecha" type="text" placeholder="FECHA DE LLEGADA">
<input id="hora" type="text" placeholder="HORA DE LLEGADA">
<input id="nombre" type="text" placeholder="NOMBRE Y APELLIDO">
<input id="rut" type="text" placeholder="RUT">
<input id="foto" type="text" placeholder="SELECCIONAR FOTO(OPCIONAL)">
<input id="anfitrion" type="text" placeholder="ANFITRION">
<button class="btn btn-primary btn-lg" id=btnNew onclick="window.location.href='#/admin'">Registrar e Ingresar</button>
</div>`;
  containerRegisterAdmin.innerHTML = contentRegisterAdmin;

  //solo 1 vista, la que va a tener el boton con google
  return containerRegisterAdmin;
};
