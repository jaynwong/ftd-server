const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;

const newItemRequestSchema = new Schema({
    itemName: {
        type: String,
        required: [true, 'Item name cannot be empty']
    },
    itemURL: {
        type: String
    },
    category: {
        type: String,
        enum: ['Fresh Produce', 'Dairy', 'Meat & Poultry', 'Pantry', 'Alcohol']
    },
    reason: {
        type: String,
        enum: ['Item not listed', 'Different brand', 'Different size', 'Other']
    }
});

const removeItemRequestSchema = new Schema({
    itemName: {
        type: String,
        required: [true, 'Item name cannot be empty']
    },
    itemURL: {
        type: String
    },
    reason: {
        type: String,
        enum: ['Wrong details', 'Item is discontinued', 'Other'] 
    }
});

const newItemRequest = mongoose.model('NewItemRequest', newItemRequestSchema);
const removeItemRequest = mongoose.model('RemoveItemRequest', removeItemRequestSchema);

module.exports = {
    newItemRequest,
    removeItemRequest
}