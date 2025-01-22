import admin from "firebase-admin"; // Use import instead of require
import serviceAccount from "./tikkify-click-firebase-adminsdk-fbsvc-1ec7c69cde.json" assert {type: 'json'} ; // Use import for service account
import { assets } from "../../Frontend/assets/asset.js"; // Ensure this path is correct

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function uploadAssets() {
  try {
    // Reference the document where assets will be uploaded
    const appDataRef = db.collection("appData").doc("assets");

    // Upload the assets object
    await appDataRef.set(assets);

    console.log("Assets uploaded successfully!");
  } catch (error) {
    console.error("Error uploading assets:", error);
  }
}

uploadAssets();
