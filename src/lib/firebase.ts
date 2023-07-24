import { initializeApp } from 'firebase/app';
import 'firebase/functions';
import { getDatabase, ref, update } from 'firebase/database';
import type { Cart } from './cartModel';
import { cart } from './cart';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCdAS56wt9Tq8AExIMfwfVD7LI3chQtu8U',
	authDomain: 'front-project-133bc.firebaseapp.com',
	databaseURL: 'https://front-project-133bc-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'front-project-133bc',
	storageBucket: 'front-project-133bc.appspot.com',
	messagingSenderId: '242911610176',
	appId: '1:242911610176:web:97ac668cff28be7263a6a5',
	measurementId: 'G-S37TK8Y2QQ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app.name);
const database = getDatabase();

// generates a random number
const genrateRandomNumber = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// saves data to firebase realtime database
export const saveToFirebase = (cart: Cart) => {
	const orderID = genrateRandomNumber(1, 1000).toString();
	cart.products.forEach((item, index) => {
		update(ref(database, '/orders/' + orderID + '/item-' + index), {
			name: item.name,
			price: item.price,
			volume: item.volume,
			amount: item.amount
		});
	});
};

let tapCounter = 0;

// on:click|preventDefault={() => {showCartElements(cart);}}

// creates elements to be stored in the cart modal window
export const showCartElements = async () => {
	tapCounter += 1;

	if (tapCounter % 2 === 1) {
		//  && !(displayedCart === cart)) {
		cart.products.forEach((product) => {
			const product_li = document.createElement('li');
			product_li.textContent =
				'Name: ' + product.name + ' Price: ' + product.price + '$' + ' Volume: ' + product.volume + '  Amount: ' + product.amount;

			document.getElementById('cart-items')?.appendChild(product_li);
		});

		const orderButton = document.createElement('button');
		orderButton.id = 'order-button';
		orderButton.textContent = 'Order';

		orderButton.style.background = 'linear-gradient(210deg, rgba(35, 114, 73, 1), rgba(53, 198, 107, 1))';
		orderButton.style.width = '200px';
		orderButton.style.cursor = 'pointer';
		// orderButton.style.marginLeft = '50px';

		
		orderButton.onclick = () => saveToFirebase(cart);
		document.getElementById('cart-items')?.appendChild(orderButton);
		return orderButton.style;
	} else {
		await clearDisplayedCart();
	}
};

// clears elements from the modal window
const clearDisplayedCart = async () => {
	cart.products.forEach(() => {
		document.getElementById('cart-items')?.firstChild?.remove();
	});
	document.getElementById('order-button')?.remove();
};
