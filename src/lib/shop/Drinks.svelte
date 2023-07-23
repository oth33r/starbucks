<script lang="ts">
	import Cards from '$lib/shop/Cards.svelte';

	import { items } from '$lib/card';
</script>

<div class="drinks">
	<div class="container">
		<div class="title">
			<h2>Drinks</h2>

			<hr />

			<div class="items">
				{#each items as item}
					<Cards {item} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@import '/styles/shopStyles/_drinks.scss';
</style>
