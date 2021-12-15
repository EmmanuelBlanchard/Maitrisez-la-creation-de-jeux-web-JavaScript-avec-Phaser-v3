var jeu = {
    scene : null,
    world : world,
    player : player,
    cursor : null,
    level : 1
}

function preload() {
    jeu.scene = this;
    jeu.scene.load.image("terrain","assets/images/terrain.png");
    jeu.scene.load.image("tilesPerso","assets/images/tilesPerso.png");
    jeu.scene.load.tilemapTiledJSON("map1","assets/json/level1.json");
    jeu.scene.load.tilemapTiledJSON("map2","assets/json/level2.json");
    jeu.scene.load.tilemapTiledJSON("map3","assets/json/level3.json");
    jeu.scene.load.tilemapTiledJSON("map4","assets/json/level4.json");
    jeu.scene.load.image("playerBarre","assets/images/playerBarre.png");
    jeu.scene.load.image("playerCenter","assets/images/playerCenter.png");
    jeu.scene.load.image("playerIdent","assets/images/ident.png");
    jeu.scene.load.image("debut","assets/images/debut.png");
    jeu.scene.load.image("fin","assets/images/fin.png");
    jeu.scene.load.image("piece1","assets/images/piece1.png");
    jeu.scene.load.image("piece2","assets/images/piece2.png");
    jeu.scene.load.audio("collect","assets/sounds/collect.ogg");
    jeu.scene.load.audio("hurt","assets/sounds/laser1.ogg");
    jeu.scene.load.audio("win","assets/sounds/you_win.ogg");

    jeu.scene.load.image("panel","assets/images/blue_panel.png");
}
function create() {
    jeu.world.creerAnimationPiece();
    jeu.world.initialiserWorld();
    jeu.player.initialiserPlayer();
    jeu.cursor = jeu.scene.input.keyboard.createCursorKeys();
    jeu.world.gererCamera();
    jeu.world.gererCollider();
}
function update(time,delta) {
    ajusterTailleEcran();
    jeu.player.gererRotation();
    jeu.player.gererDeplacement();
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
