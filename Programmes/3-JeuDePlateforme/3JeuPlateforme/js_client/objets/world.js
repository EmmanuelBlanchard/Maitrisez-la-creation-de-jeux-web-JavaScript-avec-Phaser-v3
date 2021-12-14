var world = {
    tilemap : null,
    tileset : null,
    downLayer : null,
    worldLayer : null,
    topLayer : null,

    initialiserWorld : function() {
        this.tilemap = jeu.scene.make.tilemap({key: "map"});
        this.tileset = this.tilemap.addTilesetImage("tilesheet","tiles");
        this.downLayer = this.tilemap.createStaticLayer("bot",this.tileset,0,0);
        this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",this.tileset,0,0);

        this.worldLayer.setCollisionByProperty({Collides : true});
    },

    gererCollider : function() {
        jeu.scene.physics.add.collider(jeu.player.aPlayer,this.worldLayer);
    }
   
}