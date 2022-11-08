const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;

const itemSchema = new Schema({
    itemName: {
        type: String, required: true
    },
    itemDescription: {
        type: String
    },
    itemImageURL: {
        type: String
    },
    itemURL: {
        type: String
    },
    category: {
        type: String
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = {
    Item
};