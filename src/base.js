import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyASlM5frJuXr1UwHQzN9a5DdzoZgvh18l8",
  authDomain: "catch-of-the-day-3bca7.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-3bca7.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
