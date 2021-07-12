const mongoose = require("mongoose");
const { Schema } = mongoose;

const LikedVideoSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, ref: "User" },
    videos: [
      {
        _id: { type: Schema.Types.ObjectId, ref: "Video" },
      },
    ],
  },
  { timestamps: true }
);

const LikedVideo = mongoose.model("liked-video", LikedVideoSchema);

module.exports = { LikedVideo };