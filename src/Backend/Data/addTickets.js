import admin from "firebase-admin"; // Using import
import serviceAccount from "./tikkify-click-firebase-adminsdk-fbsvc-1ec7c69cde.json" assert {type: 'json'}; // Import service account correctly
import { tickets } from "../../Frontend/assets/asset.js"; // Correct path to your assets file

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Function to upload tickets
async function uploadTickets() {
  try {
    const ticketsCollection = db.collection("tickets");

    // Loop through each ticket and add it as a document
    for (const ticket of tickets) {
      const ticketDoc = ticketsCollection.doc(ticket._id); // Use _id as document ID
      await ticketDoc.set(ticket);
    }

    console.log("Tickets uploaded successfully!");
  } catch (error) {
    console.error("Error uploading tickets:", error);
  }
}

uploadTickets();
