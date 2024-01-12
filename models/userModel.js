const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  traits: {
    type: [String],
    required: true,
    validate: {
      validator: (traits) => traits.length === 5,
      message: 'The traits array must have exactly 5 elements.',
    },
  },
});


const User = mongoose.model("User", userSchema);

module.exports = User;
