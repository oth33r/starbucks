import { Cart } from './cartModel';
import type { Product } from './productModel';

export const cart = new Cart();

export const addToCart = (product: Product) => {
	if (cart.isOverflowed()) return;
	cart.addToCart(product);
};

export const removeFromCart = (product: Product) => {
	cart.removeFromCart(product);
};

export const saveToFirebase = () => {
	cart.saveToFirebase();
};

export const getTotalPrice = () => {
  return cart.getTotalPrice();
}
