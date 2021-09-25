const express = require("express");
const mongoose = require("mongoose");
// const {mongo} = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users")
const movieRoute = require("./Routes/movies")
const listRoute = require("./Routes/list")
const bodyParser = require("body-parser")
dotenv.config();


let connectDB = async function () {
    await mongoose.connect(process.env.MONGO_url)
        .then(() => {
            console.log("db initiated");
        })
        .catch((err) => {
            console.log(err)
        })
}
connectDB();

const app = express()
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/list",listRoute);
app.listen(3000, () => {
    console.log("sever started")
})