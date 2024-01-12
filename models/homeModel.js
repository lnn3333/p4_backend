const mongoose = require("mongoose");

const personalinfoSchema = {
    title:String,
    gender:String,
    horoscope:String
}

const personalData = mongoose.model("home", personalinfoSchema);

module.exports = personalData;