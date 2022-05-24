const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // TODO set up email validation in mongoose (or use a regex?)
        // validate: {
        //     validator: () => Promise.resolve(false),
        //     message: 'Email validation failed'
        // }
    },
    // TODO Array of _id values referencing the Thought model
    thoughts: {

    },
    friends: {
        // TODO Array of _id values referencing the User model (self-reference)
    }
})

//  TODO Schema Settings: Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

// following validation code from mongoosejs docs:
// let error;
// try {
//   await user.validate();
// } catch (err) {
//   error = err;
// }
// assert.ok(error);
// assert.equal(error.errors['name'].message, 'Oops!');
// assert.equal(error.errors['email'].message, 'Email validation failed');


const User = model('User', UserSchema);

module.exports = User;