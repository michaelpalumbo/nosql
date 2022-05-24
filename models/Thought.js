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
    reactions: {
        // TODO Array of nested documents created with the reactionSchema
    }
})

//  TODO Schema Settings: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;