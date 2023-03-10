const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your name.']
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address.'],
        unique: 'Another account has been registered with this email, please try again with different email.'
    },
    password: {
        type: String,
        required: [true, 'Password is required to register your account.']
    },
    userImageURL: {
        type: String  // store profile picture URL in the database instead of the image file
    },
    favoriteItems: [{
        itemID: {
            type: ObjectId,
            ref: 'Item'
        }
    }],
    recentlyBoughtItems: [{
        itemID: { type: ObjectId, ref: 'Item' },
        quantity: { type: Number, min: 1 },
        expiryType: { type: String, enum: ['Use by', 'Best before', 'Not available'] },
        expiryDate: { type: Date },
        timeToUse: { type: Date }
    }],
    recentSearchedItems: [{
        type: ObjectId,
        ref: 'Item'
    }],
    shoppingList: [{
        itemID: { type: ObjectId, ref: 'Item' },
        quantity: { type: Number, min: 1 },
        expiryType: { type: String, enum: ['Use by', 'Best before', 'Not available'] },
        expiryDate: { type: Date },
        timeToUse: { type: Date }
    }]
});

userSchema.plugin(beautifyUnique);

const User = mongoose.model('User', userSchema)

module.exports = {
    User
};