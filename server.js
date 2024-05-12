import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRouter.js'
import dotenv from "dotenv";
import path from "path";

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'./build')))

//rest api
app.use("*", function(req, res){
    res.sendFile(path.join(__dirname,'./build/index.html'
    ));
  });

//port
const PORT = process.env.PORT || 8080;


//routes
app.use("/api/v1/",foodRouter)


//run listen
app.listen(PORT, () => {
    // console.log(
    //   `Server Running on ${process.env.DEV_MODE} mode on ${PORT}`
    // );
  });
  