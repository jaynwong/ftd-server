const { User, Item } = require('../../models');
const { connection } = require('../../config/database/conn.js');

const getShoppingList = async (req, res, next) => {
    try {
        const thisUser = await User.findById(req.user._id);
        res.send(thisUser.shoppingList);
    }
    catch (err) {
        res.status(500)
        res.send(`An error has been occured. Please try again later.`);
        console.log(err);
    }
}

module.exports = { getShoppingList }