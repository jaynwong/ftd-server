const { User, Item } = require('../../models');
const { connection } = require('../../config/database/conn.js');

const getOneItem = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.id);
        res.send(item);
    }
    catch (err) {
        res.status(500);
        res.send(`An error has been occured. Please try again later.`);
        console.log(err);
    }
}

module.exports = { getOneItem }