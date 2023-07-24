const { connection } = require("./database/connection");
const express = require("express");
const cors = require("cors");

// running app
console.log("Node app running")


//Connect to the database 
connection();

//Create node server
const app = express();
const port = 3900;

//Configure the cors
app.use(cors({
    origin: ["https://blog-mern-front-wheat.vercel.app/"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
    optionsSuccessStatus: 200
}));

app.get("/", (req,res) =>{
    res.json("Hello");
})


//Read and convert the body to an js object
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//create routes
const articleRoutes = require("./routes/article");

app.use("/api", articleRoutes);

//create server and listen request
app.listen(port, () => {
    console.log("Server running in port: "+port);
})