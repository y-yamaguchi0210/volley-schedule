/* スマホ通知の受信(Firebase Cloud Messaging)。アプリを閉じていても、この処理が通知を表示します。 */
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD3Lz7C46Z3cKG0bHKt_eqTv4qerxgcGWg",
  authDomain: "wings-yoteihyo.firebaseapp.com",
  projectId: "wings-yoteihyo",
  storageBucket: "wings-yoteihyo.firebasestorage.app",
  messagingSenderId: "766912111492",
  appId: "1:766912111492:web:4449455fd0a4d7fbe433d1"
});
firebase.messaging();
