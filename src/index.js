const express=require("express")
const cors=require("cors")
const connection=require("./config/connectin")
const router=require("./routers/bank.router")

connection();
const app=express();

require("dotenv").config();

app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    methods: ["OPTIONS", "POST", "GET", "PUT", "DELETE"],
}));

let port=4000;

app.use(router);
app.listen(port, () => {
    console.log("server is running on: ", port);
  });