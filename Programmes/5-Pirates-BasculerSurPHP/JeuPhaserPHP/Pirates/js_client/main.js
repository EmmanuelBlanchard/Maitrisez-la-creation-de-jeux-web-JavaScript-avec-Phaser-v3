var jeu = {
    scene : null,
    world : world,
    player : player,
    ennemiTemplate : ennemiTemplate,
    ennemis : [],
    cursor : null,
    level : 1,
}

function preload() {
    jeu.scene = this;
    jeu.scene.load.image("tiles","assets/images/tilesheet.png");
    jeu.scene.load.tilemapTiledJSON("level1","assets/json/level1.json");
    jeu.scene.load.tilemapTiledJSON("level2","assets/json/level2.json");
    jeu.scene.load.image("player","assets/images/player/player.png");
    jeu.scene.load.image("player2","assets/images/player/player2.png");
    jeu.scene.load.image("player3","assets/images/player/player3.png");
    jeu.scene.load.image("player4","assets/images/player/player4.png");
    jeu.scene.load.image("debut","assets/images/debut.png");
    jeu.scene.load.image("fin","assets/images/fin.png");
    jeu.scene.load.image("cannonBall","assets/images/cannonBall.png");
    jeu.scene.load.image("ennemi1a","assets/images/ennemi/ennemi1a.png");
    jeu.scene.load.image("ennemi1b","assets/images/ennemi/ennemi1b.png");
    jeu.scene.load.image("ennemi1c","assets/images/ennemi/ennemi1c.png");
    jeu.scene.load.image("ennemi1d","assets/images/ennemi/ennemi1d.png");
    jeu.scene.load.image("life","assets/images/life.png");
    jeu.scene.load.image("lifeRED","assets/images/lifeRED.png");
    jeu.scene.load.image("explosion1","assets/images/explosion1.png");
    jeu.scene.load.image("explosion2","assets/images/explosion2.png");
    jeu.scene.load.image("explosion3","assets/images/explosion3.png");
    jeu.scene.load.audio("explosionSound","assets/sounds/explosion.ogg");
}
function create() {
    jeu.world.initialiserWorld();
    jeu.world.isFinLevel = false;
    jeu.player.initialiserPlayer();
    jeu.world.gererCamera();
    jeu.world.gererCollider();
    creerAnimations();
    creerEnnemis();
}
function update(time,delta) {
    if(!jeu.world.isFinLevel) {
        ajusterTailleEcran();
        jeu.player.gererDeplacement();
        jeu.player.tirer();
        gererUpdateEnnemis();
    }
}

function creerEnnemis() {
    jeu.ennemis = [];
    for (var i = 0 ; i < jeu.world.positionDebut.properties[0].value; i++) {
        var e1 = jeu.ennemiTemplate.createEnnemi();
        e1.initEnnemi(jeu.world.positionsEnnemis[i]);
        jeu.ennemis.push(e1);
    }
}

function gererUpdateEnnemis() {
    for(var i = 0 ; i < jeu.ennemis.length; i++) {
        jeu.ennemis[i].tirer();
        jeu.ennemis[i].gererDeplacement();
    }
}

function creerAnimations() {
    jeu.scene.anims.create({
        key : "destruction",
        frames : [
          {key : "explosion3"},
          {key : "explosion2",},
          {key : "explosion1",}
        ],
        hideOnComplete : true,
        frameRate : 10,
        repeat : 0
    });
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
