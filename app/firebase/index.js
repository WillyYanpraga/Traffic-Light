import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyCWxRegSoozLx6vvL91P37CU7x_o0_q9qc",
  authDomain: "login-b50fb.firebaseapp.com",
  databaseURL: "https://login-b50fb.firebaseio.com",
  projectId: "login-b50fb",
  storageBucket: "",
  messagingSenderId: "910434843412"
};
if (!firebase.apps.length) {
  firebaseinit = firebase.initializeApp(config);
}

export default firebaseinit;
