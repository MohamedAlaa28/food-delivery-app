import {getApp , getApps , initializeApp} from 'firebase/app';
import{getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDnSBHV8HHeYd-P5E4lHmVJgnEkGzQIN_Y",
    authDomain: "restaurantapp-99f16.firebaseapp.com",
    databaseURL: "https://restaurantapp-99f16-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-99f16",
    storageBucket: "restaurantapp-99f16.appspot.com",
    messagingSenderId: "407562567524",
    appId: "1:407562567524:web:5e1d5fd777c4944f394471"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);


export {app, firestore , storage};