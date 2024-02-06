require("dotenv").config();
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
