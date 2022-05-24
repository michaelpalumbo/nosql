const { Thought } = require('../models');

const thoughtController = {
    // methods
    // get all thoughts
    //  GET /api/thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },
    // find a Thought by id
    // GET /api/thoughts/:id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id})
            .then(dbThoughtData => {
                // if no Thought found, send 404
                if(!dbThoughtData){
                    res.status(404).json({message: 'No thought found with this id!' });
                    return;
                } 
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    // create a Thought
    // POST /api/thoughts
    createThought({ body }, res){
        Thought.create(body)
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.status(400).json(err))
    },

    // update a Thought by id
    // PUT /api/thoughts/:id
    updateThought({ params, body}, res) {
        Thought.findOneAndUpdate({ _id: params.id}, body, { new: true})
            .then(dbThoughtData => {
                if (!dbThoughtData){
                    res.status(404).json({ message: 'no Thought found with this id'})
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.status(400).json(err))
    },
    // delete a Thought by id
    // DELETE /api/thoughts/:id
    deleteThought({ params}, res) {
        Thought.findOneAndDelete({ _id: params.id})
            .then(dbThoughtData => {
                if(!dbThoughtData){
                    res.status(404).json({ message: 'no Thought found with this id'})
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.status(404).json(err))
    },
    // /api/thoughts/:thoughtId/reactions

    // POST to create a reaction stored in a single thought's reactions array field

    // DELETE to pull and remove a reaction by the reaction's reactionId value
}

module.exports = thoughtController;