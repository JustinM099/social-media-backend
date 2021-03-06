const { Schema, Types, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
    //todo: code here
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //todo: Add getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);


module.exports = reactionSchema;
