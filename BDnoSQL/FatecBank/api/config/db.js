import { MongoClient } from "mongodb";
import { config } from "dotenv";

config();

const {MONGODB_URI, MONGODB_DB} = process.env

let client
async function connectToDatabase(){
    if (!client){
        client = new MongoClient(MONGODB_URI);
        await client.connect();
        console.log("🎄 Connected successfully to server");
    }
    return client
}

export {connectToDatabase, MONGODB_DB}