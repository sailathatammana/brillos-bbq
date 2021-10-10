import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBo2_FLUCN3w8a1WtkHkNC_ATkfmF0zxGo",
  authDomain: "brillos-bbq.firebaseapp.com",
  projectId: "brillos-bbq",
  storageBucket: "brillos-bbq.appspot.com",
  messagingSenderId: "628726400615",
  appId: "1:628726400615:web:d9b695332c3560d6b3b6c2",
};

const firebaseInstance = initializeApp(firebaseConfig);

export default firebaseInstance;
