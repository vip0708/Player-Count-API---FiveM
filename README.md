# Player-Count-API  -FiveM (LINUX)
This is a simple Node.js application that provides an API endpoint to retrieve the current player count of a FiveM server.

**Installation**

1.Clone this repository to your local LINUX machine

2.Install the required packages by running ```npm install``` OR ```npm i ```

3. Run the server by running ```npm start```


**Usage**

To retrieve the current player count without ```cors``` enabled, make a GET request to http://localhost:3000/player-count. The response will be a JSON object with the player count as the count property. If there was an error retrieving the player count, the response will have an error property instead.

**Dependencies**

This application depends on the following Node.js packages:

```Request```

```Express```

**License**

This project is licensed under the MIT License. See the LICENSE file for more information.
