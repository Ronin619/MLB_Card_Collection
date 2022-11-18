// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgVc_CAieKFu4ibdRaIJqiGSfgeHWMj98",
  authDomain: "mlb-card-collection.firebaseapp.com",
  projectId: "mlb-card-collection",
  storageBucket: "mlb-card-collection.appspot.com",
  messagingSenderId: "856243029528",
  appId: "1:856243029528:web:22c497c91f47c93326e56d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

const AJudgeRef = ref(storage, 'AJudge.jpeg');
const APujolsRef = ref(storage, 'AJPujols.jpeg');
const ISuzukiRef = ref(storage, 'ISuzuki.jpeg');
const JAltuveRef = ref(storage, 'JAltuve.jpeg');
const SOhtaniRef = ref(storage, 'SOhtani.jpeg');

const judgePic = getDownloadURL(ref(storage, 'AJudge.jpeg'))
  .then((url) => {
    // This can be downloaded directly:
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = (event) => {
    //   const blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();
    console.log(url);
  })
  .catch((error) => {
    console.error(error);
  });
  console.log(judgePic());