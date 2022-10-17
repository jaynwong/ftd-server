const { User, Item } = require('../../models');
const { connection } = require('../../config/database/conn.js');

const getAllItems = async (req, res, next) => {
    try {
        const items = await Item.find({}).lean();
        res.send(items);
    }
    catch (err) {
        res.status(500);
        res.send(`An error has been occured. Please try again later.`);
        console.log(err);
    }
}

module.exports = { getAllItems }