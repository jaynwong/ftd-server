const { addFavorite } = require('./addFavorite.js')
const { addItem } = require('./addItem.js');
const { checkIfFavourite } = require('./checkIfFavourite');
const { checkInCart } = require('./checkInCart');
const { getAllItems } = require('./getAllItems.js');
const { getCategoryItems } = require('./getCategoryItems');
const { getFavorites } = require('./getFavorites.js');
const { getOneItem } = require('./getOneItem.js');
const { getRecentlyBought } = require('./getRecentlyBought.js');
const { getShoppingList } = require('./getShoppingList.js');
const { removeFavorite } = require('./removeFavorite')
const { removeItem } = require('./removeItem.js');
const { requestAdd } = require('./requestAdd.js');
const { requestRemove } = require('./requestRemove.js');

module.exports = {
    addFavorite,
    addItem,
    checkIfFavourite,
    checkInCart,
    getAllItems,
    getCategoryItems,
    getFavorites,
    getOneItem,
    getRecentlyBought,
    getShoppingList,
    removeFavorite,
    removeItem,
    requestAdd,
    requestRemove
};