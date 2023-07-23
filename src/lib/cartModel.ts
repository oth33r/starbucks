import type { Product } from '$lib/productModel';
import { saveToFirebase } from './firebase';

export class Cart {
	products: Product[] = [];

	// adds a product to the cart. If the product already exists in the cart => increases its amount
	addToCart = (product: Product) => {
		if (this.hasElement(product)) {
			console.log('already exists');
		} else {
			console.log('doesnt exists');
		}

		let amountIncreased = false;

		this.products.forEach((item, index) => {
			if (item.sameAs(product)) {
				this.products[index].increaseAmount();
				console.log('product amount got increased!');
				amountIncreased = true;
			}
		});
		if (!amountIncreased) {
			this.products.push(product);
			console.log('a new product created!');
		}
	};

	// decreases the amount of product given. If amount is less than 1 => removes the element from the cart
	removeFromCart = (product: Product) => {
		this.products.forEach((item, index) => {
			if (item === product) {
				this.products[index].decreaseAmount();
				if (this.products[index].amount == 0) {
					this.products.splice(index);
				}
			}
		});
	};

	saveToFirebase = () => {
		saveToFirebase(this);
	};

	hasElement = (product: Product): boolean => {
		this.products.forEach((item) => {
			if (product.sameAs(item)) {
				return true;
			}
		});
		return false;
	};

	isOverflowed = () => {
		if (this.products.length < 9) {
			return false;
		}
		return true;
	};
}
