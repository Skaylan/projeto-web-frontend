<script>
    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
    }

    function closeMenu(event) {
        if (!event.target.closest('.categories-dropdown')) {
            isOpen = false;
        }
    }

    function handleMount(element) {
        element.addEventListener('click', closeMenu);

        return () => {
            element.removeEventListener('click', closeMenu);
        };
    }

    function CloseModal(element){

        element.addEventListener('click', () => {
            
            closeMenu()
        })
    }
</script>

<body use:CloseModal>
    <!-- Primeira Seção -->
<div class="relative border-2 border-rose-500 w-full h-80 bg-[#50d71e]">
    <img src="https://placehold.co/1000x500" alt="Imagem de capa" class="w-full h-full object-cover">

    <div class="absolute flex flex-col items-start m-4 md:m-8 w-full max-w-sm h-auto bottom-0 left-0">
        <div class="border-2 rounded-full border-red-500 w-32 h-32 p-2">
            <img src="https://placehold.co/30x30" alt="Ícone de usuário" class="w-full h-full object-cover rounded-full">
        </div>
        <div class="ml-4 mt-2">
            <h1 class="text-white text-lg font-semibold">User Namer</h1>
        </div>
    </div>

</div>
    <!-- Segunda Seção -->
    <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4 border-red-500">
        <ul class="flex flex-wrap sm:flex-nowrap">
            <li class="p-3">
                <a on:click={toggleMenu} class="cursor-pointer">Categorias</a>
                <!-- Menu Suspenso -->
                {#if isOpen}
                    <ul class="absolute mt-0 space-y-2 bg-white border border-gray-300 rounded-md categories-dropdown" use:handleMount>
                        <li><a href="/#">Opção 1</a></li>
                        <li><a href="/#">Opção 2</a></li>
                        <li><a href="/#">Opção 3</a></li>
                    </ul>
                {/if}
            </li>
            <li class="p-3"><a href="/#">Recentes</a></li>
            <li class="p-3"><a href="/#">Ordem Alfabética</a></li>
        </ul>
    </div>

    <!-- Terceira Seção -->
    <div class="flex items-center justify-center min-h-screen pl-4 pr-4">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1">
            <img class="rounded-lg" src="https://placehold.co/431X584" alt="">
            <img class="rounded-lg" src="https://placehold.co/431X584" alt="">
            <img class="rounded-lg" src="https://placehold.co/431X584" alt="">
            <img class="rounded-lg" src="https://placehold.co/431X584" alt="">
            <img class="rounded-lg" src="https://placehold.co/431X584" alt="">
            <img class="rounded-lg" src="https://placehold.co/431X584" alt="">
            <img class="rounded-lg" src="https://placehold.co/431X584" alt="">
            <img class="rounded-lg" src="https://placehold.co/431X584" alt="">
        </div>
    </div>
</body>

