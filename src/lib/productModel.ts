export class Product {
	name: string;
	price = 0.0;
	volume: string;
	amount = 1;

	constructor({ prodName = '', prodPrice = 0.0, prodVolume = '' } = {}) {
		this.name = prodName;
		this.price = prodPrice;
		this.volume = prodVolume;
	}

	increaseAmount = () => {
		this.amount++;
	};

	decreaseAmount = () => {
		this.amount--;
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
		prodPrice: Number(price.textContent) ?? 0.0,
		prodVolume: volume.textContent?.toString() ?? ''
	});
};
