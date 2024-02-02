<script>
    import logo from "../lib/assets/logo.png"
    import perfil from "../lib/assets/Profile.png"
    
    </script>
    
    
        
        <header>
            
            <div class="logo"><a href="#"><img src="{logo}"></a></div>
            
            <nav>
                <ul class="nav_links">
                    <li> <a href="#">Inicio</a></li>
                    <li> <a href="#">Filmes</a></li>
                    <li> <a href="#">Sobre</a></li>
                    <li> <a href="#">API</a></li>
                </ul>
            </nav>
            <div class="perfil">
                <a href="#"><img src="{perfil}"></a>
            </div>
            
        </header>
    
    
    
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&display=swap');

* {
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Inter', sans-serif;
font-weight: 500;
font-size: 30px;
color: white;
list-style: none;
text-decoration: none;
}

.logo {

width: 65%;
cursor: pointer;
}

header {
    /* background-color: black; */
    display: flex;
    justify-content: center;
    align-items: center;
   
}

.nav_links {
    display: flex;
    
}

li a {
    display: flex;
    justify-content: space-between;
    padding: 50px;
    margin: 0;

}
.perfil {
    border: 1px 
    
}


    </style>