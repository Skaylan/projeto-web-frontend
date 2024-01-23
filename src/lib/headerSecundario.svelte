<header>
    <div class="logo">
        <a href="#">
            <img src="./assets/Logo_corte.png" alt="Logo">
        </a>
    </div>

    <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Filmes</a></li>
        <li><a href="#">Sobre</a></li>
        <li id="api"><a href="#">API</a></li>
    </ul>

    <div class="icon_login">
        <a href="#">
            <img src="./assets/icone_login.png" width="50px" alt="Foto de perfil">
        </a>
    </div>
</header>

<style>
    /* Header */

    header {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        height: 70px;
        margin: -8px;
        background-color: #75C9C8;
    }

    header > ul {
        list-style-type: none;
    }

    header > ul > li {
        display: inline-block;
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        margin-right: 35px;
    }

    header > ul > li > a {
        text-decoration: none;
        color: black;
    }

    li#api {
        margin-left: 15px;
        margin-right: 55px;
    }

    .logo {
        flex-grow: 2;
        margin-top: 6px;
        margin-left: 30px;
    }

    .icon_login {
        margin-right: 15px;
        margin-top: 5px;
    }

</style>