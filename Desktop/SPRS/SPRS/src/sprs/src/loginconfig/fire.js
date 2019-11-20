import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyACI6t0HrhopzbMFYVsY8VB6EVGwDKhyyw",
    authDomain: "sprs-90ce3.firebaseapp.com",
    databaseURL: "https://sprs-90ce3.firebaseio.com",
    projectId: "sprs-90ce3",
    storageBucket: "sprs-90ce3.appspot.com",
    messagingSenderId: "141591505342",
    appId: "1:141591505342:web:7f48bf5ffb742665b4f1ef",
    measurementId: "G-SEPRMNJT70"

}

const fire = firebase.initializeApp(config);
export default fire;