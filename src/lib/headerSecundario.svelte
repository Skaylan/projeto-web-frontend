<script>
    import LogoCorte from "./assets/Logo_corte.png"
    import IconeLogin from "./assets/icone_login.svg"
    import LogoPreta from "./assets/Logo-preta.png"
    import Menu from "./assets/menu.svg"
    import Close from "./assets/close.svg"
    import Inicio from "./assets/inicio.svg"
    import Filmes from "./assets/filmes.svg"
    import Sobre from "./assets/sobre.svg"
    import API from "./assets/api.svg"
    import Entrar from "./assets/entrar.svg"

    export let pagina;

    function loginPag(pagina) {
        return pagina !== 'login';
    }

    function abreMenu() {
        const ul = lista.style; 
        const lis = document.querySelectorAll('ul li');
        const link = document.querySelectorAll('li a');


        if (ul.display == 'none') {
            ul.position = 'absolute';
            ul.right = '60px';
            ul.top = '69px';
            ul.display = 'flex';
            ul.flexDirection = 'column';
            ul.zIndex = '2';

            barraMenu.style.display = 'block';
            barraMenu.style.position = 'absolute';
            barraMenu.style.marginRight = '0';
            barraMenu.style.width = '200px';

            let listaHtml = '<ul>';
            lis.forEach(li => {
                listaHtml += '<li>${li.textContent}</li>';
            })
            listaHtml += '</ul>'

            barraMenu.style.innerHTML = listaHtml;
            imgMenu.src = [Close];
        
        } else {
            ul.display = 'none';
            barraMenu.style.display = 'none';
            imgMenu.src = [Menu];
        }
        
    }

</script>

<header id="header">
    <a href="#" on:click="{abreMenu}">
        <img src="{Menu}" id="imgMenu" alt="Menu">
    </a>
    <div class="logo">
        <a href="#">
            <img src="{LogoCorte}" id="logo-branca" alt="Logo">
            <img src="{LogoPreta}" id="logo-preta" alt="">
            
        </a>
    </div>

    <ul id="lista">
        <li><a href="#"><img src="{Inicio}" alt="Início" class="iconeMenu">Início</a></li>
        <li><a href="#"><img src="{Filmes}" alt="Filmes" class="iconeMenu">Filmes</a></li>
        <li><a href="#"><img src="{Sobre}" alt="Sobre" class="iconeMenu">Sobre</a></li>
        <li><a href="#"><img src="{API}" alt="API" class="iconeMenu">API</a></li>

        {#if (loginPag(pagina))}
            <li><a href="#"><img src="{Entrar}" alt="Entrar" class="iconeMenu">Entrar</a></li>
        {/if}
        
    </ul>
    <div class="icon_login">
        <a href="#">
            <img src="{IconeLogin}" width="50px" alt="Foto de perfil">
        </a>
    </div>
</header>

<div id="barraMenu"></div>

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
        display: block;
    }

    header > ul > li {
        display: inline-block;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        margin-right: 30px;
    }

    header > ul > li > a {
        text-decoration: none;
        color: black;
    }

    .logo {
        flex-grow: 2;
        margin-top: 6px;
        margin-left: 30px;
    }
    
    #imgMenu {
        display: none;
    }

    #logo-preta {
        display: none;
    }

    .icon_login {
        margin: 15px 12px auto 8px;
    }

    .iconeMenu {
        display: none;
    }

    
    /* Responsividade */
    
    @media screen and (max-width: 625px) {
        header {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-around;
            margin-bottom: 5px;
        }
        
        header > ul {
            display: none;
            margin-top: 20px;
        }
        
        header > ul > li {
            display: block;
            background-color: rgb(225, 225, 225);
            padding: 6px;
            margin: 2px;
            margin-right: 25px;
            margin-left: 55px;
            font-size: 20px;
            width: 100%;
        }

        header > ul > li > a > img {
            display: inline-block;
            width: 30px;
            margin-right: 14px;
        }

        header > ul > li > a  {
            display: flex;
            align-items: center;
            width: 100%;
        }

        #imgMenu {
            display: block;
            margin-left: 20px;
            width: 32px;
        }

        #logo-branca {
            display: none;
        }

        #logo-preta {
            display: inline-block;
            width: 215px;
            flex-grow: 1;
            margin: 5px auto auto -15px;
        }

        .icon_login {
            display: none;
        }
        
        .logo {
            flex-grow: 0;
        }

        .icon_login > a > img {
            width: 36px;
            margin-left: 0;
        }

        #barraMenu {
            display: none;
            height: 350px;
            width: 0px;
            right: 0;
            background-color: white;
            margin-top: 8px;
            box-shadow: 3px 3px 8px #000;
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
        }

        .iconeMenu {
            display: block;
        }
    }

</style>