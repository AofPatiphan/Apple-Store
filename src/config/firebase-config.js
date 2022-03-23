import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyA76LdhJjxn3sA0hiwOido08TU2HPh9C_A',
    authDomain: 'wow-shop-99e05.firebaseapp.com',
    projectId: 'wow-shop-99e05',
    storageBucket: 'wow-shop-99e05.appspot.com',
    messagingSenderId: '490071344612',
    appId: '1:490071344612:web:21789d985db6dfd9ef73f1',
    measurementId: 'G-DTJ8KBBF07',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authenication = getAuth(app);
