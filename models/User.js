const { Schema, Types, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// create user schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, "I'd like you to enter a valid email, please."]
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought',
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

const User = model('user', userSchema);

userSchema.virtual('friendsCount').get(function(){
    return this.friends.length
})

module.exports = User;
 