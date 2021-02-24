const bcrypt = require("bcryptjs");

const saltRounds = 10;

function compare(text, hash) {
    return new Promise((resolve) => {
        bcrypt.compare(text, hash, function (_err, result) {
            resolve(result);
        });
    });
}
function encrypt(text) {
    return new Promise((resolve) => {
        bcrypt.hash(text, saltRounds, function (err, hash) {
            resolve(hash);
        });
    });
}

module.exports = {
    compare,
    encrypt,
};
