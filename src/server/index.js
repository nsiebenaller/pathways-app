require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const fileUpload = require("express-fileupload");
const buildRouter = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

// Configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static("public"));
app.use(express.static("dist"));
app.use(cookieParser());

// Create Router
const router = express.Router();

// Middleware to use for all requests
router.use((req, res, next) => {
    // Default files map to avoid null/undefined
    if (!req.files) req.files = {};
    next();
});

// Register router
buildRouter(router);
app.use("/api", router);

// Serve index.html on everything else
app.get("*", (req, res) => {
    const index = path.join(__dirname, "..", "..", "public", "index.html");
    res.sendFile(index);
});

// Start server
app.listen(port);
console.log(`App listening on ${port}`);
