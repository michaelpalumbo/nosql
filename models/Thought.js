const { Schema, model } = require('mongoose')

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: 
    [
        {
          type: Schema.Types.ObjectId,
          ref: 'Reaction'
        }
    ]
})

//  TODO Schema Settings: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;