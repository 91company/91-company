// Firebase App + Firestore via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase configuration (your project)
const firebaseConfig = {
  apiKey: "AIzaSyDXoxbtTv2E4_0AtRCmPqmcagHhV4UAOMY",
  authDomain: "company-83930.firebaseapp.com",
  projectId: "company-83930",
  storageBucket: "company-83930.firebasestorage.app",
  messagingSenderId: "369546639953",
  appId: "1:369546639953:web:dfbb575fffb2a687165670",
  measurementId: "G-EZ739F6CF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ---- Join Us Form ----
const joinForm = document.getElementById("joinForm");
if (joinForm) {
  joinForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("joinName").value;
    const email = document.getElementById("joinEmail").value;
    const message = document.getElementById("joinMessage").value;

    try {
      await addDoc(collection(db, "join_requests"), {
        name,
        email,
        message,
        timestamp: serverTimestamp()
      });
      alert("✅ Thank you for joining! We’ll contact you soon.");
      joinForm.reset();
    } catch (error) {
      console.error("Error saving join request:", error);
      alert("❌ Something went wrong. Try again later.");
    }
  });
}

// ---- Girls Help Form ----
const helpForm = document.getElementById("helpForm");
if (helpForm) {
  helpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("helpName").value;
    const issue = document.getElementById("helpIssue").value;

    try {
      await addDoc(collection(db, "girls_help"), {
        name,
        issue,
        timestamp: serverTimestamp()
      });
      alert("✅ Your message has been sent. We’ll reach out soon.");
      helpForm.reset();
    } catch (error) {
      console.error("Error saving girls help request:", error);
      alert("❌ Something went wrong. Try again later.");
    }
  });
}
