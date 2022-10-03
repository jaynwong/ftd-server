const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId;

const categorySchema = new Schema({
    categoryName: String
});

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
    categoryID: [{
        type: ObjectId,
        ref: 'Category'
    }]
});

const Category = mongoose.model('Category', categorySchema);
const Item = mongoose.model('Item', itemSchema);

module.exports = {
    Category,
    Item
};