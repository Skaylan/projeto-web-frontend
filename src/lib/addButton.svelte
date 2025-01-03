<script>
	import pageIcon from '../lib/assets/page-icon.svg';
	import { Search } from 'lucide-svelte';
	import { onMount } from 'svelte';

	import FormComponent from './movieForm.svelte';

	let movieTitle = '';
	let movieOriginal_title = '';
	let movieRomanized_original_title = '';
	let movieDescription = '';
	let movieStudio = '';
	let movieDirector = '';
	let movieProducer = '';
	let movieRating = '';
	let movieLounch_date = '';
	let movieRunning_time = '';

	async function submitMovie() {
		const movie = {
			title: movieTitle,
			original_title: movieOriginal_title,
			romanized_original_title: movieRomanized_original_title,
			description: movieDescription,
			studio: movieStudio,
			director: movieDirector,
			producer: movieProducer,
			rating: movieRating,
			lounch_date: movieLounch_date,
			running_time: movieRunning_time
		};

		try {
			const response = await fetch('http://localhost:5000/api/v1/add_movie', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(movie)
			});

			if (!response.ok) {
				throw new Error('Erro ao enviar os dados.');
			}

			const result = await response.json();
			console.log('Dados enviados com sucesso:', result);
		} catch (error) {
			console.error('Erro ao enviar dados:', error);
		}
	}
</script>

<div class="flex flex-col items-center w-full">
	<div class="lg:w-[90%]">
		<FormComponent
			bind:title={movieTitle}
			bind:original_title={movieOriginal_title}
			bind:romanized_original_title={movieRomanized_original_title}
			bind:description={movieDescription}
			bind:studio={movieStudio}
			bind:director={movieDirector}
			bind:producer={movieProducer}
			bind:rating={movieRating}
			bind:lounch_date={movieLounch_date}
			bind:running_time={movieRunning_time}
		/>

		<!-- Botões -->
		<div class="flex justify-center gap-4 mt-4 w-full">
			<button
				class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
				type="button"
				on:click={submitMovie}
			>
				Salvar
			</button>
		</div>
	</div>
</div>
