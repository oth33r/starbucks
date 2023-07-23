<script>
	import Benefits from '$lib/home/Benefits.svelte';
	import Contacts from '$lib/home/Contacts.svelte';
	import Products from '$lib/home/Products.svelte';
	import Welcome from '$lib/home/Welcome.svelte';
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
