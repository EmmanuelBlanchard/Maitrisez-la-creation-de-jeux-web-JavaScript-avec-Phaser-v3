var jeu = {
    scene : null,
    world : world,
    player : player
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
    jeu.player.aPlayer.anims.play("playerWalk");
}
function update(time, delta) {

}
