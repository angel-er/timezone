require("dotenv").config("../.env");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "../public")));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})