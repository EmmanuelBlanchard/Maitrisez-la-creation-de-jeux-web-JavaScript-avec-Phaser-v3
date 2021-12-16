var jeu = {
    scene : null,
    world : world,
    player : player,
    ennemiTemplate : ennemiTemplate,
    ennemis : [],
    cursor : null
}

function preload() {
    jeu.scene = this;
    jeu.scene.load.image("tiles","tilesheet.png");
    jeu.scene.load.tilemapTiledJSON("level1","level1.json");
    jeu.scene.load.image("player","player/player.png");
    jeu.scene.load.image("player2","player/player2.png");
    jeu.scene.load.image("player3","player/player3.png");
    jeu.scene.load.image("player4","player/player4.png");
    jeu.scene.load.image("debut","debut.png");
    jeu.scene.load.image("fin","fin.png");
    jeu.scene.load.image("cannonBall","cannonBall.png");
    jeu.scene.load.image("ennemi1a","ennemi/ennemi1a.png");
    jeu.scene.load.image("ennemi1b","ennemi/ennemi1b.png");
    jeu.scene.load.image("ennemi1c","ennemi/ennemi1c.png");
    jeu.scene.load.image("ennemi1d","ennemi/ennemi1d.png");
    jeu.scene.load.image("life","life.png");
    jeu.scene.load.image("lifeRED","lifeRED.png");
    jeu.scene.load.image("explosion1","explosion1.png");
    jeu.scene.load.image("explosion2","explosion2.png");
    jeu.scene.load.image("explosion3","explosion3.png");
}
function create() {
    jeu.world.initialiserWorld();
    jeu.player.initialiserPlayer();
    jeu.world.gererCamera();
    jeu.world.gererCollider();
    creerAnimations();
    creerEnnemis();
    var e1 = jeu.ennemiTemplate.createEnnemi();
    e1.initEnnemi(jeu.world.positionsEnnemis[0]);
    jeu.ennemis.push(e1);
    var e2 = jeu.ennemiTemplate.createEnnemi();
    e2.initEnnemi(jeu.world.positionsEnnemis[1]);
    jeu.ennemis.push(e2);
}
function update(time,delta) {
    ajusterTailleEcran();
    jeu.player.gererDeplacement();
    jeu.player.tirer();
    gererUpdateEnnemis();
}

function creerEnnemis() {
    for(var i = 0 ; i < jeu.world.positionDebut.properties[0].value; i++) {
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
