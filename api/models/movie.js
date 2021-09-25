const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
        title: {type: String, required: true, unique: true},
        description: {type: String, required: true},
        poster :{type:String,required:true},
        titleImg :{type:String},
        smallPoster:{type:String},
        trailerVid:{type:String},
        duration:{type:Number},
        year:{type:String},
        genre:{type:String},
        isSeries:{type:Boolean,default:false}
    },
    {timestamps: true})

module.exports = mongoose.model("Movie", movieSchema);


