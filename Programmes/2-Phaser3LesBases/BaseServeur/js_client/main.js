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

const game = new Phaser.Game(config);

function preload() {
    console.log(this);
    this.load.image("joueur","player.png");
}

function create() {
    var positionCameraCentreX = this.cameras.main.centerX;
    var positionCameraCentreY = this.cameras.main.centerY;
    player = this.add.sprite(positionCameraCentreX,positionCameraCentreY,"joueur");
    player.setScale(1.5);
    player.setOrigin(0,0);
    player.setFlip(true,true);
}

function update(time, delta) {
    // player.setAngle(player.angle + 1);
}