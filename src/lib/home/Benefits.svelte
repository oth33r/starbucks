<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="benefits">
	<div class="container">
		<div class="items">
			<div class="item tasty">
				<div class="circle">
					<img src="{base}/img/heart.png" alt="Heart" />
				</div>
				<h3>Tasty</h3>
				<p>We have the most <br />delicious coffee</p>
			</div>
			<div class="item fast">
				<div class="circle">
					<img src="{base}/img/rocket.png" alt="Rocket" />
				</div>
				<h3>Fast</h3>
				<p>Our cafe will serve <br />you quickly</p>
			</div>
			<div class="item available">
				<div class="circle">
					<img src="{base}/img/money.png" alt="Money" />
				</div>
				<h3>Available</h3>
				<p>Cafe will serveat the <br />most pleasant prices</p>
			</div>
		</div>
	</div>
</div>

<style>
	@import '/styles/_benefits.scss';
</style>
