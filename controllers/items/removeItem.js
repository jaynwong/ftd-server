const { User, Item } = require('../../models');
const { connection } = require('../../config/database/conn.js');

const removeItem = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user._id, {
            $pull: {
                shoppingList: {
                    itemID: req.body.itemID
                }
            }
        })
        .exec('save')
        .then(user => {
            console.log(user);
            res.status(200);
            res.send(`${req.body.itemID} has been removed from shopping list`);
            next();
        });
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.send(`Something bad happened. Please try again.`);
    }
}

module.exports = { removeItem }