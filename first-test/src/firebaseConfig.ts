// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAfEKEBQPGBUEPVWj-TamccOBfSScNpxXw',
  authDomain: 'jenkinstest-a8dfc.firebaseapp.com',
  projectId: 'jenkinstest-a8dfc',
  storageBucket: 'jenkinstest-a8dfc.appspot.com',
  messagingSenderId: '599238345609',
  appId: '1:599238345609:web:d104ae60091f0e3e2c9758',
  measurementId: 'G-D2W11DSV8L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
