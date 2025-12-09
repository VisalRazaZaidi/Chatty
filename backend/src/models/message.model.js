import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId, // this id come from mongdb User document
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId, // this id come from mongdb User document
      ref: "User",
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String, // String because we get the image url from cloudinary
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
