const mongoose = require("mongoose");


const messageSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: true
    },

    subject: {
      type: String,
      required: true
    },
    message: {
      type: String,
    },

    email: {
        type: String,
        required: true
      },
   

    date:  {
      type: Date,
      default: new Date()
    },

    
  },
  { timestamps: true }
);

module.exports = mongoose.model("message", messageSchema);
