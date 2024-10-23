const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')
const app = express();

//middleware
app.use(express.json());

app.use(cors()); // Cho phép CORS

const studentRouter = require("./routes/StudentRoutes");
app.use("/", studentRouter);

app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
});

module.exports = app;

const mongoose = require("mongoose");
dotenv.config();
const queryString = process.env.MONGODB_URI|| "mongodb+srv://dobalam:dobalam-it4409@lamdb-it4409.ybiwz.mongodb.net/College?retryWrites=true&w=majority&appName=lamdb-it4409";

//configure mongoose
mongoose.connect( queryString, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected!', queryString))
.catch(err => console.log('MongoDB connection error:', err.message));