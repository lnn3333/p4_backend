const mongoose = require("mongoose");


const matchSchema = new mongoose.Schema({
  traits: {
    type: [String],
    required: true,
    validate: {
      validator: (traits) => traits.length === 5,
      message: 'The traits array must have exactly 5 elements.',
    },
  },
});


const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
