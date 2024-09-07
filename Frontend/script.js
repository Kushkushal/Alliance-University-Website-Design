//Firebase Connection

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyAVSZ2acNGecN_5WtjwZTp-Pe7xGqp5KaQ",
    authDomain: "contact-dc24f.firebaseapp.com",
    projectId: "contact-dc24f",
    storageBucket: "contact-dc24f.appspot.com",
    messagingSenderId: "34288303399",
    appId: "1:34288303399:web:bacf70ac1cf59c0f557d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();

    // Save data to Firebase
    set(ref(db, 'user/' + document.getElementById("username").value), {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }).then(() => {
        // Alert user


        // Clear input fields
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }).catch((error) => {
        // Handle errors
        console.error("Error saving to Firebase: ", error);
    });
});