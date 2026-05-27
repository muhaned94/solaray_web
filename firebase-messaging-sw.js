importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBVOpr0vMtQmxtxvXYU1zG9XI6Vusm_CpI",
  authDomain: "solarcenter-1bcf1.firebaseapp.com",
  projectId: "solarcenter-1bcf1",
  storageBucket: "solarcenter-1bcf1.firebasestorage.app",
  messagingSenderId: "848219320090",
  appId: "1:848219320090:web:fb4e0868a8cf79e49cc6a3",
  measurementId: "G-18HYY33SX4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((message) => {
  console.log("Background message received:", message);
});
