var jeu = {
    scene : null,
    world : world,
    player : player,
    cursor : null
}

function preload() {
    jeu.scene = this;
    jeu.scene.load.image("tiles","tilesheet.png");
    jeu.scene.load.tilemapTiledJSON("map","JeuPlateforme.json");
    jeu.scene.load.atlas("player","player.png","playerAtlas.json");
}
function create() {
    jeu.world.initialiserWorld();
    jeu.player.initialiserPlayer();
    jeu.player.generatePlayerAnimations();

    jeu.world.gererCollider();
    jeu.cursor = jeu.scene.input.keyboard.createCursorKeys();
}
function update(time, delta) {
    jeu.player.gererDeplacement();
}
