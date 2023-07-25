<script lang="ts" src="https://kit.fontawesome.com/1fd736d5c6.js" crossorigin="anonymous">
	import { base } from '$app/paths';
	import { addToCart } from '$lib/cart';
	import { createProductModel, Product } from '$lib/productModel';
	import '@fortawesome/fontawesome-free/css/all.css';
</script>

<div class="products">
	<div class="container">
		<div class="info-wrapper" id="product">
			<h1 class="title">New Our <br /><span class="products">Products</span></h1>
			<p class="products-info">
				Have time to buy the most harmonious drinks <br />in the new Starbucks coffee and don't
				forget <br />about the discount! Starbucks coffee and <br />don't forget about the discount!
			</p>
		</div>
		<div class="list">
			<ul class="items">
				<li class="item item1" id="item1">
					<img src="{base}/img/brown.png" alt="Coffee" />
					<h3 id="item1-name">Americano</h3>
					<p>An invigorating <br />hot Americano</p>
					<div class="wrapper">
						<h4 id="item1-price">3.49</h4>
						<p id="item1-volume">330 ml</p>
					</div>
					<button
						class="add-cart"
						on:click|preventDefault={() => {
							addToCart(
								createProductModel('#item1-name', '#item1-price', '#item1-volume') ?? new Product()
							);
						}}>Add to cart</button
					>
				</li>
				<li class="item item2" id="item2">
					<img src="{base}/img/yellow.png" alt="Coffee" />
					<h3 id="item2-name">Latte</h3>
					<p>Twice as much foam as in Cappuccino</p>
					<div class="wrapper">
						<h4 id="item2-price">3.99</h4>
						<p id="item2-volume">330 ml</p>
					</div>
					<button
						class="add-cart"
						on:click|preventDefault={() => {
							addToCart(
								createProductModel('#item2-name', '#item2-price', '#item2-volume') ?? new Product()
							);
						}}>Add to cart</button
					>
				</li>
				<li class="item item3" id="item3">
					<img src="{base}/img/green.png" alt="Coffee" />
					<h3 id="item3-name">Cappuccino</h3>
					<p>Airy foam, espresso and hot milk - that's our Cappuccino</p>
					<div class="wrapper">
						<h4 id="item3-price">5.49</h4>
						<p id="item3-volume">330 ml</p>
					</div>
					<button
						class="add-cart"
						on:click|preventDefault={() => {
							addToCart(
								createProductModel('#item3-name', '#item3-price', '#item3-volume') ?? new Product()
							);
						}}>Add to cart</button
					>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	@import '/styles/_products.scss';
</style>
