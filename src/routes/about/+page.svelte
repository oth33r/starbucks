<script>
	import Believe from '$lib/about/Believe.svelte';
	import CoffeeCraft from '$lib/about/CoffeeCraft.svelte';
	import OurCompany from '$lib/about/OurCompany.svelte';
	import OurHeritage from '$lib/about/OurHeritage.svelte';
	import OurPartners from '$lib/about/OurPartners.svelte';
	import People from '$lib/about/People.svelte';
	import Planet from '$lib/about/Planet.svelte';
	import Learn from '$lib/about/Learn.svelte';
	import Stories from '$lib/about/Stories.svelte';
</script>

<main>
	<OurCompany />

	<OurHeritage />

	<CoffeeCraft />

	<OurPartners />

	<Believe />

	<People />

	<Planet />

	<Learn />

	<Stories />
</main>

<style>
	@import '/styles/aboutStyles/about.scss';
</style>
