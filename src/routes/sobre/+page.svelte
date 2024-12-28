<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Banner from '../../lib/assets/Banner.png';
</script>

<section>
	<Header />

	<div class="text">
		<h2>OBJETIVO DO PROJETINHO</h2>
	</div>
</section>

<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	* {
		background-color: black;
	}

	.text {
		color: #fff;
		text-align: center;
	}
</style>
