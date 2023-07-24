<script lang="ts">
	import type { Product } from './productModel';

	export let product: Product;
	console.log('TEST1');
</script>

<li>
	<h3>{product.name}</h3>
	<div class="item-info">
		<span>Amount: {product.amount}</span>
		<span>Cost: {product.price}</span>
	</div>
</li>

<style>
	@import '/static/styles/shopStyles/cart.scss';
</style>
