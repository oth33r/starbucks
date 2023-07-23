<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="contacts" id="contacts">
	<div class="container">
		<div class="info-wrapper">
			<h1 class="title">Our <br /><span class="contacts">Contacts</span></h1>
			<p class="description">
				Have time to buy the most harmonious <br />drinks in the new Starbucks coffee and
				<br />don't forget about the discount!
			</p>
			<div class="tg">
				<i class="fa-brands fa-instagram fa-2xl" style="color: #237249;" /><span>@supercoffee</span>
			</div>
			<div class="phone">
				<i class="fa-solid fa-phone-volume fa-xl" style="color: #237249" /><span
					>+7-999-999-99-99</span
				>
			</div>
		</div>
		<div class="photo">
			<img src="{base}/img/cafe.png" alt="Cafe" />
			<svg
				width="354"
				height="522"
				viewBox="0 0 354 522"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M354 0.506958H107.781L0.0833475 129.896V521.107H354V0.506958Z" fill="#237249" />
			</svg>
		</div>
	</div>
</div>

<style>
	@import '/styles/_contacts.scss';
</style>
