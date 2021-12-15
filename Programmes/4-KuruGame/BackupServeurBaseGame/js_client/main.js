var jeu = {
    scene : null,
    world : world,
    player : player,
    cursor : null
}

function preload() {
    jeu.scene = this;
    jeu.scene.load.image("terrain","terrain.png");
    jeu.scene.load.image("tilesPerso","tilesPerso.png");
    jeu.scene.load.tilemapTiledJSON("map","level1.json");

    jeu.scene.load.image("player","player.png");
}
function create() {
    jeu.world.initialiserWorld();
    jeu.player.initialiserPlayer();
}
function update(time,delta) {
    ajusterTailleEcran();
    jeu.player.gererRotation();
}

function ajusterTailleEcran() {
    var canvas = document.querySelector("canvas");

    var fenetreWidth = window.innerWidth;
    var fenetreHeight = window.innerHeight;
    var fenetreRatio = fenetreWidth / fenetreHeight;

    var jeuRatio = config.width / config.height;

    if(fenetreRatio < jeuRatio) {
        canvas.style.width = fenetreWidth + "px";
        canvas.style.height = (fenetreWidth / jeuRatio) +"px";
    } else {
        canvas.style.width = (fenetreHeight * jeuRatio) + "px";
        canvas.style.height = fenetreHeight + "px";
    }
}
