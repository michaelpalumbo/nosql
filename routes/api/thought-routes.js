const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller.js')

// GET all Thoughts and POST a Thought at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// GET Thought, PUT, DELETE at /api/thoughts/:id

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;