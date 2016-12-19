
var serveport       = 80,
    gameport        = 3586,
    express         = require('express'),
    UUID            = require('node-uuid'),
    verbose         = true,
    https           = require('https'),
    fs              = require('fs'),
    exp             = express(),
//    gameProcess     = require("./gameProcess.gyp"),
    wsserver        = require('ws').Server;

var httpsServer = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, exp).listen(serveport);
if(verbose) console.log(" ")
if(verbose) console.log('\t :: Express :: Opened Port Listener :: Port ' + serveport);

exp.get('/', function( req, res ){ 
    res.sendFile(__dirname + '/HTML/Index.html');
    });
exp.get( '/*' , function( req, res, next ) {
    var file = req.params[0]; 
    if(verbose) console.log('\t :: Express :: file requested :: ' + file);
    res.sendFile( __dirname + '/HTML/' + file );
    });
