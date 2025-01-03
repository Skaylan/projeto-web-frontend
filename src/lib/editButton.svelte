<script>
	import pageIcon from '../lib/assets/page-icon.svg';
	import { Search } from 'lucide-svelte';

	import FormComponent from './movieForm.svelte'

	const movies = [
		'A fuga das galinhas',
		'Lucas e o formigueiro',
		'tropa do coco',
		'skin de rico',
		'varios outros',
		'as longas transças do careca'
	];
	
</script>

<div class="flex flex-col w-[90%]">
	<div class="flex flex-col gap-2 sm:flex-row sm:justify-center">
		<!-- Filmes cadastrados -->
		<section class="flex justify-center bg-teal-300 sm:w-[30%] md:w-[40%]">
			<div class="flex flex-col items-center gap-2 w-[90%] p-2 rounded-lg">
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

				<div class="overflow-y-scroll max-h-40 w-full"></div>
			</div>
		</section>

		<section class="flex flex-col md:w-[80%]">

			<FormComponent/>
		
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
		
		</section>
	</div>
</div>
