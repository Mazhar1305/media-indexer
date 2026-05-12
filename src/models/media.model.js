// src/models/media.model.js
import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
  {


    size: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      default: "gallery",
    },

  }

);

export default mongoose.model("Media", mediaSchema);