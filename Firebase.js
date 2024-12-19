/**
 * Firebase.js
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// 認証機能
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// データベース
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiEQTsG3X1g2CAla5W0DrbpCEqXd1conA",
  authDomain: "mystudyblog-a196c.firebaseapp.com",
  projectId: "mystudyblog-a196c",
  storageBucket: "mystudyblog-a196c.firebasestorage.app",
  messagingSenderId: "952339381158",
  appId: "1:952339381158:web:fde03c6cdc89f9342b6d67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 認証機能全般
const auth = getAuth(app);
// Googleを使った認証機能を追加
const provider = new GoogleAuthProvider();
// データベース機能の追加
const db = getFirestore(app);

// 出力
export { auth, provider, db };