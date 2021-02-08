const express = require("express");
const app = express();


app.get("/hello", (req,res) => {
    res.send("Hello there!!")
})

app.listen("8080", () => {
    console.log("server is running at the port 8080");
})