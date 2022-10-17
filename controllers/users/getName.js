/* Find a user in the database based on the ID or other params
 * THIS FUNCTION HAS NO USE AT THE MOMENT (19/09/2022)
 */
const { User } = require('../../models/users.js');
const { db } = require('../../config/database');

const getName = async (req, res, next) => {
    try {
        const thisUser = await User.findById(req.user._id);
        res.send(thisUser.firstName);
    }
    catch (err) {
        console.log('User not found');
    }
}

module.exports = { getName };