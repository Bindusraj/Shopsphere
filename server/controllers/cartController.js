import Cart from "../models/Cart.js";

// ✅ GET CART
export const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id })
      .populate("items.product");

    if (!cart) {
      cart = await Cart.create({ user: req.user.id, items: [] });
    }

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ ADD (increase)
export const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;

    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      cart = await Cart.create({ user: req.user.id, items: [] });
    }

    const item = cart.items.find(
      (i) => i.product.toString() === productId
    );

    if (item) {
      item.quantity += 1;
    } else {
      cart.items.push({ product: productId, quantity: 1 });
    }

    await cart.save();

    const updatedCart = await Cart.findOne({ user: req.user.id })
      .populate("items.product");

    res.json(updatedCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ DECREASE
export const decreaseQuantity = async (req, res) => {
  try {
    const { productId } = req.body;

    const cart = await Cart.findOne({ user: req.user.id });

    const item = cart.items.find(
      (i) => i.product.toString() === productId
    );

    if (item) {
      item.quantity -= 1;

      if (item.quantity <= 0) {
        cart.items = cart.items.filter(
          (i) => i.product.toString() !== productId
        );
      }
    }

    await cart.save();

    const updatedCart = await Cart.findOne({ user: req.user.id })
      .populate("items.product");

    res.json(updatedCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ REMOVE
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;

    const cart = await Cart.findOne({ user: req.user.id });

    cart.items = cart.items.filter(
      (i) => i.product.toString() !== productId
    );

    await cart.save();

    const updatedCart = await Cart.findOne({ user: req.user.id })
      .populate("items.product");

    res.json(updatedCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};