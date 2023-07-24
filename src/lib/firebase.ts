import { initializeApp } from 'firebase/app';
import 'firebase/functions';
import { getDatabase, ref, update } from 'firebase/database';
import type { Cart } from './cartModel';

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

	cart.products.update((products) => {
		products.forEach((item, index) => {
			update(ref(database, '/orders/' + orderID + '/item-' + index), {
				name: item.name,
				price: item.price,
				volume: item.volume,
				amount: item.amount
			});
		});
		return products;
	});
};
