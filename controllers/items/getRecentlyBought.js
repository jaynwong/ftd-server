const { User, Item } = require('../../models');
const { connection } = require('../../config/database/conn.js');

const getRecentlyBought = async (req, res, next) => {
    try {
        const thisUser = await User.findById(req.user._id);
        var recentlyBoughtArray = [];
        // Loop through user RecentlyBought to get every favorite item's objectID
        for (const itemID of thisUser.recentlyBoughtItems) {
            thisItem = await Item.findById(itemID);
            recentlyBoughtArray.push(thisItem);
        }
        res.send(recentlyBoughtArray);
    }
    catch (err) {
        res.status(500)
        res.send(`An error has been occured. Please try again later.`);
        console.log(err);
    }
}

module.exports = { getRecentlyBought }