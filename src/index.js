import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDgUfeJ88HJZ5afR6aRCYx9iYPPCFF9ECU",
    authDomain: "proyectoux-e87dc.firebaseapp.com",
    databaseURL: "https://proyectoux-e87dc.firebaseio.com",
    projectId: "proyectoux-e87dc",
    storageBucket: "",
    messagingSenderId: "584660492111",
    appId: "1:584660492111:web:987d11223fd3b6f5702f3a"
    
})
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
