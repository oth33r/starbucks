<script lang="ts">
	export let data;
	import { items } from '$lib/card';
	const item = items.find((item) => item.name.toLowerCase() == data.name);
	import { base } from '$app/paths';
</script>

<div class="description">
	<div class="container">
		<img src="{base}/{item?.img}" alt="" />
		<div class="information">
			<div class="description">
				<h1>{item?.name}</h1>
				<p>{item?.description}</p>
			</div>
			<div class="order">
				<div class="cost">
					<span class="new">{item?.cost}$</span><span class="old">10$</span>
				</div>
				<button>Order a coffee</button>
			</div>
		</div>
	</div>
</div>

<style>
	.description .container {
		display: flex;
	}

	img {
		width: 425px;
	}

	.description .container .information {
		max-width: 500px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	span {
		font-size: 32px;
		color: #d9d9d9;
	}

	.cost {
		margin-bottom: 10px;
	}

	button {
		background-image: linear-gradient(210deg, rgb(35, 114, 73), rgb(53, 198, 107));
		width: 250px;
		height: 50px;
	}

	button:hover {
		background-image: linear-gradient(210deg, rgb(21, 80, 50), rgb(42, 164, 87));
	}

	.old {
		font-size: 24px;
		margin-left: 10px;
		color: #f3a44f;
		text-decoration: line-through;
	}

	@media (max-width: 550px) {
		.description .container {
			flex-direction: column;
		}

		img {
			width: 300px;
		}
	}
</style>
