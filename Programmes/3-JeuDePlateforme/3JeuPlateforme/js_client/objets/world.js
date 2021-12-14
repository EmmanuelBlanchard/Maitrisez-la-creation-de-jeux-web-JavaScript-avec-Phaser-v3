var world = {
    tilemap : null,
    tileset : null,
    downLayer : null,
    worldLayer : null,
    topLayer : null,
    overlapLayer : null,

    initialiserWorld : function() {
        this.tilemap = jeu.scene.make.tilemap({key: "map"});
        this.tileset = this.tilemap.addTilesetImage("tilesheet","tiles");
        this.downLayer = this.tilemap.createStaticLayer("bot",this.tileset,0,0);
        this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",this.tileset,0,0);
        this.overlapLayer = this.tilemap.createDynamicLayer("overlap",this.tileset,0,0);

        this.worldLayer.setCollisionByProperty({Collides : true});

        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
    },

    gererCollider : function() {
        this.overlapLayer.setTileIndexCallback(50,this.collectGemme,this); 
        this.overlapLayer.setTileIndexCallback(53,this.collectGemme,this);
        jeu.scene.physics.add.collider(jeu.player.aPlayer,this.worldLayer)
        jeu.scene.physics.add.overlap(jeu.player.aPlayer,this.overlapLayer);
    },
    
    gererCamera : function() {
        jeu.scene.cameras.main.startFollow(jeu.player.aPlayer);
        jeu.scene.cameras.main.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
    },
    
    collectGemme : function (player,tile) {
        this.overlapLayer.removeTileAt(tile.x,tile.y).destroy();
    }
}