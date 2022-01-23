const { Schema, Types } = require('mongoose');
const thoughtSchema = require('./Thought');

const thoughtSchema = new Schema(
  {
    reactionId: {
   //todo: code here
    },
    reactionBody: {
    //todo: code here
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


module.exports = thoughtSchema;
