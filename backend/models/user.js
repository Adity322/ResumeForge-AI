import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,

  atsUsedFree: {
    type: Number,
    default: 0
  },

  credits: {
    atsRemaining: {
      type: Number,
      default: 0
    },
    downloadsRemaining: {
      type: Number,
      default: 0
    }
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);