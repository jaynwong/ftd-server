const { User, Item } = require('../../models');
const { connection } = require('../../config/database/conn.js');

const removeItem = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user._id, {
            $pull: {
                shoppingList: { itemID: req.body.itemID }
            }
        }, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                res.send(`${req.body.itemID} has been removed from shopping list`);
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { removeItem }