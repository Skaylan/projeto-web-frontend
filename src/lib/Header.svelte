<script>
    import logoInvertida from "../lib/assets/Logo_invertida.png"
    import { CircleUserRound } from 'lucide-svelte'
    export let style;
</script>
    
    
        
<header class="flex w-[100%] p-4 {style}">
    <div class="flex items-center justify-center w-[30%]">
        <a href="#/">
            <img src="{logoInvertida}" alt="page_logo">
        </a>
    </div>
    <div class="w-[80%] pr-4 text-3xl text-white">
        <nav>
            <ul class="flex gap-4 items-center justify-end">
                <li><a href="#/">Inicio</a></li>
                <li><a href="#/">Filmes</a></li>
                <li><a href="#/">Sobre</a></li>
                <li><a href="#/">Api</a></li>
               <button>
                    <CircleUserRound size={46} />
               </button>
            </ul>
        </nav>
    </div>
</header>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&display=swap');
    * {
        font-family: 'Inter', sans-serif;
    }
</style>