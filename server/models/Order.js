import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  name: String,
  price: Number,
  quantity: Number,
});

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    items: [orderItemSchema],

    shippingAddress: {
      fullName: String,
      address: String,
      city: String,
      postalCode: String,
      country: String,
      phone: String,
    },

    // 🔥 PAYMENT DETAILS (NEW)
    paymentMethod: {
      type: String,
      default: "Razorpay",
    },

    paymentId: String,        // razorpay_payment_id
    orderId: String,          // razorpay_order_id
    signature: String,        // razorpay_signature

    // 🔥 PRICE
    totalPrice: Number,

    // 🔥 STATUS (UPDATED FLOW)
    status: {
      type: String,
      enum: ["Placed", "Paid", "Shipped", "Delivered"],
      default: "Placed", // after successful payment
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);