<script lang="ts">
	import type { Product } from './productModel';
	import { cart } from '$lib/cart';

	export let product: Product;
</script>

<li>
	<h3>{product.name}</h3>
	<div class="item-info">
		<span>Amount: {product.amount}</span>
		<span>Cost: {product.price}$</span>
		<div class="add_more">
			<button
				on:click|preventDefault={() => {
					cart.addToCart(product);
				}}>+</button
			>
			<button
				on:click|preventDefault={() => {
					cart.removeFromCart(product);
				}}>-</button
			>
		</div>
	</div>
</li>

<style>
	@import '/static/styles/shopStyles/cart.scss';
</style>
