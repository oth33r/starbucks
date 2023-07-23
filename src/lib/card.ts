declare class Items {
	id: string;
	name: string;
	cost: number;
	description: string;
	img: string;
	volume: string;
}

export const items: Items[] = [
	{
		id: '1',
		name: 'Cappuccino',
		img: '../img/brown.png',
		description:
			'A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam.',
		cost: 5.49,
		volume: '330 ml'
	},
	{
		id: '2',
		name: 'Latte',
		img: '../img/yellow.png',
		description:
			'Latte in English, is a coffee drink of Italian origin made with espresso and steamed milk. Variants include the chocolate-flavored mocha or replacing the coffee with another beverage base such as masala chai (spiced Indian tea), mate, matcha, turmeric or rooibos; alternatives to milk, such as soy milk or almond milk, are also used.',
		cost: 3.99,
		volume: '330 ml'
	},
	{
		id: '3',
		name: 'Americano',
		img: '../img/green.png',
		description:
			'Americano is a type of coffee drink prepared by diluting an espresso with hot water (typically 1:5), giving it a different flavor from traditionally brewed coffee. Its strength varies with the number of shots of espresso and amount of water added.',
		cost: 3.49,
		volume: '330 ml'
	},
	{
		id: '4',
		name: 'Espresso',
		img: '../img/green.png',
		description:
			'Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water (about 90 °C or 190 °F) is forced under 9–10 bars (900–1,000 kPa; 130–150 psi) of pressure through finely-ground coffee beans. ',
		cost: 6.99,
		volume: '330 ml'
	}
];
