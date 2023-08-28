const mongoose = require("mongoose");
const moment = require("moment/moment");

let postsSchema = new mongoose.Schema(
  {
    messageAuthor: { type: String, required: true },
    messageText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (createAt) {
        return moment(createAt).format("MMMM Do YYYY");
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postsSchema);
