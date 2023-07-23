<script lang="ts">
	import { base } from '$app/paths';

	import { scrollToElement } from '$lib/scroll';
</script>

<div class="welcome" id="homepage">
	<div class="container">
		<div class="info">
			<h1>New Cafe <br />by <span class="starbucks">StarBucks</span></h1>
			<p class="info-p">
				Have time to buy the most harmonious drinks in the <br />new Starbucks coffee and don't
				forget about the discount!
			</p>
			<form action="{base}/shop" class="more-btn">
				<a href="{base}/" on:click|preventDefault={() => scrollToElement('#product')}>
					<button type="submit" class="btn select">Select a coffee</button>
				</a>
				<button class="btn more">More</button>
			</form>

			<div class="achievments">
				<div class="users">
					<h2>9k+</h2>
					<p>Premium <br />Users</p>
				</div>
				<div class="customer">
					<h2>2k+</h2>
					<p>Happy <br />Customer</p>
				</div>
				<div class="awards">
					<h2>28+</h2>
					<p>Awards <br />Winning</p>
				</div>
			</div>
		</div>

		<img src="{base}/img/main-coffee.png" alt="Coffee" />
	</div>
</div>

<style>
	@import '/styles/_welcome.scss';
</style>
