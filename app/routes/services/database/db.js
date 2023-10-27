import mongoose from "mongoose";

const dbUrl = process.env.MONGOSTRING;
const database = process.env.DATABASE;

let db;

async function connect() {
  if (db) return db;
  try {
    db = await mongoose.connect(`${dbUrl}/${database}`);
    console.log(`database connected ${dbUrl}/${database}`);
  } catch (error) {
    console.log("Unable to connect database");
  }
}
connect();

export { dbUrl, database };
