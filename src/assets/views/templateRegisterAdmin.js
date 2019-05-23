export const templateRegisterAdmin = () => {
  const containerRegisterAdmin = document.createElement('div');
  const contentRegisterAdmin = `
<div>
<img src="assets/img/LobbyLogo.png" alt="">
<h4>NUEVO VISITANTE</h4>
<hr>
<imput id="visitante" type="text" placeholder="TIPO DE VISITANTE">
<imput id="fecha" type="text" placeholder="FECHA DE LLEGADA">
<imput id="hora" type="text" placeholder="HORA DE LLEGADA">
<imput id="nombre" type="text" placeholder="NOMBRE Y APELLIDO">
<imput id="rut" type="text" placeholder="RUT">
<imput id="foto" type="text" placeholder="SELECCIONAR FOTO(OPCIONAL)">
<imput id="anfitrion" type="text" placeholder="ANFITRION">
</div>`;
  containerRegisterAdmin.innerHTML = contentRegisterAdmin;

  //solo 1 vista, la que va a tener el boton con google
  return containerRegisterAdmin;
};
