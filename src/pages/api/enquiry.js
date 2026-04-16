import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_DB;

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri);

  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, mobile, university, language } = req.body;

    if (!email || !mobile) {
      return res.status(400).json({ message: "Email and mobile are required" });
    }

    const { db } = await connectToDatabase();

    const result = await db.collection("website_enquires").insertOne({
      email,
      mobile,
      university_interest: university || "General Search",
      language_preference: language || "en",
      source: "siu_website",
      created_at: new Date(),
    });

    return res.status(200).json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("MONGODB ENQUIRY ERROR:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
