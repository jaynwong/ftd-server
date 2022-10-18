const { addFavorite } = require('./addFavorite.js')
const { addItem } = require('./addItem.js');
const { getAllItems } = require('./getAllItems.js');
const { getFavorites } = require('./getFavorites.js');
const { getOneItem } = require('./getOneItem.js');
const { getRecentlyBought } = require('./getRecentlyBought.js');
const { getShoppingList } = require('./getShoppingList.js');
const { removeItem } = require('./removeItem.js');
const { requestAdd } = require('./requestAdd.js');
const { requestRemove } = require('./requestRemove.js');

module.exports = {
    addFavorite,
    addItem,
    getAllItems,
    getFavorites,
    getOneItem,
    getRecentlyBought,
    getShoppingList,
    removeItem,
    requestAdd,
    requestRemove
};