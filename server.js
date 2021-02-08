const express = require("express");
const app = express();


app.get("/", (req,res) => {
    res.send("Hello there!!")
})

app.listen("2000", () => {
    console.log("server is running at the port 8080");
})