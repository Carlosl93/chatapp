import firebase from "firebase";

const config = {
    apiKey: "AIzaSyD3pYJame2kupDk6VdmbmPoN0whT4bjKWM",
    authDomain: "chatapp-3f2ec.firebaseapp.com",
    databaseURL: "https://chatapp-3f2ec.firebaseio.com",
    projectId: "chatapp-3f2ec",
    storageBucket: "",
    messagingSenderId: "472083773953"
  };

firebase.initializeApp(config);
const database = firebase.database();

export default database;