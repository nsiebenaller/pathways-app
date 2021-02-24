const Axios = require("axios");
const db = require("../models");

module.exports = (router) => {
    router.route("/Player").get(async (req, res) => {
        const limit = req.query.limit || 50;
        const offset = req.query.offset || 0;

        const players = await db.Player.findAll({ limit, offset });
        res.json(players);
    });
};
