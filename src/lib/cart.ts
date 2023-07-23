import { Cart } from './cartModel';
import type { Product } from './productModel';

export const cart = new Cart();

export const addToCart = (product: Product) => {
	if (cart.products.length > 9) return;
	cart.addToCart(product);
	console.log(cart.products.length);
};

export const removeFromCart = (product: Product) => {
	cart.removeFromCart(product);
};

export const saveToFirebase = () => {
	cart.saveToFirebase();
};
