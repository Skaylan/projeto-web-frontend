<script>
    import HeaderSecundario from "$lib/headerSecundario.svelte";
    import googleLogo from "$lib/assets/google-logo.svg";
    import Logo from "$lib/assets/Logo.png";

    let name;
    let username;
    let email;
    let password;
    let rePassword;

    // $: console.log(name, username, email, password, rePassword)
    
    const handleCreateUserButton = () => {
        const payload = {
                "name": name,
                "username": username,
                "email": email,
                "password": password,
                "re_password": rePassword
            }

        fetch("http://localhost:5000/api/v1/create_user", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
        }).catch(error => {
            console.error(error)
        })
    }

</script>

<HeaderSecundario />

<section>
    <div class="nebula">
        <img src="{Logo}" alt="Logo">
        <h4>SEU ACERVO DE HISTÓRIAS<br>INCRÍVEIS</h4>
    </div>

    <div class="form">
        <form action="#">
            <h3>
                SEJA BEM-VINDO
            </h3>
            <input bind:value={name} type="text" name="nome" id="inome" placeholder="Nome" max="40" required>
            <input bind:value={username} type="text" name="usuario" id="iusuario" placeholder="Nome de usuário" min="8" max="20" required>
            <input bind:value={email} type="email" name="email" id="iemail" placeholder="Email" required>
            <input bind:value={password} type="password" name="senha" id="isenha" min="8" max="20" placeholder="Senha" required>
            <input bind:value={rePassword} type="password" name="senha2" id="isenha2" min="8" max="20" placeholder="Repetir senha" required>

            <input on:click={handleCreateUserButton} type="submit" value="Criar conta">
        </form>

        <button id="login-google">
            <img src="{googleLogo}" alt="Ícone google">
            <p>Criar com Google</p>
        </button> 
        
        <p id="tep">
            Ao se registrar você concorda com nossos <a href="#">termos de uso</a> e <a href="#">privacidade</a>
        </p>
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
        margin-top: 80px;
        width: 50vw;
    }

    .form h3 {
        font-size: 40px;
        font-family: 'Hanalei Fill', sans-serif;
        margin-bottom: 30px;
    }

    .form input {
        display: block;
        padding: 3px 3px 3px 20px;
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

    form > input[type="submit"] {
        background-color: #4BC74F;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 400;
        width: 375px;
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

    #tep {
        width: 375px;
        font-size: 13px;
        position: relative;
        top: -178px;
        right: -71px;
    }


    /* Responsividade */

    /* Abaixo de 625px */

    @media screen and (max-width: 625px) {

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
            margin: auto;
            margin-top: -18px;
            align-items: center;
            background: none;
        }

        .form h3 {
            font-size: 25px;
            margin-bottom: 3px;
        }
        
        .form input {
            display: block;
            padding: 3px 10px 5px 20px;
            margin: 10px auto 20px auto;
            font-size: 15px;
            width: 255px;
            height: 35px;
            border-radius: 3px;
            border: none;
            box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.41);
            
        }

        .form input::placeholder {
            font-size: 15px;
        }


        button#login-google {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-items: center;
            width: 195px;
            margin: 0;
        }

        button#login-google > p {
            font-size: 15px;
            position: relative;
            top: 0;
            margin: 0;
            display: inline-block;
            bottom: 7px;
        }

        form > input[type="submit"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 5px;
            margin-bottom: 2px;
            font-size: 15px;
            width: 195px;
        }

        button#login-google > img {
            width: 15px;
            margin: auto 5px auto 18px
        }

        #tep {
            position: static;
            width: 195px;
            font-size: 10px;
            text-align: center;
        }
    }

    
    /* Abaixo de 1120px */

    @media screen and (min-width: 625px) and (max-width: 1120px) {
            
        section {
            flex-direction: column;
            justify-content: space-between;
            background-color: rgb(242, 242, 242);
            width: 60%;
            min-width: 550px;
            max-width: 660px;;
        }

        .nebula {
            display: none;
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
            font-size: 18px;
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
        }

        button#login-google > p {
            font-size: 20px;
            position: relative;
            display: inline;
            bottom: 5px;
        }

        form > input[type="submit"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 23px;
            margin-bottom: 2px;
            font-size: 25px;
            width: 300px;
        }

        #tep {
            position: static;
            width: 300px;
            font-size: 16px;
            text-align: center;
            margin-top: -58px;
        }
    }

</style>