import type { Product } from '$lib/productModel';
import { saveToFirebase } from './firebase';

export class Cart {
	products: Product[] = [];

	addToCart = (product: Product) => {
		this.products.push(product);
	};

	removeFromCart = (product: Product) => {
		this.products.forEach((item, index) => {
			if (item === product) this.products.splice(index);
		});
	};

	saveToFirebase = () => {
		saveToFirebase(this);
	};
}
