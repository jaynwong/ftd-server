const express = require('express');
const itemController = require('../controllers/items');

const itemRouter = express.Router();

// Get all the items from the database to be displayed on the website (catalogue)
itemRouter.get('/', (req, res, next) => itemController.getAllItems(req, res, next));

// Get all items in a user's shopping list
itemRouter.get('/shoppingList', (req, res, next) => itemController.getShoppingList(req, res, next));

// Add an item to a user's shopping list
itemRouter.post('/addItem', (req, res, next) => itemController.addItem(req, res, next));

// Remove an item from a user's shopping list
itemRouter.post('/removeItem', (req, res, next) => itemController.removeItem(req, res, next));

module.exports = { itemRouter }