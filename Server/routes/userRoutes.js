const express = require("express");

const router = express.Router();
const User = require("../userModal/userModal")
 
//Get and send data from database
router.route("/user").post((req, res) => {
    const name  = req.body.name;
    const email  = req.body.email;
    const contactNumber  = req.body.contactNumber;
    const password  = req.body.password;
    const confPassword  = req.body.confPassword;

    const newUser = new User({
        name, email, contactNumber, password, confPassword
    });

    newUser.save();
})

module.exports = router;