const { Schema, model } = require('mongoose');
const moment = require('moment');
const Reaction = require('./Reaction.js');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.set('toJSON', { getters: true });

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', userSchema);

module.exports = Thought;
