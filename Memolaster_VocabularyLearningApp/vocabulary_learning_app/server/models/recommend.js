const mongoose = require('mongoose')

const recommendSchema=new mongoose.Schema({
    Words:String
})

const RecommendModel=mongoose.model("recommend",recommendSchema)
module.exports=RecommendModel