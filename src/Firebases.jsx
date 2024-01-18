
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBXR8WZ8LzGwLtOhLWSsUba6idEI8lZg1w",
  authDomain: "todo-app-f5502.firebaseapp.com",
  databaseURL: "https://todo-app-f5502-default-rtdb.firebaseio.com",
  projectId: "todo-app-f5502",
  storageBucket: "todo-app-f5502.appspot.com",
  messagingSenderId: "85543515023",
  appId: "1:85543515023:web:b1f18a68fdaba45443d1fa",
  measurementId: "G-35YGC5210N"
};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB8Qwkewx0NRI_g3nLGbkV9xjHE_WRPR6Y",
//   authDomain: "pedro-82ff1.firebaseapp.com",
//   projectId: "pedro-82ff1",
//   storageBucket: "pedro-82ff1.appspot.com",
//   messagingSenderId: "818795570538",
//   appId: "1:818795570538:web:3599f742254c6f4ce7b113",
//   measurementId: "G-627D1SZPD3"
// };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();