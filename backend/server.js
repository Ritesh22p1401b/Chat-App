import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "../mongo_db/connect_mongo_db.js";


const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();


app.use(express.json());// to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);



// app.get("/",(req,res)=>{
//     res.send("Hello World!!!");
// });


app.listen(PORT,() =>{
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});
