const { User, Item } = require('../../models');
const { connection } = require('../../config/database/conn.js');

const getFavorites = async (req, res, next) => {
    try {
        const thisUser = await User.findById(req.user._id);
        var favoritesArray = [];
        // Loop through user favorites to get every favorite item's objectID
        for (const item of thisUser.favoriteItems) {
            thisItem = await Item.findById(item.itemID);
            favoritesArray.push(thisItem);
        }
        res.send(favoritesArray);
    }
    catch (err) {
        res.status(500)
        res.send(`An error has been occured. Please try again later.`);
        console.log(err);
    }
}

module.exports = { getFavorites }