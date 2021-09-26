import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA3-PmEcmcA1_AVMqHbfy5ysXeEqzZRzjg",
    authDomain: "mychat-1d787.firebaseapp.com",
    projectId: "mychat-1d787",
    storageBucket: "mychat-1d787.appspot.com",
    messagingSenderId: "742269529489",
    appId: "1:742269529489:web:80560b50105f10992fbe30"
}).auth()

//:/Users/User/Desktop/mychat-course-master/node_modules/firebase/app/dist/app/index