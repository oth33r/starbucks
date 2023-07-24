<script>
	import Contacts from '$lib/home/Contacts.svelte';
	import Products from '$lib/home/Products.svelte';
	import Welcome from '$lib/home/Welcome.svelte';
</script>

<main>
	<Welcome />

	<Products />

	<Contacts />
</main>

<style>
	@import '/styles/index.scss';
</style>
