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
        validate: {
            validator: () => Promise.resolve(false),
            message: 'Email validation failed'
        }
    },
    thoughts: {

    }
})

// following validation code from mongoosejs docs:
let error;
try {
  await user.validate();
} catch (err) {
  error = err;
}
assert.ok(error);
assert.equal(error.errors['name'].message, 'Oops!');
assert.equal(error.errors['email'].message, 'Email validation failed');


const User = model('User', UserSchema);

module.exports = User;