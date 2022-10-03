const { User, Item } = require('../../models');
const { connection } = require('../../config/database/conn.js');

const addItem = async (req, res, next) => {
    try {
        var thisUser = await User.findById(req.user._id);
        var item = {
            itemID: req.body.itemID,
            quantity: req.body.quantity,
            expiryType: req.body.expiryType,
            expiryDate: req.body.expiryDate,
            timeToUse: req.body.timeToUse
        };
        thisUser.shoppingList.push(item);
        await thisUser.save()
            .then(user => {
                console.log(user);
                res.status(200);
                res.send(`${req.body.itemID} has been added to your shopping list`);
                next();
            })
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.send(`Something bad happened. Please try again.`);
    }
}

module.exports = { addItem }