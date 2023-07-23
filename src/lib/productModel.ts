export class Product {
	name = '';
	price = '';
	volume = '';
	amount = 1;

	constructor({ prodName = '', prodPrice = '', prodVolume = '' } = {}) {
		this.name = prodName;
		this.price = prodPrice;
		this.volume = prodVolume;
	}

	increaseAmount = () => {
		this.amount += 1;
	};

	decreaseAmount = () => {
		this.amount -= 1;
	};

	sameAs = (product: Product): boolean => {
		if (
			this.name === product.name &&
			this.price === product.price &&
			this.volume === product.volume
		) {
			if (this.price === product.price) {
				return true;
			}
		}
		return false;
	};
}

export const createProductModel = (prodName: string, prodPrice: string, prodVolume: string) => {
	const name = document.querySelector(prodName);
	const price = document.querySelector(prodPrice);
	const volume = document.querySelector(prodVolume);
	if (!name || !price || !volume) return;

	// console.log(name.textContent);
	// console.log(price.textContent);
	// console.log(volume.textContent);

	return new Product({
		prodName: name.textContent?.toString() ?? '',
		prodPrice: price.textContent?.toString() ?? '',
		prodVolume: volume.textContent?.toString() ?? ''
	});
};
