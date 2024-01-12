const express = require("express");
const router = express.Router();
const Note = require("../models/homeModel");
const Note2 = require("../models/lifeModel");
const Match = require("../models/matchModel");
const User = require("../models/userModel");


router.route("/home_add").post((req, res) => {
    const { title, gender, horoscope } = req.body;
  
    if (!title || !gender || !horoscope) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    const newNote = new Note({
      title,
      gender,
      horoscope,
    });
  
    newNote.save()
      .then(() => res.status(201).json({ message: "Data saved successfully" }))
      .catch((error) => res.status(500).json({ error: "Internal Server Error" }));
  });
  
  router.route("/matchData").post(async (req, res) => {
    try {
      const { traits } = req.body;
  
      // Create a new instance of the Match model with the provided traits
      const newMatchdata = new Match({ traits });
  
      // Save the new instance to the database
      await newMatchdata.save();
  
      // Respond with a success message
      res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
      // Log the error and respond with an error message
      console.error('Error saving match data:', error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  router.route("/userData").post(async (req, res) => {
    try {
      const { traits } = req.body;
  
      // Create a new instance of the Match model with the provided traits
      const newMatchdata = new User({ traits });
  
      // Save the new instance to the database
      await newMatchdata.save();
  
      // Respond with a success message
      res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
      // Log the error and respond with an error message
      console.error('Error saving user data:', error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  router.route("/life").post((req, res) => {
    const { life } = req.body;
  
    if (!life) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    const newNote2 = new Note2({
        life,
    });
  
    newNote2.save()
      .then(() => res.status(201).json({ message: "Data life saved successfully" }))
      .catch((error) => res.status(500).json({ error: "Internal Server Error" }));
  });
  
module.exports = router