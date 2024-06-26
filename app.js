const express = require("express");
const app = express();
const env = require("dotenv");
const { Error } = require("./middlewares/errors");
const { allRoutes } = require("./router/indexRoute");
const { default: mongoose } = require("mongoose");
const error = new Error()

env.config();
env.config({ path: ".env" });
const { PORT, DBURL } = process.env

mongoose.connect(DBURL).then(() => console.log("db connected")).catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res, next) => [
    res.send("server")
])
app.use(allRoutes)

app.use(error.notFoundError)
app.use(error.errorHandel)

app.listen(PORT, () => {
    console.log(`server runned on  http://localhost:${PORT}`)
})