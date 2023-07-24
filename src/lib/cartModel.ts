import type { Product } from '$lib/productModel';
import { get, writable } from 'svelte/store';
import { saveToFirebase } from './firebase';

export class Cart {
	products = writable<Product[]>([]);

	// adds a product to the cart. If the product already exists in the cart => increases its amount
	addToCart = (product: Product) => {
		if (this.hasElement(product)) {
			console.log('already exists');
		} else {
			console.log('doesnt exists');
		}

		let amountIncreased = false;

		this.products.update((products) => {
			products.forEach((item, index) => {
				if (item.sameAs(product)) {
					products[index].increaseAmount();
					console.log('product amount got increased!');
					amountIncreased = true;
				}
			});
			if (!amountIncreased) {
				products = [...products, product];
				console.log('a new product created!');
			}
			return products;
		});
	};

	// decreases the amount of product given. If amount is less than 1 => removes the element from the cart
	removeFromCart = (product: Product) => {
		this.products.update((products) => {
			products.forEach((item, index) => {
				if (item === product) {
					products[index].decreaseAmount();
					if (products[index].amount == 0) {
						products.splice(index);
					}
				}
			});

			return products;
		});
	};

	saveToFirebase = () => {
		saveToFirebase(this);
	};

	hasElement = (product: Product): boolean => {
		const $products = get(this.products);
		return $products.some((item) => product.sameAs(item));
	};

	isOverflowed = () => {
		const $products = get(this.products);
		if ($products.length < 9) {
			return false;
		}
		return true;
	};

  getTotalPrice = () => {
    const $products = get(this.products);
    let totalCost = 0.00;
    $products.forEach((item) => {
      totalCost += item.price;
    });

    return totalCost;
  }
}
