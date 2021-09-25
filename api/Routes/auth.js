const router = require("express").Router()
const crypto = require("crypto-js")
const User = require("../models/user")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")
//Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: crypto.AES.encrypt(req.body.password, process.env.SecretKEY).toString(),
    });
    try {
        const users = await newUser.save();
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }

});

//LOGIN

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json("Invalid Credentials");
        let bytes = crypto.AES.decrypt(user.password, process.env.SecretKEY);
        const originalPassword = bytes.toString(crypto.enc.Utf8);
        originalPassword === req.body.password && res.status(401).json("Invalid Credentials");
        const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.SecretKEY, {expiresIn: "4d"});
        const {password, ...info} = user._doc;
        res.status(200).json({...info,accessToken})
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;