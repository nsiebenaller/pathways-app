const db = require("../models");
const {
    tokenName,
    checkToken,
    getToken,
    revokeToken,
    signToken,
} = require("../managers/jwtManager");
const { compare, encrypt } = require("../managers/bcryptManager");

module.exports = (router) => {
    router.route("/Login").post(async (req, res) => {
        const { email, password } = req.body;

        const response = { success: true, messages: [] };
        if (!email) {
            response.success = false;
            response.messages.push("'email' is a required field");
        }
        if (!password) {
            response.success = false;
            response.messages.push("'password' is a required field");
        }
        if (!response.success) return res.json(response);

        const user = await db.User.findOne({ where: { email } });
        if (!user) {
            response.success = false;
            response.messages.push("Cannot find user with email");
            return res.json(response);
        }

        const validCredentials = await compare(password, user.password);
        if (!validCredentials) {
            response.success = false;
            response.messages.push("Invalid password");
            return res.json(response);
        }

        const token = signToken({ id: user.id, email });
        res.cookie(tokenName, token);
        res.json(response);
    });
    router.route("/Check").get((req, res) => {
        const token = getToken(req);
        res.json({ success: !!token, messages: [] });
    });
    router.route("/Logout").get((req, res) => {
        revokeToken(req);
        res.clearCookie(tokenName);
        res.json({ success: true, messages: [] });
    });
    router.route("/Test/protected").get(checkToken, (req, res) => {
        res.json({ success: true, data: ["Pig", "Cow", "Duck"] });
    });
};
