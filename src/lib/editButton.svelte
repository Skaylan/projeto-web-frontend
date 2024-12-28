<script>
    import pageIcon from '../lib/assets/page-icon.svg';
    import { Search } from 'lucide-svelte';

    const labels = [
        'Titulo',
        'Titulo original',
        'Descrição',
        'Diretor',
        'Estúdio',
        'Produtora',
        'Nota',
        'Tempo'
    ];

    const movies = ['A fuga das galinhas', 'Lucas e o formigueiro', 'tropa do coco', 'skin de rico', 'varios outros', 'as longas transças do careca'];
    const categories = ['Terror', 'Sacanagem', 'Ação', 'Comédia', 'Drama', 'Ficção Científica'];
    const uploadTypes = ['Banner', 'Poster'];
</script>

<body class="flex flex-col w-full">
    <div class="flex flex-col gap-2 sm:flex-row sm:justify-center">
        <!-- Filmes cadastrados -->
        <section class="flex justify-center sm:w-[30%]">
            <div class="flex flex-col items-center gap-2 w-[90%] p-2 bg-[#75C9C8] rounded-lg">
                <div class="flex justify-start w-full text-xl">
                    <span>Filmes cadastrados</span>
                </div>
                <div class="flex w-full">
                    <input
                        class="w-[90%] pl-3 rounded-lg shadow-custom bg-[#F2F2F2]"
                        type="search"
                        placeholder="Buscar..."
                    />
                    <Search size="32" />
                </div>

                <div class="overflow-y-scroll max-h-40 w-full">
                    {#each movies as movie}
                        <div class="flex flex-col gap-2 w-full rounded-lg">
                            <div class="flex items-center p-1 my-1 w-full bg-white rounded-lg shadow-custom">
                                <img class="w-5 h-5" src={pageIcon} alt="" />
                                <span>{movie}</span>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </section>

        <!-- Formulário -->
        <section class="sm:w-[60%]">
            <div class="flex justify-center w-full">
                <div class="flex flex-col items-center w-[90%] p-2 sm:w-full bg-[#F2F2F2] rounded-lg">

                    <div class="w-full flex justify-start pl-5 text-2xl">
                        <span>Informações do filme</span>
                    </div>

                    <!-- Campos do formulário -->
                    {#each labels as label}
                        <div class="w-[90%]">
                            <span>{label}</span>
                            <div class="h-8">
                                <input class="w-full h-full rounded-lg shadow-custom" type="text" />
                            </div>
                        </div>
                    {/each}

                    <!-- Gênero -->
                    <div class="flex items-center flex-col w-[90%] lg:flex-row-reverse">
                        <div class="w-[90%]">
                            <span>Gênero</span>
                            <div class="flex items-center flex-col p-2 bg-[#75C9C8] rounded-md">
                                <div class="flex items-center w-full h-8 m-2">
                                    <input
                                        class="w-full pl-3 h-full rounded-lg shadow-custom bg-[#F2F2F2]"
                                        type="search"
                                        placeholder="Buscar..."
                                    />
                                    <Search size="32" />
                                </div>

                                <div class="overflow-y-scroll max-h-40 w-full">
                                    {#each categories as category, index}
                                        <div class="flex justify-between items-center w-full px-2 py-2 bg-white rounded-md mb-2">
                                            <label for={`cat${index}`}>{category}</label>
                                            <input type="checkbox" id={`cat${index}`} />
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        </div>

                        <!-- Upload -->
                        <div class="w-full h-full">
                            <section class="flex gap-3 items-center h-full lg:flex-row p-2">
                                {#each uploadTypes as type, i}
                                    <div class="flex justify-center w-[90%] relative lg:h-70">
                                        <input
                                            class="absolute top-0 left-0 w-full h-full bg-white opacity-0 cursor-pointer"
                                            type="file"
                                            id={`fileInput${i}`}
                                        />
                                        <label
                                            for={`fileInput${i}`}
                                            class="flex justify-center items-center px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
                                        >
                                            Upload {type}
                                            <img class="w-5 h-5" src={pageIcon} alt="" />
                                        </label>
                                    </div>
                                {/each}
                            </section>
                        </div>
                    </div>

                    <!-- Botões -->
                    <div class="flex justify-center gap-4 mt-4 w-full">
                        <button
                            class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            type="button"
                        >
                            Salvar
                        </button>
                        <button
                            class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            type="button"
                        >
                            Excluir
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>
