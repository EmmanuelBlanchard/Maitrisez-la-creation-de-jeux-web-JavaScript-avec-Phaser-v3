var gestionPage = {
    envoyerLesDonnees : function(reponse,data) {
        reponse.writeHead(200,{"Content-Type" : data.contentType});
        reponse.write(data.pageHtml);
        reponse.end();
    },
    
    preparerLesDonnees : function(monObj) {
        var indexDuPoint = monObj.pathname.indexOf(".");
        var extension = monObj.pathname.substring(indexDuPoint,monObj.pathname.length);
    
        var data = {
            contentType : "",
            encodage : "",
            dossier : "",
            fichier: monObj.pathname.substring(1,monObj.pathname.length),
        }
        switch(extension) {
            case ".html" : 
                data.contentType = "text/html";
                data.encodage = "UTF-8";
                data.dossier = "html/"
            break;
            case ".css" :
                data.contentType = "text/css";
                data.dossier = "css/"
            break;
            case ".js" :
                data.contentType = "application/javascript";
                data.dossier = "js_client/"
            break;
            case ".png" :
                data.contentType = "image/png";
                data.dossier = "assets/"
            break
            case ".jpg" :
                data.contentType = "image/jpeg";
                data.dossier = "assets/"
            break
            default : console.log("Erreur : type d'extension non reconnu");
        }
        return data;
    }
}
module.exports = gestionPage;
