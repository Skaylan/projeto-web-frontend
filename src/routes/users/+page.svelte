<script>
	let class_ = 'hidden';

	function toggleMenu() {
		class_ = class_ === '' ? 'hidden' : '';
	}

	function closeModal() {
		class_ = 'hidden';
	}

	$: console.log(class_);
</script>

<!-- Primeira Seção -->
<div class="relative border-2 border-rose-500 w-full bg-[#50d71e] sm:h-[260px] md:h-[500px]">
	<img
		src="https://placehold.co/1000x500"
		alt="Imagem de capa"
		class="w-full h-full object-cover"
	/>

	<div class="absolute flex flex-col m-4 h-auto bottom-[1px] left-0 sm:ml-7 mb-2 md:m-12">
		<div
			class="border-2 rounded-full border-red-500 sm:w-[7rem] h-[7rem] md:w-[13rem] md:h-[13rem]">
            <img src="https://placehold.co/30x30" alt="Ícone de usuário" class="w-full h-full object-cover rounded-full"/>
		</div>
		<div class="mt-1 flex items-center justify-center">
			<h1 class="text-white text-lg font-semibold text-center sm:text-sm md:text-3xl">User Name</h1>
		</div>
	</div>
</div>

<!-- Segunda Seção -->
<div
	class="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4 border-red-500"
>
	<ul class="flex flex-wrap sm:flex-nowraz">
		<li class="p-3">
			<a on:click={toggleMenu} class="cursor-pointer">Categorias</a>
			<!-- Menu Suspenso -->
			<ul
				class="{class_} w-[10rem] h-[16rem] absolute mt-2 space-y-2 border bg-cyan-200 border-gray-300 rounded-md categories-dropdown"use:handleMount>
				<div class="ml-2 mt-2">
                    <li class="pb-2"><a href="/#">Romance</a></li>
                    <li class="pb-2"><a href="/#">Aventura</a></li>
                    <li class="pb-2"><a href="/#">Comedia</a></li>
                    <li class="pb-2"><a href="/#">Suspense</a></li>
                </div>     
			</ul>
		</li>
		<li class="p-3"><a href="/#">Recentes</a></li>
		<li class="p-3"><a href="/#">Ordem Alfabética</a></li>
	</ul>
</div>

<!-- Terceira Seção -->
<div class="flex items-center justify-center pl-4 pr-4">
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
		<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
		<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
		<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
		<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
		<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
		<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
		<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
		<img class="rounded-lg" src="https://placehold.co/431X584" alt="" />
	</div>
</div>
