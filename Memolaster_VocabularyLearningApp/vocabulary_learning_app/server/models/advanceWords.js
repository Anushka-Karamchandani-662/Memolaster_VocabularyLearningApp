const mongoose = require('mongoose')
const {Schema}= mongoose;

const advanceSchema=new Schema({
    Word:String,
    Meaning:String,
    Usage:String,
    Part:String,
    Synonyms:String,
    Mneumonics:String,
});

module.exports=mongoose.model('advanced',advanceSchema);
