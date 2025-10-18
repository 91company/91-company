// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDXoxbtTv2E4_0AtRCmPqmcagHhV4UAOMY",
  authDomain: "company-83930.firebaseapp.com",
  projectId: "company-83930",
  storageBucket: "company-83930.appspot.com",
  messagingSenderId: "369546639953",
  appId: "1:369546639953:web:dfbb575fffb2a687165670",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Join Us Form
const joinForm = document.getElementById("joinForm");
joinForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "join_requests"), {
      name: document.getElementById("joinName").value,
      email: document.getElementById("joinEmail").value,
      message: document.getElementById("joinMessage").value,
      timestamp: new Date()
    });
    alert("Join request submitted successfully!");
    joinForm.reset();
  } catch (err) {
    alert("Error submitting form: " + err);
  }
});

// Girls Help Form
const helpForm = document.getElementById("helpForm");
helpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "girls_help"), {
      name: document.getElementById("helpName").value,
      issue: document.getElementById("helpIssue").value,
      timestamp: new Date()
    });
    alert("Help request submitted successfully!");
    helpForm.reset();
  } catch (err) {
    alert("Error submitting form: " + err);
  }
});
