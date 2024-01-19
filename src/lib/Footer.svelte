
<script>
    import logo from "../lib/assets/logo.png"

    import logogit from "../lib/assets/logogit.png"
</script>



<footer>
               
    <ul>
    <div class="information_footer">
        <li>
            <a href="#">Sobre nós</a>
        </li>
    </div>

    <div class="information_footer">
        <li>
            <a href="#">Termos de uso</a>
        </li>
    </div>

    <div class="information_footer">
        <li>
            <a href="#">Politícas de privacidade</a>
        </li>
    </div>
    </ul>

    

    <div id="logo_invertida3">

        <div>
        <img src="{logogit}">
    <div id="text-github">
        <a href="https://github.com">GitHub</a>
    </div>

    </div>
        <img src="{logo}">
    </div>

    <div class="copyright">
        <h4 class="Copyright">Copyright © 2024</h4>
    </div>


</footer>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');

* {
    margin: 0;
    font-family: 'Inter', sans-serif;
    color: white;
}

footer {
    background-color: #151515;
    flex-shrink: 0;
    padding: 5px;

}

#logo_invertida3{
    display: flex;
    justify-content: center;
    
   
    

}
.Copyright {
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    padding: 10px 0px;
}

.information_footer {
    text-align: center;
    list-style: none;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    padding: 10px;
    
}

ul {
    display: flex;
    justify-content: center;
}
header {
    background-color: white;
}
</style>