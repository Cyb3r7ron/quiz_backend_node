//Require app
const app = require('./app');

//Require http
const http = require('http');

//Get Port
const PORT = process.env.PORT || 5000;

//Create igniter function
const igniter = ()=>{
    //Create a server
    const server = http.createServer(app);

    //Listen on server
    server.listen(PORT,()=>{
        console.log(`Server listening on ${PORT}`)
    })
}

module.exports = igniter