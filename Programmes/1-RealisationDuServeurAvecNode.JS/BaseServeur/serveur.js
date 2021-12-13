var http = require("http");
var url = require("url");
var fs = require("fs");

const PORT = "8080";

var serveur = http.createServer(traitReq);
serveur.listen(PORT);

function traitReq(requete, reponse) {
    var monObj = url.parse(requete.url);
    var contentType = "";

    if(monObj.pathname === "/") {
        monObj.pathname = "/index.html";
    }

    var encodage = "";
    var dossier = "";

    var indexDuPoint = monObj.pathname.indexOf(".");
    var extension = monObj.pathname.substring(indexDuPoint,monObj.pathname.length);
    var fichier = monObj.pathname.substring(1,monObj.pathname.length);

    switch(extension) {
        case ".html" : 
            contentType = "text/html";
            encodage = "UTF-8";
            dossier = "html/"
        break;
        case ".css" : 
            contentType = "text/css";
            dossier = "css/"
        break;
        case ".js" : 
            contentType = "application/javascript";
            dossier = "js_client/"
        break;
        case ".png" : 
            contentType = "image/png";
            dossier = "assets/"
        break;
        case ".jpf" : 
            contentType = "image/jpeg";
            dossier = "assets/"
        break;
        default : console.log("Erreur type d'extension non reconnu");
    }
    
    if(monObj.pathname !== "/favicon.ico") {
        var pageHtml = fs.readFileSync(dossier + fichier,encodage);

        reponse.writeHead(200,{"Content-Type" : contentType});
        reponse.write(pageHtml);
        reponse.end();
    }
}