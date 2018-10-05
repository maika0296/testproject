/*
* First Test node.js server app
* node app.js
*/
var http = require('http');
var url = require("url");
var querystring = require('querystring');
var m1 = require('./module1');

var msg = 'Test Hello Page';
var pageName = '';
var firstName = '';
var lastName = '';

var server = http.createServer(function (req, res) {
    m1.myLog(msg);
    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    
    // Route
    if (page == '/') {
        pageName = 'Main Test Page';
    }
    else if (page == '/test') {
        pageName = 'Test Page';
    } else {
        pageName = page + ' Page';
    }

    m1.myLog(pageName);

    // Get input data
    if ('firstname' in params && 'lastname' in params) {
        // http://localhost:8080?firstname=John&lastname=Dud 
        console.log("Logging: firstname=" + params['firstname']);
        console.log("Logging: lastname=" + params['lastname']);
        firstName = params['firstname'];
        lastName = params['lastname'];

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(m1.testNamePage(pageName, firstName, lastName));    
        res.end();    
    } else {
        // http://localhost:8080
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(m1.testPage(pageName)); 
        res.end();
    }
});
server.listen(8080);
