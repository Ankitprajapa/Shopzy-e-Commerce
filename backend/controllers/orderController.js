const Order = require("../model/Order");

const sendEmail = require("../utils/sendEmail");

// Create New Order
const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address, paymentId } = req.body;

    // Validate order data
    if (!items || items.length === 0 || !totalAmount || !address || !paymentId) {
      return res.status(400).json({
        message: "Invalid order data",
      });
    }

    // Create order
    const order = new Order({
      user: req.user._id,
      items,
      totalAmount,
      address,
      paymentId,
    });

    // Save order
    await order.save();

    // Email message
    const message = `Dear ${req.user.name},

Thank you for your order!

Your order has been successfully created with the following details:

Order ID: ${order._id}
Total Amount: ${totalAmount}
Shipping Address: ${address.street}, ${address.city}

We will notify you once your order is shipped.

Thank you for shopping with us!`;

    // Send email
    await sendEmail(
      req.user.email,
      "Order Created",
      message
    );

    // Send response
    res.status(201).json({
      message: "Order created successfully",
      order,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating order",
      error: error.message,
    });
  }
};

const myOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id
    }).populate("items.productId", "name price");

    res.json(orders);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching orders",
      error: error.message
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email");

    res.json(orders);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching orders",
      error: error.message
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (order) {
      order.status = status;

      await order.save();

      res.json({
        message: "Order status updated",
        order
      });

    } else {
      res.status(404).json({
        message: "Order not found"
      });
    }

  } catch (error) {
    res.status(500).json({
      message: "Error updating order status",
      error: error.message
    });
  }
};


module.exports = { createOrder ,myOrders,getOrders,updateOrderStatus};