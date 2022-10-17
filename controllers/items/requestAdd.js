const { User, newItemRequest } = require('../../models/index.js');
const { connection } = require('../../config/database/conn.js');

const requestAdd = async (req, res, next) => {
    try {
        await newItemRequest.create({
            itemName: req.body.itemName,
            itemURL: req.body.itemURL,
            category: req.body.category,
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
        res.send(err)
    }
}

module.exports = {
    requestAdd
}