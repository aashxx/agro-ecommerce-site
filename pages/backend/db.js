import mongoose from "mongoose";
const mongoURI = "mongodb+srv://tmohamedaashir:o4qUlWuoKBXh10nE@cluster0.qkgswfa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if(!mongoURI) {
    console.log("Please provide MONGO_URI");
}

let cachedDb = null;

const connectToMongo = async () => {
    if(cachedDb) {
        return cachedDb;
    }

    const db = await mongoose.connect(mongoURI, () => {
        console.log("Connected to db successfully!");
    });

    cachedDb = db;
    return db;
}

export default connectToMongo;