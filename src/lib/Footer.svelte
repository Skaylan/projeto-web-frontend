
<script>
    import logo_invertida from "../lib/assets/Logo_invertida.png"
    import github from '../lib/assets/github.svg'
</script>



<footer>     
    <div class="links">
            <li><a href="/#">Sobre nós</a></li>
            <li><a href="/#">Termos de uso</a></li>
            <li><a href="/#">Politícas de privacidade</a></li>
            <li><a href="/#">Api</a></li>
    </div>

    <div class="bottom-footer">
        <div class="github-container">
            <img src="{github}" alt="github logo">
            <div id="text-github">
                <a href="https://github.com">GitHub</a>
            </div>
        </div>

        <div class="logo-container">
            <img src="{logo_invertida}" alt="logo">
            <div class="copy-container">
                <h4 class="Copyright">Copyright © 2024</h4>
            </div>
        </div>
    </div>
</footer>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');

    * {
        font-family: 'Roboto', sans-serif;
        color: white;
    }
    footer {
        display: flex;
        flex-direction: column;
        padding-top: .5rem;
        padding-bottom: .5rem;
        background-color: #151515;
    }
    .links {
        display: flex;
        justify-content: center;
        gap: 1rem;
        /* background: blue; */
    }

    .links li {
        list-style: none;
    }

    .github-container {
        display: flex;
        flex-direction: column;
        /* background-color: red; */
    }
    
    .bottom-footer{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        /* background-color: purple; */
    }
    .logo-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* background-color: green; */
    }

    .logo-container img {
        width: 300px;
    }

    .copy-container {
        /* background-color: yellow; */
        width: 100%;
    }

    .Copyright {
        text-align: center;
        font-size: 1rem;
        font-weight: normal;
    }

    .information_footer {
        text-align: center;
        list-style: none;
        font-size: 14px;
        padding: 10px;
        
    }
</style>