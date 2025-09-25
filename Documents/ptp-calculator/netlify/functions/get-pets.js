// netlify/functions/get-pets.js
import { getStore } from "@netlify/blobs";

export async function handler() {
  try {
    const store = getStore("pets"); // "pets" is your blob storage bucket
    const pets = await store.get("pets-data", { type: "json" });

    return {
      statusCode: 200,
      body: JSON.stringify(pets || {}), // return empty object if nothing saved
    };
  } catch (err) {
    return { statusCode: 500, body: "Error fetching pets" };
  }
}
