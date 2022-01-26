const { Schema, Types, model } = require('mongoose')
const reactionSchema = require('./Reaction');

// const reactionSchema = new Schema(
//     {
//       reactionId: {
//           type: Schema.Types.ObjectId,
//           default: () => new Types.ObjectId()
//       },
//       reactionBody: {
//       //todo: code here
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 1,
//       maxlength: 280
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now,
//         //todo: Add getter method to format the timestamp on query
//       },
//       username: {
//           type: String,
//           required: true
//       },
//     },
//     {
//       toJSON: {
//         getters: true,
//         virtuals: true,
//       },
//       id: false,
//     }
//   );

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
      type: String,
      required: true,
      ref: 'user'
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //todo: Add getter method to format the timestamp on query
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})


module.exports = Thought;
