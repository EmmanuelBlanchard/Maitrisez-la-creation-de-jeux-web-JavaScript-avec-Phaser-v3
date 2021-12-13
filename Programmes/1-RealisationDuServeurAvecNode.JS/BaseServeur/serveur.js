var http = require("http");
var url = require("url");
var fs = require("fs");

const PORT = "8080";

var serveur = http.createServer(traitReq);
serveur.listen(PORT);

function traitReq(requete, reponse) {
    console.log("Hello World !");
}