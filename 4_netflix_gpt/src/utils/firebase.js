// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChd96sR-haFiLBUBFTypHQtj_7W_YCWig',
  authDomain: 'netflixgpt-6ad4e.firebaseapp.com',
  projectId: 'netflixgpt-6ad4e',
  storageBucket: 'netflixgpt-6ad4e.firebasestorage.app',
  messagingSenderId: '544357577168',
  appId: '1:544357577168:web:193f19b14abbc8011d09d5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
