<script>
	import Contacts from '$lib/home/Contacts.svelte';
	import Products from '$lib/home/Products.svelte';
	import Welcome from '$lib/home/Welcome.svelte';
	import Benefits from '$lib/home/Benefits.svelte';
</script>

<main>
	<Welcome />

	<Benefits />

	<Products />

	<Contacts />
</main>

<style>
	@import '/styles/index.scss';
</style>
