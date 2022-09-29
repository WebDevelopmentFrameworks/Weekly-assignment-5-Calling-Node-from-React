const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 3001;

app.get("/", (req,res) => {
    res.status(200).json({message: "Node server is responding"})
})

app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`)
})