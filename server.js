const express = require("express");
const app = express();


app.get("/", (req,res) => {
    res.send("Hello there!!")
})

const PORT = 2000;

app.listen(PORT, () => {
    console.log(`server is running at the port ${PORT}`);
})