const express = require('express');
const itemController = require('../controllers/items');

const itemRouter = express.Router();

// Get all the items from the database to be displayed on the website (catalogue)
itemRouter.get('/', (req, res, next) => itemController.getAllItems(req, res, next));

// Get all items in a user's favorites
itemRouter.get('/favorites', (req, res, next) => itemController.getFavorites(req, res, next));

// Get all items recently bought by a user
itemRouter.get('/recentlyBought', (req, res, next) => itemController.getRecentlyBought(req, res, next));

// Get all items in a user's shopping list
itemRouter.get('/shoppingList', (req, res, next) => itemController.getShoppingList(req, res, next));

// Add an item to a user's shopping list
itemRouter.post('/addItem', (req, res, next) => itemController.addItem(req, res, next));

// Remove an item from a user's shopping list
itemRouter.post('/removeItem', (req, res, next) => itemController.removeItem(req, res, next));

// Request to add an item to the database
itemRouter.post('/requestAdd', (req, res, next) => itemController.requestAdd(req, res, next));

// Request to remove an item from the database
itemRouter.post('/requestRemove', (req, res, next) => itemController.requestRemove(req, res, next));

// Get the information of an item based on the id in the parameter
itemRouter.get('/getOneItem/:id', (req, res, next) => itemController.getOneItem(req, res, next));

module.exports = { itemRouter }