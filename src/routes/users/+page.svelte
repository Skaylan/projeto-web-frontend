
<!-- Primeira Seção -->
<div class="relative border-2 border-rose-500 w-full bg-[#50d71e] sm:h-[260px] md:h-[500px]">
	<img
		src="https://placehold.co/1000x500"
		alt="Imagem de capa"
		class="w-full h-full object-cover"
	/>

	<div class="absolute flex flex-col m-4 h-auto bottom-[1px] left-0 sm:ml-7 mb-2 md:m-12">
		<div
			class="border-2 rounded-full border-red-500 sm:w-[7rem] h-[7rem] md:w-[13rem] md:h-[13rem]"
		>
			<img
				src="https://placehold.co/30x30"
				alt="Ícone de usuário"
				class="w-full h-full object-cover rounded-full"
			/>
		</div>
		<div class="mt-1 flex items-center justify-center">
			<h1 class="text-white text-lg font-semibold text-center sm:text-sm md:text-3xl">User Name</h1>
		</div>
	</div>
</div>

<!-- Segunda Seção -->
<div
	class="flex flex-col sm:flex-row items-center justify-center sm:justify-between border-red-500"
>
	<ul class="flex flex-wrap gap-1 flex-nowrap md:ml-[17px] lg:ml-[17px] ">
		<li class="p-0 bg-[#75C9C8] flex rounded-t-lg sm: md:p-3 lg:p-3">
			<div class="flex justify-items-center sm:">
				<img class="h-[20px] h-[20px] sm:m-1" src="src\lib\assets\icons-funil.png" alt="icons-funil" />
			</div>
			<a on:click={toggleMenu} class="cursor-pointer text-end">Categorias</a>
			
		<li class="p-0 flex bg-[#75C9C8] rounded-t-lg sm: md:p-3 lg:p-3">
			<div class="flex justify-items-center sm:">
				<img class="h-[20px] h-[20px] sm:m-1" src="src\lib\assets\icons-recentes.png" alt="icons-recentes" />
			</div>
			<a class="sm:" href="/#">Recentes</a>
		</li>
		<li class="p-0 flex bg-[#75C9C8] rounded-t-lg sm: md:p-3 lg:p-3">
			<div class="flex justify-items-center sm:">
				<img class="h-[20px] h-[20px] sm:m-1" src="src\lib\assets\icons-ordem-alfabetica.png" alt="icons-ordem-alfabetica" />
			</div>
			<a class="sm:" href="/#">Ordem Alfabética</a>
		</li>
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
