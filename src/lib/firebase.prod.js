import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCYWWHAXi8zZjQPGGgEixolmBFfCFfBMAo",
  authDomain: "netflix-2219f.firebaseapp.com",
  projectId: "netflix-2219f",
  storageBucket: "netflix-2219f.appspot.com",
  messagingSenderId: "473153618537",
  appId: "1:473153618537:web:62872ab862841e99d5d8f8",
};

const firebase = initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
