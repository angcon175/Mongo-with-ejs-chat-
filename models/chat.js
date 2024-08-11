const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    require: true,
  },
  to: {
    type: String,
    require: true,
  },
  msg: {
    type: String,
    maxlength: 50,
    require: true,
  },
  created_at: {
    type: Date,
  },
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
