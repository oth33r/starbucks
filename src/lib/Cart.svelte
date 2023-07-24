<script lang="ts">
	import type { Product } from './productModel';

	export let product: Product;
	console.log('TEST1');
</script>

<li>
	{product.name}
	Amount: {product.amount}
</li>

<style>
	@import '/static/styles/shopStyles/cart.scss';
</style>
