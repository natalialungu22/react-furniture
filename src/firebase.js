import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAs8jTb8qpsoAfEOLTyPncRQBNjRxYeUL0',
    authDomain: 'react-authentication-23a2e.firebaseapp.com',
    projectId: 'react-authentication-23a2e',
    storageBucket: 'react-authentication-23a2e.appspot.com',
    messagingSenderId: '282819210862',
    appId: '1:282819210862:web:f85ea77807486ac619807f',
    measurementId: 'G-NETN1DR5ZP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


