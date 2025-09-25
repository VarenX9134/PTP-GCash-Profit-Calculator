// netlify/functions/update-pets.js
import { getStore } from "@netlify/blobs";

export async function handler(event) {
  try {
    const store = getStore("pets");
    const data = JSON.parse(event.body);

    // Save the entire pets object
    await store.set("pets-data", data);

    return { statusCode: 200, body: "Saved successfully" };
  } catch (err) {
    return { statusCode: 500, body: "Error saving pets" };
  }
}
