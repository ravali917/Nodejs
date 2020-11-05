1) Need to install node typescript and tslint

	-- To download node goto https://nodejs.org/en/download/ and download(LTS version is preferred) .msi(for windows 32 or 64) or .pkg(for mac and use mac installer) .
	-- After successfully downloading node, run npm install " tslint typescript -g " in the terminal or command prompt to install typescript globally in the node.


2) Download any rest client (advanced rest client, postman etc.).


3) open downloaded file (node-typescript-express-version2) location in terminal or command prompt and run " npm install " to install node-modules.


4) After successful install of node-modules, run " npm run start " to start the project.


5) open rest client and change method to POST and enter " http://localhost:8080/api/v1/parse " in the URL input. Below to it in body section, change body content type to " application/json " and enter 
{
	"data": "JOHN0000MICHAEL0009994567"
} in below input box. 
Click send button, then we get response at the bottom.
{
	statusCode: 200,
    	data: {
            firstName: "JOHN0000",
            lastName: "MICHAEL000",
            clientId: "9994567"
        }
} .

Later change url to " http://localhost:8080/api/v2/parse " and click send button. We'll find different response in the botton as per reqirements given by client.



