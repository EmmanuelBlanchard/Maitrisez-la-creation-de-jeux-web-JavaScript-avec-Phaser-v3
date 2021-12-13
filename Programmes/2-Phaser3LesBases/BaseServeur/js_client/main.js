var config = {
    type : Phaser.AUTO,
    width : 800,
    height : 600,
    scene : {
      preload : preload,
      create : create,
      update : update
    }
}

var player = null;
var clickBoutonHaut = false;
var clickBoutonBas = false;

const game = new Phaser.Game(config);

function preload() {
    this.load.image("joueur","player.png");
    this.load.image("haut","haut.png");
    this.load.image("bas","bas.png");
}

function create() {
    var positionCameraCentreX = this.cameras.main.centerX;
    var positionCameraCentreY = this.cameras.main.centerY;
    player = this.add.sprite(positionCameraCentreX,positionCameraCentreY,"joueur");

    var down = this.add.sprite(50,50,"bas").setInteractive();
    var top = this.add.sprite(100,50,"haut").setInteractive();

    down.on("pointerdown", function() {
        clickBoutonBas = true;
    });
    down.on("pointerup", function() {
        clickBoutonBas = false;
    })
    down.on("pointerout", function() {
        clickBoutonBas = false;
    })

    top.on("pointerdown", function() {
        clickBoutonHaut = true;
    });
    top.on("pointerup", function() {
        clickBoutonHaut = false;
    })
    top.on("pointerout", function() {
        clickBoutonHaut = false;
    })
}

function update(time, delta) {
    // player.setAngle(player.angle + 1);
    if(clickBoutonHaut) {
        player.setScale(player.scaleX + 0.1, player.scaleY + 0.1);
    }
    if(clickBoutonBas) {
        player.setScale(player.scaleX - 0.1, player.scaleY - 0.1);
    }
}
