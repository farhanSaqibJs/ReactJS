const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@jeder01.loicv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then( () => {

    const PORT = process.env.PORT || 3002;

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

    app.get("/", (req, res) => res.send("Server is up and running"));


}).catch((err) => console.log({err}));

app.use("/", require("./routes/userRoutes"));
