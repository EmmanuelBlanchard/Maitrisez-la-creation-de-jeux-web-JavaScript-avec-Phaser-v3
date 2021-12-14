var config = {
    type : Phaser.AUTO,
    backgroundColor : "#ccccff",
    width : 800,
    height : 600,
    scene : {
        preload : preload,
        create : create,
        update : update
    },
    physics : {
        default : "arcade",
        arcade : {
        gravity : {y : 500}
        }
    }
}

const game = new Phaser.Game(config);
var controls;

function preload() {
    this.load.image("tiles","tilesheet.png");
    this.load.tilemapTiledJSON("map","JeuPlateforme.json");
    this.load.atlas("player","player.png","playerAtlas.json");
}
function create() {
    this.tilemap = this.make.tilemap({key: "map"});
    this.tileset = this.tilemap.addTilesetImage("tilesheet","tiles");

    this.anims.create ({
        key : "playerWalk",
        frames : this.anims.generateFrameNames("player",{prefix:"adventurer_walk",start:1,end:2}),
        frameRate : 5,
        repeat : -1
    });

    var player = this.add.sprite(200,200,"player","adventurer_stand");
    // player.anims.play("playerWalk");
    player.setTexture("player","adventurer_action2");

    this.downLayer = this.tilemap.createStaticLayer("bot",this.tileset,0,0);
    this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
    this.topLayer = this.tilemap.createStaticLayer("top",this.tileset,0,0);

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera : this.cameras.main,
        left : cursors.left,
        right : cursors.right,
        up : cursors.up,
        down : cursors.down,
        speed : 0.5
    }

    controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
}
function update(time, delta) {
    controls.update(delta);
}

function genererAnimations() {
    
}