<script>
	import iconfunnel from "../../../lib/assets/funnel-outline.svg"
	import iconAphabeticalOrder from "../../../lib/assets/alphabetical-order.svg"
	import icontimer from "../../../lib/assets/timer.svg"

	import { popup } from '@skeletonlabs/skeleton';

	let comboboxValue;

	const popupCombobox = {
		event: 'click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
				
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
<div class="flex border ml-4 mr-4 border-red-500 justify-center md:justify-start">
	<button class="btn bg-[#75C9C8] flex mr-1 gap-1 w-[120px] h-[30px] rounded-t-[10px] justify-center items-center" use:popup={popupCombobox}>
		<div class="flex w-[100px] items-center justify-center gap-1">
			<img class="w-[20px]" src="{iconfunnel}" alt="iconfunnel">
			<span>Categorias</span>
			<span>↓</span>
		</div>
	</button>

	
	<div class="bg-[#75C9C8] w-[120px] h-[140px] rounded-b" data-popup="popupCombobox">
		<div class="p-3" rounded="rounded-none">
			<a class="hover:bg-teal-500" href="#/">Romance</a>
			<a class="hover:bg-teal-500" href="#/">Aventura</a>
			<a class="hover:bg-teal-500" href="#/">Comedia</a>
			<a class="hover:bg-teal-500" href="#/">Suspense</a>
		</div>
		<div class="arrow bg-surface-100-800-token" />
	</div>
					
	<div class="bg-[#75C9C8] btn p-0 flex mr-1 gap-1 w-[100px] rounded-t-[10px] justify-center items-center">
		<div class="flex w-[100px] items-center justify-center gap-1">
			<img class="w-[20px] gap-2" src="{icontimer}" alt="icontimer">
			<span>Recentes</span>
		</div>
	</div>

	<div class="bg-[#75C9C8] btn p-0 flex gap-1 w-[100px] rounded-t-[10px] justify-center items-center">
		<div class="flex w-[100px] items-center justify-center gap-1">
			<img class="w-[20px] gap-2" src="{iconAphabeticalOrder}" alt="icontimer">
			<span>Ordem</span>
		</div>
	</div>
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
