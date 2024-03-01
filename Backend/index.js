require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/UserModel");
const bcrypt = require("bcrypt");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL);

app.post("/payment", async (req, res) => {
  try {
    const { amount } = req.body;
    console.log(amount);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "INR",
      payment_method_types: ["card"],
    });
    const clientSecret = paymentIntent.client_secret;
    console.log(clientSecret);
    res.json({
      clientSecret,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUserExists = await User.findOne({ email: email });

    if (isUserExists) {
      return res.status(400).json({ error: "user already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        email,
        password: hashedPassword,
      });
      const savedUser = await newUser.save();
      console.log("User created successfully:", savedUser.email);
      res.status(201).json(savedUser);
    }
  } catch (err) {
    res.status(500).json({ err: "error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email: email });
    console.log(user.email, user.password);
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.status(200).json({ message: "User verified" });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
