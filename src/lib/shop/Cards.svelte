<script lang="ts">
	export let item = { id: '', name: '', img: '', cost: 0 };
	import { base } from '$app/paths';
</script>

<div class="card">
	<a href={base + '/shop/' + item.name.toLowerCase()}>
		<img src={item.img} alt="coffee" />
		<div class="description">
			<svg
				width="275"
				height="240"
				viewBox="0 0 275 240"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_178_27)">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M243.571 240C260.929 240 275 227.72 275 212.571V0C267.798 71.4286 183.988 110.286 112.619 100C55.5238 91.7714 13.75 116.762 0 130.286V240H243.571Z"
						fill="url(#paint0_linear_178_27)"
					/>
				</g>
				<defs>
					<linearGradient
						id="paint0_linear_178_27"
						x1="-53.6905"
						y1="29.7143"
						x2="272.833"
						y2="310.826"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#35C66B" />
						<stop offset="1" stop-color="#237249" stop-opacity="0.55" />
					</linearGradient>
					<clipPath id="clip0_178_27">
						<rect width="275" height="240" fill="white" />
					</clipPath>
				</defs>
			</svg>

			<div class="info">
				<h3>{item.name}</h3>
				<p>{item.cost}$</p>
			</div>
		</div>
	</a>
</div>

<style>
	@import '/static/styles/shopStyles/_cards.scss';
</style>
