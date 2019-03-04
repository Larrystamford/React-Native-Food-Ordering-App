import Firebase from 'firebase';


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBPFRQOUXFY8CS-kHUtkSNBXtf_gmOQpeU",
    authDomain: "malamen-b1e04.firebaseapp.com",
    databaseURL: "https://malamen-b1e04.firebaseio.com",
    projectId: "malamen-b1e04",
    storageBucket: "malamen-b1e04.appspot.com",
    messagingSenderId: "508438171528"
  };

  let app = Firebase.initializeApp(config);
  export const db = app.database();