<script>
	import pageIcon from '../lib/assets/page-icon.svg';
	import { Search } from 'lucide-svelte';
	import { onMount } from 'svelte';

	import FormComponent from './movieForm.svelte';

	let movieImageOneBase64 = '';
	let movieImageTwoBase64 = '';

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
	let movieCategories = [];

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
			launch_date: movieLounch_date,
			running_time: movieRunning_time,
			categories: movieCategories,
			banner_img_base64: movieImageOneBase64,
			poster_img_base64: movieImageTwoBase64
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
	<div class="w-[90%]">
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
			bind:imageOneBase64={movieImageOneBase64}
			bind:imageTwoBase64={movieImageTwoBase64}
			bind:activeCategories={movieCategories}
		/>

		<!-- Botões -->
		<div class="mt-6 flex items-center justify-end gap-x-6">
			<button
				on:click={submitMovie}
				type="submit"
				class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Salvar
			</button>
		</div>
	</div>
</div>
