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

function preload() {
    this.load.image("tiles","tilesheet.png");
    this.load.tilemapTiledJSON("map","JeuPlateforme.json");
}
function create() {
    this.tilemap = this.make.tilemap({key: "map"});
    this.tileset = this.tilemap.addTilesetImage("tilesheet","tiles");

    this.downLayer = this.tilemap.createStaticLayer("bot",this.tileset,0,0);
    this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
    this.topLayer = this.tilemap.createStaticLayer("top",this.tileset,0,0);
}
function update(time, delta) {

}