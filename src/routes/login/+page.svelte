
<script>
    import HeaderSecundario from "$lib/headerSecundario.svelte";
    import googleLogo from "$lib/assets/google-logo.svg";
    import Logo from "$lib/assets/Logo.png";
    import Cookies from 'js-cookie'
    import { goto } from '$app/navigation'
    import { jwtDecode } from 'jwt-decode';

    let name;
    let username;
    let email;
    let password;
    let rePassword;

    // $: console.log(name, username, email, password, rePassword)
    
    const handleLoginButton = () => {
        const payload = {
                "email": email,
                "password": password
            }

        fetch("http://localhost:5000/api/v1/authenticate", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            Cookies.set("token", data.token)
            const decoded = jwtDecode(data.token)
            goto(`/user/${decoded.user_id}`, {
                replaceState: false,
                
            })
            console.log(data)
        }).catch(error => {
            console.error(error)
        })
    }

</script>

<HeaderSecundario  pagina="login" />

<section>
    <div class="nebula">
        <img src="{Logo}" alt="Logo">

        <h4>SEU ACERVO DE HISTÓRIAS<br>INCRÍVEIS</h4>
    </div>

    <div class="form">
        <form action="#">
            <h3>SEJA BEM-VINDO</h3>
            <input bind:value={email} type="email" name="email" id="iusuario" placeholder="Email" required>
            <input bind:value={password} type="password" name="senha" id="isenha" min="8" max="20" placeholder="Senha" required>
            <a href="#/" id="esqueci-senha">Esqueci minha senha</a>
            <input on:click={handleLoginButton} type="submit" value="Login">
        </form>

        <button id="login-google">
            <img src="{googleLogo}" alt="Ícone google">
            <p>Login com Google</p>
        </button>     
    </div>
</section>

<style>
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
        background: #75C9C8 url(../../lib/assets/invertido.png) no-repeat center;
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
        background: url(../../lib/assets/catbus_running.png) no-repeat;
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
        padding: 13px 13px 13px 20px;
        margin: 10px auto 15px auto;
        font-size: 20px;
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

    li#entrar {
        display: none;
    }


    /* Responsividade */

    /* Abaixo de 625px */

    @media screen and (max-width: 625px) {

        body {
            margin: auto;
        }
        section {
            align-items: center;
            width: 355px;
            height: 510px;;
        }

        .nebula {
            display: none;
        }


        /* Section */

        .form {
            display: flex;
            justify-content: normal;
            margin: 10px auto;
            align-items: center;
            background: none;
        }

        .form h3 {
            font-size: 30px;
        }
        
        .form input {
            display: block;
            padding: 3px 10px 3px 20px;
            margin: 10px auto 15px auto;
            font-size: 15px;
            width: 255px;
            height: 55px;
            border-radius: 3px;
            border: none;
            box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.41);
            
        }

        .form input::placeholder {
            font-size: 15px;
        }

        form > a#esqueci-senha {
            margin-top: 30px;
            text-align: center;

        }

        button#login-google {
            display: block;
            width: 195px;
            margin-bottom: 50px;
        }

        button#login-google > p {
            font-size: 15px;
            position: relative;
            display: inline;
            bottom: 7px;
        }

        form > input[type="submit"] {
            font-size: 20px;
        }
    }

    
    /* Abaixo de 1120px */

    @media screen and (min-width: 625px) and (max-width: 1120px) {
            
        section {
            flex-direction: column;
            justify-content: space-between;
            width: 60%;
            min-width: 550px;
            max-width: 660px;;
        }

        .nebula {
            display: flex;
            width: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            background: #75C9C8 url(../../lib/assets/invertido.png);
            
            background-size: contain;
            background-repeat: no-repeat;
            background-position: -15%;
        }

        .nebula img {
            margin-top: 30px;
            width: 80%;
        }

        .nebula > h4 {
            font-size: 20px;
            font-family: 'Hanalei Fill', sans-serif;
            margin-top: 10px;
            letter-spacing: 0.1em;
            text-shadow: 2px 2px 2px white;
        }
            

        .form {
            margin: auto;
            align-items: center;
            background: none;
        }

        .form h3 {
            margin-top: 10px;
            font-size: 30px;
        }

        .form input {
            padding: 3px 3px 3px 15px;
        }

        button#login-google {
            display: block;
            width: 300px;
            max-width: 350px;
            margin-bottom: 50px;
        }

        button#login-google > p {
            font-size: 20px;
            position: relative;
            display: inline;
            bottom: 5px;
        }

        form > a#esqueci-senha {
            margin-top: 30px;
            text-align: center;

        }
    }

</style>