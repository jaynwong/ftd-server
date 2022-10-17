const { User, removeItemRequest } = require('../../models/index.js');
const { connection } = require('../../config/database/conn.js');

const requestRemove = async (req, res, next) => {
    try {
        await removeItemRequest.create({
            itemName: req.body.itemName,
            itemURL: req.body.itemURL,
            reason: req.body.reason
        })
        .then(newRequest => {
            console.log(`${newRequest}`);
            res.send(`Your request has been submitted, please wait for approval!`);
            next();
        })
    }
    catch (err) {
        console.error(`Failed to add request: ${err}`);
        res.send(err);
    }
}

module.exports = {
    requestRemove
}