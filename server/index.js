require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require("path");

//config database
const connect = require("./database/index");
connect();

//config cors
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}
app.use(cors(corsOptions));

//config middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//config routing
const userRoute = require("./routes/userRoute");
const sectorRoute = require("./routes/sectorRoute");
app.use("/", userRoute);
app.use("/", sectorRoute);

//for vercel route testing
app.get("/", (req,res) => {
    res.json("Hello");
});

app.use(express.static(path.resolve(__dirname, "../client", "build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`server running on port number : ${PORT}`);
});