var jeu = {
    scene : null,
    world : world,
    player : player,
    cursor : null
}

function preload() {
    jeu.scene = this;
    jeu.scene.load.image("tiles","tilesheet.png");
    jeu.scene.load.tilemapTiledJSON("level1","level1.json");
    jeu.scene.load.image("player","shipG.png");
    jeu.scene.load.image("debut","debut.png");
    jeu.scene.load.image("fin","fin.png");
    jeu.scene.load.image("cannonBall","cannonBall.png");
}
function create() {
    jeu.world.initialiserWorld();
    jeu.player.initialiserPlayer();
    jeu.world.gererCamera();
    jeu.world.gererCollider();
}
function update(time,delta) {
    ajusterTailleEcran();
    jeu.player.gererDeplacement();
    jeu.player.tirer();
}

function ajusterTailleEcran() {
    var canvas = document.querySelector("canvas");

    var fenetreWidth = window.innerWidth;
    var fenetreHeight = window.innerHeight;
    var fenetreRatio = fenetreWidth / fenetreHeight;

    var jeuRatio = config.width/config.height;

    if(fenetreRatio < jeuRatio){
        canvas.style.width = fenetreWidth + "px";
        canvas.style.height = (fenetreWidth/jeuRatio) +"px";
    } else {
        canvas.style.width = (fenetreHeight * jeuRatio) + "px";
        canvas.style.height = fenetreHeight + "px";
    }
}
