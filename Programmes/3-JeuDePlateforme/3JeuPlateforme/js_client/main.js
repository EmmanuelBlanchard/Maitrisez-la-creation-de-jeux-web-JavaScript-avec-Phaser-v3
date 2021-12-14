var jeu = {
    scene : null,
    world : world,
    player : player,
    cursor : null,
    zombieTemplate : zombieTemplate
}

function preload() {
    jeu.scene = this;
    jeu.scene.load.image("tiles","tilesheet.png");
    jeu.scene.load.tilemapTiledJSON("map","JeuPlateforme.json");
    jeu.scene.load.atlas("player","player.png","playerAtlas.json");
    jeu.scene.load.atlas("zombie","zombie.png","zombieAtlas.json");
    jeu.scene.load.image("spark","particle.png");
    jeu.scene.load.audio("gemmeSound","gemmeSound.ogg");

    jeu.scene.load.image("validation","yellow_boxCheckmark.png");
    jeu.scene.load.image("panel","yellow_panel.png");

    jeu.world.gameOver = false;
    jeu.player.isAlive = true;
}
function create() {
    jeu.world.initialiserWorld();
    jeu.player.initialiserPlayer();
    jeu.player.generatePlayerAnimations();
    jeu.zombieTemplate.generateZombieAnimations();

    jeu.zombieTemplate.createZombie(jeu.world.debutZombie1.x,jeu.world.debutZombie1.y,100).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie2.x,jeu.world.debutZombie2.y,150).initZombie();
    jeu.zombieTemplate.createZombie(jeu.world.debutZombie3.x,jeu.world.debutZombie3.y,300).initZombie();
    jeu.world.gererCollider();
    jeu.cursor = jeu.scene.input.keyboard.createCursorKeys();
    jeu.world.gererCamera();
}
function update(time, delta) {
    jeu.player.gererDeplacement();
    ajusterTailleEcran();
}

function ajusterTailleEcran() {
    var canvas = document.querySelector("canvas");

    var fenetreWidth = window.innerWidth;
    var fenetreHeight = window.innerHeight;
    var fenetreRatio = fenetreWidth / fenetreHeight;

    var jeuRatio = config.width/config.height;

    if(fenetreRatio < jeuRatio) {
        canvas.style.width = fenetreWidth + "px";
        canvas.style.height = (fenetreWidth/jeuRatio) + "px";
    } else {
        canvas.style.width = (fenetreHeight * jeuRatio) + "px";
        canvas.style.height = fenetreHeight + "px";
    }
}
