const { User, Item } = require('../../models');
const { connection } = require('../../config/database/conn.js');

const getFavorites = async (req, res, next) => {
    try {
        var thisUserFavorites = await User.findById(req.user._id, 'favorites').lean();
        var favoritesArray = [];
        // Loop through user favorites to get every favorite item's objectID
        for (const itemID of thisUserFavorites) {
            thisItem = await Item.findById(itemID);
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