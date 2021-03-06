const router = require("express").Router()
const List = require("../models/list")
const Verify = require("../verifyToken")
const Movie = require("../models/movie");

// Update
router.post("/", Verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body)
        try {
            const savedList = await newList.save();
            res.status(201).json("List Added")
        } catch (err) {
            res.status(406).json(err)
        }
    } else {
        res.status(403).json("Admin Rights Required")
    }
})

//Delete

router.delete("/:id", Verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id)
            res.status(200).json("List Deleted")
        } catch (err) {
            res.status(401).json(err)
        }
    } else {
        res.status(403).json("Admin Rights Required")
    }
})


// Get All

router.get("/", Verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = []
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([{$sample: {size: 10}}, {$match: {type: typeQuery, genre: genreQuery}}])
            } else {
                list = await List.aggregate([{$sample: {size: 10}}, {$match: {type: typeQuery}}])
            }
        } else {
            list = await List.aggregate([{$sample: {size: 10}}]);
        }
    } catch (err) {
        res.status(401).json(err)
    }
})


module.exports = router