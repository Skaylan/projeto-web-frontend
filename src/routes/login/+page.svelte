
<section>
    <div class="nebula">
        <img src="../../lib/assets/Logo.png" alt="Logo">

        <h4>SEU ACERVO DE HISTÓRIAS<br>INCRÍVEIS</h4>
    </div>

    <div class="form">
        <form action="#">
            <h3>
                SEJA BEM-VINDO
            </h3>

            <p>
                <input type="text" name="usuario" id="iusuario" placeholder="Nome de usuário" min="8" max="20" required>
                <input type="password" name="senha" id="isenha" min="8" max="20" placeholder="Senha" required>
            </p>

            <a href="#" id="esqueci-senha">Esqueci minha senha</a>

            <input type="submit" value="Login">
        </form>

        <button id="login-google">
            <img src="../../lib/assets/google-logo.svg" alt="Ícone google">
            <p>Login com Google</p>
        </button>     
    </div>
</section>

<style>
    @charset "UTF-8";

    @import url('https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


    /* Section */

    section {
        display: flex;
        margin: 70px auto;
        width: 1022px;
        height: 702px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.665);
        border-radius: 5px;
    }


    /* Section esquerda */

    .nebula {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        text-align: center;
        justify-content: center;
        height: 100%;
        width: 50vw;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background: #75C9C8 url(invertido.png) no-repeat center;
        background-size: contain;
        background-position: -215px center;

    }

    .nebula > h4 {
        font-size: 20px;
        font-family: 'Hanalei Fill', sans-serif;
        letter-spacing: 0.1em;
        text-shadow: 2px 2px 2px white;
    }

    section img {
        display: block;
        width: 90%;
        margin-left: 15px;
    }


    /* Section direita */ 

    .form {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        margin-top: -80px;
        width: 50vw;
        background: url(catbus_running.png) no-repeat;
        background-position: center bottom;
        background-size: 50%;
    }

    .form h3 {
        font-size: 40px;
        font-family: 'Hanalei Fill', sans-serif;
        margin-bottom: 30px;
    }

    .form input {
        display: block;
        padding: 13px;
        margin: 10px auto 15px auto;
        width: 350px;
        height: 55px;
        border-radius: 3px;
        border: none;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.41);
    }

    .form input::placeholder {
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 400px;
    }

    form {
        padding: 10px;
        text-align: center;
    }


    form > a#esqueci-senha {
        display: block;
        width: 370px;
        margin: auto;
        text-align: right;
        font-size: 15px;
        font-family: 'Roboto', sans-serif;

    }

    form > input[type="submit"] {
        background-color: #4BC74F;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 400;
        color: white;
        margin-top: 30px;
        padding: 13px;
        cursor: pointer;
    }

    button#login-google {
        color: white;
        display: block;
        margin: 10px auto 80px auto;
        width: 60%;
        padding: 10px;
        background-color: #FA2020;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.639);
    }

    button#login-google > p {
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
    }

    button#login-google > img {
        position: relative;
        display: inline-block;
        width: 23px;
        margin: 5px auto auto auto;
        margin-right: 5px;
    }

    button#login-google > p {
        position: relative;
        display: inline;
        bottom: 2px;
    }

</style>