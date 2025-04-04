import mongoose from "mongoose";

const connectToMongoDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to Mongo_DB");
    } catch (error) {
        console.log("Error");
    }
};

export default connectToMongoDB;
