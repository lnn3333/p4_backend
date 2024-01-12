const mongoose = require("mongoose");

const lifeSchema = {
    title:String,
}

const lifeData = mongoose.model("life", lifeSchema);

module.exports = lifeData;