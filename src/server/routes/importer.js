const db = require("../models");
const fs = require("fs");

module.exports = (router) => {
    router.route("/Upload").post(async (req, res) => {
        const { csv } = req.files;
        const path = "./src/server/tmp/tmp-upload.csv";

        console.log("Saving file...");
        fs.writeFileSync(path, csv.data);
        console.log("Saved file.");

        console.log("Reading file...");
        const buff = fs.readFileSync(path, { encoding: "utf8" });
        console.log("Read file.");

        console.log("Analyzing file...");
        // Load field names
        let fieldNames = [];
        const rows = buff.split("\n");
        rows[0].split(",").forEach((fieldName, index) => {
            if (index === 0) return fieldNames.push("firstName");
            if (index === 1) return fieldNames.push("lastName");
            if (index === 2) return fieldNames.push("preferredName");
            fieldNames.push(fieldName);
        });
        rows.shift();
        // Create players
        const players = [];
        rows.forEach((row) => {
            const cells = row.split(",");
            if (cells.length < 3) return;
            const player = { data: {} };
            cells.forEach((value, index) => {
                if (index === 0) return (player["firstName"] = value);
                if (index === 1) return (player["lastName"] = value);
                if (index === 2) return (player["preferredName"] = value);
                player.data[fieldNames[index]] = value;
            });
            players.push(player);
        });
        console.log("Analyzed File.");

        console.log(`-- Found ${fieldNames.length} Unique Fields`);
        console.log(`-- Found ${players.length} Players`);

        console.log("Loading players into database...");
        await db.Player.bulkCreate(players);
        console.log("Loaded players into database.");

        console.log("Cleaning up file...");
        fs.unlinkSync(path);
        console.log("Cleaned file.");

        res.json({ success: true, messages: [] });
    });
};
