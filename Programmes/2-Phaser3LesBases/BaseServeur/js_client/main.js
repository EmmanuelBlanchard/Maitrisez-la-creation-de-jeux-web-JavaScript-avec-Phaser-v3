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

const game = new Phaser.Game(config);

function preload() {
    console.log(this);
    this.load.image("joueur","player.png");
}

function create() {
    this.add.sprite(50,50,"joueur");
}

function update(time, delta) {
}