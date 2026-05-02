import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// ✅ CREATE ORDER AFTER PAYMENT
export const createOrder = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    // ✅ Validate payment
    if (!razorpay_order_id || !razorpay_payment_id) {
      return res.status(400).json({ message: "Payment details missing" });
    }

    // 🔹 Get user's cart
    const cart = await Cart.findOne({ user: req.user.id })
      .populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // 🔥 Remove invalid products
    const validItems = cart.items.filter(i => i.product);

    if (validItems.length === 0) {
      return res.status(400).json({ message: "No valid products in cart" });
    }

    // 🔥 Clean cart (remove broken items)
    cart.items = validItems;
    await cart.save();

    // 🔹 Build order items
    const items = validItems.map((i) => ({
      product: i.product._id,
      name: i.product.name,
      price: i.product.price,
      quantity: i.quantity,
    }));

    // 🔹 Calculate total
    const subtotal = items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );

    const totalPrice = subtotal + 50;

    // 🔴 Stock check + update
    for (const i of validItems) {
      if (i.product.countInStock < i.quantity) {
        return res.status(400).json({
          message: `${i.product.name} is out of stock`,
        });
      }

      await Product.findByIdAndUpdate(i.product._id, {
        $inc: { countInStock: -i.quantity },
      });
    }

    // 🔥 Create order
    const order = await Order.create({
      user: req.user.id,
      items,
      totalPrice,
      paymentMethod: "Razorpay",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      signature: razorpay_signature,
      status: "Placed",
    });

    // 🔥 Clear cart
    cart.items = [];
    await cart.save();

    res.status(201).json(order);

  } catch (error) {
    console.error("ORDER ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET MY ORDERS
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET SINGLE ORDER
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("items.product");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ UPDATE ORDER STATUS (ADMIN)
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};