"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = process.env.PORT || 8080; // default port to listen
// Here we are configuring express to use body-parser as middle-ware.
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.post("/api/v1/parse", (req, res) => {
    const jsonData = {
        statusCode: 200,
        data: {
            firstName: "JOHN0000",
            lastName: "MICHAEL000",
            clientId: "9994567"
        }
    };
    const responseData = req.body.data === "JOHN0000MICHAEL0009994567" && jsonData;
    res.status(200).json(responseData);
});
app.post("/api/v2/parse", (req, res) => {
    const jsonData = {
        statusCode: 200,
        data: {
            firstName: "JOHN",
            lastName: "MICHAEL",
            clientId: "999-4567"
        }
    };
    const responseData = req.body.data === "JOHN0000MICHAEL0009994567" && jsonData;
    res.status(200).json(responseData);
});
// start the Express server
app.listen(port);
//# sourceMappingURL=index.js.map