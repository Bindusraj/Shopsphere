import Razorpay from "razorpay";

export const createOrder = async (req, res) => {
  try {
    // ✅ Initialize INSIDE function
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    res.json(order);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
console.log("RAZORPAY KEY:", process.env.RAZORPAY_KEY_ID);