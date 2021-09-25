const router = require("express").Router()
const crypto = require("crypto-js")
const User = require("../models/user")
const Verify = require("../verifyToken")
const {verify} = require("jsonwebtoken");
// Update

router.put("/:id", Verify, async (req, res) => {
    if ((req.user.id === req.params.id) || req.user.isAdmin) {
        console.log(req.user.isAdmin);
        if (req.body.password) {
            req.body.password = crypto.AES.encrypt(req.body.password, process.env.SecretKEY).toString();
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body});
            res.status(400).json(updatedUser)

        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("Bad Request")
    }
})

// Delete

router.delete("/:id", Verify, async (req, res) => {
    if ((req.user.id === req.params.id) || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(400).json("User has been deleted");
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("Bad Request")
    }
})

// Get

router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...info} = user._doc;
        res.status(400).json(info);
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get All
router.get("/", Verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const userList = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
            res.status(400).json(userList);
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("Bad Request")
    }
})

// Monthly User Stats

router.get("/stats", async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);
    const months = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December "];

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: {$month: "$createdAt"}
                },
            }, {
                $group: {
                    _id: "$month",
                    total: {$sum: 1}
                }
            }]
        )
        res.status(400).json(data)
    } catch (err) {
        res.status(500).json(err)
    }

})
module.exports = router