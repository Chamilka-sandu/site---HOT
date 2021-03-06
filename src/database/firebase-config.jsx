import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

//-------------------Hands-of-Thambapanni (old)

// const firebaseConfig = {
//   apiKey: "AIzaSyDORl_IzISIEAP9LnTBQPYr054gHMGxuLc",
//   authDomain: "handsofthambapanni.firebaseapp.com",
//   projectId: "handsofthambapanni",
//   storageBucket: "handsofthambapanni.appspot.com",
//   messagingSenderId: "288518372281",
//   appId: "1:288518372281:web:06e7bbc520569d4b479468",
//   measurementId: "G-WBYJ8BJ2VF",
// };

//----------------------HOT-Rott (new)

// const firebaseConfig = {
//   apiKey: "AIzaSyDt-P74LG6y5fUjjPDPf_m4EWm5uQ537SU",
//   authDomain: "hot-rot.firebaseapp.com",
//   projectId: "hot-rot",
//   storageBucket: "hot-rot.appspot.com",
//   messagingSenderId: "44108530183",
//   appId: "1:44108530183:web:24f75cb56b7d85ebb460a2",
//   measurementId: "G-V7VPCE8YV9",
// };

//------------------- Firebase Practice

// const firebaseConfig = {
//   apiKey: "AIzaSyDg_Lk5ws_LGlV0gpWlHXSiCx5R5D-O4Es",
//   authDomain: "fir-practice-2a561.firebaseapp.com",
//   databaseURL: "https://fir-practice-2a561-default-rtdb.firebaseio.com",
//   projectId: "fir-practice-2a561",
//   storageBucket: "fir-practice-2a561.appspot.com",
//   messagingSenderId: "582710292760",
//   appId: "1:582710292760:web:1bef98dc27bcdd5384ee6d",
//   measurementId: "G-9YL2PEC4QP"
// };

//------------------Login
// const firebaseConfig = {
//   apiKey: "AIzaSyCdAX6YD4vW4RP6Miz4huhkgRxXz4y2HGM",
//   authDomain: "login-700f7.firebaseapp.com",
//   projectId: "login-700f7",
//   storageBucket: "login-700f7.appspot.com",
//   messagingSenderId: "736559781326",
//   appId: "1:736559781326:web:1ff3fe214968fbb703c79f",
//   measurementId: "G-WM9R9TDW49"
// };

//----------newhot
// const firebaseConfig = {
//   apiKey: "AIzaSyB1sdOCQ-206jWC-z0sK-8bcXLz3iSpx-0",
//   authDomain: "new-hot-3aa9e.firebaseapp.com",
//   projectId: "new-hot-3aa9e",
//   storageBucket: "new-hot-3aa9e.appspot.com",
//   messagingSenderId: "193849896162",
//   appId: "1:193849896162:web:c07e90696bb0e5a53302bb"
// };

//-------Thambapanni
// const firebaseConfig = {
//   apiKey: "AIzaSyBIhMZJkkiykUXmy4lLgdmPx1CtetCbvTM",
//   authDomain: "thambapanni-1c8f2.firebaseapp.com",
//   projectId: "thambapanni-1c8f2",
//   storageBucket: "thambapanni-1c8f2.appspot.com",
//   messagingSenderId: "577185973919",
//   appId: "1:577185973919:web:b69a0f05916de843a6c4aa"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCdUv16G_4ZbAifx_v6ZuaEQQ4KOYSvXFk",
  authDomain: "thambapanni-rot.firebaseapp.com",
  projectId: "thambapanni-rot",
  storageBucket: "thambapanni-rot.appspot.com",
  messagingSenderId: "1060492448644",
  appId: "1:1060492448644:web:43d36484af70a478c003d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const firebase = getFirebase(app);
export const storage = getStorage(app);

export default app;
