<main>
    <section class="top-session">
        <div class="banner">
            <div class="image-container">
                <div class="title-container">
                    <h1>Tumulo dos vagalumes</h1>
                </div>
                <img src="https://placehold.co/1440x700" alt="banner">
            </div>
        </div>
    </section>
    <section class="movie-info-section">
        <div class="movie-content">
            <div class="movie-poster-container">
                <img src="https://placehold.co/350x500" alt="">
            </div>
            <div class="separator-container">
                <div class="separator-line"></div>
            </div>
            <div class="movie-info-container">
                <div class="movie-description-container">
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.</p>
                </div>
                <div class="movie-details-container">
                    <div class="mobile-poster-container">
                        <img src="https://placehold.co/200x300" alt="movie-poster">
                    </div>
                    <div class="w-[5px] h-[100%] bg-red-600 md:hidden"></div>
                    <div class="mobile-movie-info-container ">
                        <span><strong>Título:</strong> Tumulo dos vagalumes</span>
                        <span><strong>Título Original:</strong> 火垂るの墓</span>
                        <span><strong>Título Original Romanizado:</strong> Hotaru no haka</span>
                        <span><strong>Diretor:</strong> Isao Takahata</span>
                        <span><strong>Produtor:</strong> Toru Hara</span>
                        <span><strong>Autor:</strong> Akiyuki Nosaka</span>
                        <span><strong>Studio:</strong> Ghibli</span>
                        <span>1988 - Guerra/Tragedia - 1h:29m</span>
                    </div>
                    <div class="desktop-movie-info-container">
                        <span><strong>Título:</strong> Tumulo dos vagalumes</span>
                        <span><strong>Título Original:</strong> 火垂るの墓</span>
                        <span><strong>Título Original Romanizado:</strong> Hotaru no haka</span>
                        <span><strong>Diretor:</strong> Isao Takahata</span>
                        <span><strong>Produtor:</strong> Toru Hara</span>
                        <span><strong>Autor:</strong> Akiyuki Nosaka</span>
                        <span><strong>Studio:</strong> Ghibli</span>
                        <span>1988 - Guerra/Tragedia - 1h:29m</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="similar-movies-section">
        <div class="similar-movies-title-container">
            <div class="red-bar"></div>
            <h2>Títulos Semelhantes</h2>
        </div>
        <div class="similar-movies-container">
            <img src="https://placehold.co/200x300" alt="similar-movies-posters">
            <img src="https://placehold.co/200x300" alt="similar-movies-posters">
            <img src="https://placehold.co/200x300" alt="similar-movies-posters">
            <img src="https://placehold.co/200x300" alt="similar-movies-posters">
            <img src="https://placehold.co/200x300" alt="similar-movies-posters">
            <img src="https://placehold.co/200x300" alt="similar-movies-posters">
        </div>
    </section>
</main>




<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    
    * {
        font-family: 'Roboto', sans-serif;
    }

    /* BANNER E TÍTULO DO FILME */
    .top-session {
        width: 100%;
    }

    .banner {
        width: 100%;
    }

    .image-container {
        position: relative;
        object-fit: cover;
    }

    .image-container img{
        width: 100%;
    }

    .title-container {
        max-width: 800px;
        text-align: center;
        position: absolute;
        left: -2rem;
        top: 20rem;
        line-height: 5rem;
        /* background: red; */
    }

    .title-container h1 {
        font-size: 6rem;
        color: white;
    }

    /* INFORMAÇÕES DO FILME */

    .movie-info-section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .movie-content {
        width: 100%;
        height: 500px;
        /* background: green; */
        padding-top: 2rem;
        display: flex;
        justify-content: center;
    }

    .movie-poster-container {
        width: 40%;
        display: flex;
        justify-content: end;
        /* background: purple; */
    }

    
    .separator-container {
        width: 2%;
        height: 100%;
        display: flex;
        /* align-items: center; */
        justify-content: center;
        /* background: red; */
    }

    .separator-line {
        width: 5px;
        height: 100%;
        background: red;
    }
    
    .movie-info-container {
        width: 40%;
        display: flex;
        flex-direction: column;
        /* background: purple; */
    }


    .movie-description-container {
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
    }

    .movie-details-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 70%;
        gap: 1rem;
        /* background: green; */
    }

    .desktop-movie-info-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .similar-movies-section {
        width: 100%;
        /* background: red; */
        display: flex;
        flex-direction: column;  
        padding-top: 1rem;    
    }

    .similar-movies-title-container {
        display: flex;
        width: 100%;
        height: 50px;
        align-items: center;
        padding-left: 4rem;
        gap: 0.5rem;
        padding-bottom: 1rem;
    }

    .red-bar {
        width: 5px;
        height: 100%;
        background: red;
    }

    .similar-movies-container {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;
        overflow: hidden;
        
    }

    .mobile-movie-info-container {
        display: none;
    }
    .mobile-poster-container {
        display: none;
    }

    @media (max-width: 430px) {

        .title-container {
            max-width: 200px;
            text-align: center;
            position: absolute;
            left: 1rem;
            top: 6rem;
        }

        .title-container h1 {
            font-size: 2rem;
            color: white;
            line-height: 2rem;
        }

        .movie-info-section {
            width: 100%;
            padding: .5rem;
            /* background: blue; */
        }

        .movie-content {
            width: 100%;
            height: 100%;
            
        }

        .movie-poster-container {
            width: 100%;
            display: flex;
            justify-content: center;
            display: none;
            
        }
        
        .movie-info-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            /* background: purple; */
        }
        .movie-description-container {
            width: 100%;
            height: 100%;
            display: flex;
            padding-bottom: 1rem;
            align-items: center;
            text-align: justify;
            /* background: yellow; */
        }

        .movie-details-container {
            display: flex;
            flex-direction: row;
            width: 100%;
            gap: 1rem;
        }
        .desktop-movie-info-container {
            display: none;
        }
        .mobile-movie-info-container {
            display: flex;
            flex-direction: column;
        }
        .mobile-poster-container {
            display: flex;
            align-items: center;
        }

        .similar-movies-title-container {
            padding-left: 1rem;
        }

        .separator-container {
            display: none;
        }
    }

    @media (max-width: 1024px) and (min-width: 431px) {
        .title-container {
            width: 400px;
            top: 13rem;
            left: 2rem;
        }
        .title-container h1{
            font-size: 3rem;
            line-height: 3rem;
        }
    }
</style>