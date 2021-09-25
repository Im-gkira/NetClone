const router = require("express").Router()
const Movie = require("../models/movie")
const Verify = require("../verifyToken")
const {verify} = require("jsonwebtoken");
let _ = require('lodash');

// Update
router.post("/", Verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body)
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json("Movie Added")
        } catch (err) {
            res.status(406).json(err)
        }
    } else {
        res.status(403).json("Admin Rights Required")
    }
})

// Update
router.put("/:id", Verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json("Movie Updated")
        } catch (err) {
            res.status(401).json(err)
        }
    } else {
        res.status(403).json("Admin Rights Required")
    }
})

//Delete

router.delete("/:id", Verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json("Movie Deleted")
        } catch (err) {
            res.status(401).json(err)
        }
    } else {
        res.status(403).json("Admin Rights Required")
    }
})

// Get

router.get("/find/:id", Verify, async (req, res) => {
    try {
        const getMovie = await Movie.findById(req.params.id)
        res.status(200).json(getMovie)
    } catch (err) {
        res.status(401).json(err)
    }
})

// Get Random

router.get("/random", Verify, async (req, res) => {
    const type = _.lowerCase(req.query.type?req.query.type:"Movie");
    console.log(type)
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([{$match: {isSeries: true}},
                {$sample: {size: 1}}]);

        } else {
            movie = await Movie.aggregate([{$match: {isSeries: false}},
                {$sample: {size: 1}}]);
        }
        res.status(200).json(movie)
    } catch (err) {
        res.status(401).json(err)
    }
})

// Get All
router.get("/findAll", Verify, async (req, res) => {
    try {
        const allMovie = await Movie.find()
        res.status(200).json(allMovie.reverse())
    } catch (err) {
        res.status(401).json(err)
    }
})

module.exports = router