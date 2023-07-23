export class Product {
	name = '';
	price = '';
	volume = '';

	constructor({ prodName = '', prodPrice = '', prodVolume = '' } = {}) {
		this.name = prodName;
		this.price = prodPrice;
		this.volume = prodVolume;
	}
}

export const createProductModel = (prodName: string, prodPrice: string, prodVolume: string) => {
	const name = document.querySelector(prodName);
	const price = document.querySelector(prodPrice);
	const volume = document.querySelector(prodVolume);
	if (!name || !price || !volume) return;

	console.log(name.textContent);
	console.log(price.textContent);
	console.log(volume.textContent);

	return new Product({
		prodName: name.toString(),
		prodPrice: price.toString(),
		prodVolume: volume.toString()
	}); //name, price, volume);
};
