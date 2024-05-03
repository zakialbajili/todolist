import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from "./routes.js"
import dotenv from "dotenv"
dotenv.config({path:'./.env'})
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get('',async(req, res)=>{
    res.status(200).json({
        "message":"Welome to Todolist API"
    });
});
routes(app)
app.listen(port,()=>{
    console.log(`Your Application Run on http://localhost:${port}`);
});