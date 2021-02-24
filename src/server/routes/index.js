const importer = require("./importer");
const player = require("./player");
const security = require("./security");

module.exports = (router) => {
    importer(router);
    player(router);
    security(router);
};
