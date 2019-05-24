

export const templateHost= () => {
  const containerHost = document.createElement('div');
  const contentHost = `
    <head>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" onclick="window.location.href=''"></a>
        <img src="./assets/img/LobbyLogo.png" style="height: 70px; width: 200px" alt="">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        </nav>
    </head>
`;
  containerHost.innerHTML = contentHost;



    //evento del botón que llama a la autentificación de Google
 
  return containerHost;
};
