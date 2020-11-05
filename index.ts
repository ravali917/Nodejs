import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT || 8080; // default port to listen

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post( "/api/v1/parse", ( req, res ) => {
    const jsonData = {
        statusCode: 200,
        data: {
            firstName: "JOHN0000",
            lastName: "MICHAEL000",
            clientId: "9994567"
        }
    }

    const responseData = req.body.data === "JOHN0000MICHAEL0009994567" && jsonData
    res.status(200).json(responseData)
} );

app.post( "/api/v2/parse", ( req, res ) => {
    const jsonData = {
        statusCode: 200,
        data: {
            firstName: "JOHN",
            lastName: "MICHAEL",
            clientId: "999-4567"
        }
    }

    const responseData = req.body.data === "JOHN0000MICHAEL0009994567" && jsonData
    res.status(200).json(responseData)
} );

// start the Express server
app.listen( port );