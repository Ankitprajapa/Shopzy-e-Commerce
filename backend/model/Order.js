const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    // User who placed the order
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Products in the order
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
          min: 1,
        },

        // Product price at the time of purchase
        price: {
          type: Number,
          required: true,
        },
      },
    ],

    // Total amount of the order
    totalAmount: {
      type: Number,
      required: true,
    },

    // Delivery address
    address: {
      fullName: {
        type: String,
        required: true,
      },

      street: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },
    },

    // Payment ID
    paymentId: {
      type: String,
      required: true,
    },

    // Order status
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered"],
      default: "pending",
    },
  },

  // Automatically creates createdAt and updatedAt
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);