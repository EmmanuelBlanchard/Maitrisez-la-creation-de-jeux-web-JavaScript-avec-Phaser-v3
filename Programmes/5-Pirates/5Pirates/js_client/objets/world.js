var world = {
    tilemap : null,
    tileset : null,
    layerWatter : null,
    layerLowLand : null,
    layerLand : null,
    layerItems : null,
    positionDebut : null,
    positionFin : null,
    score : 0,
    scoreText : null,

    initialiserWorld : function() {
        this.tilemap = jeu.scene.make.tilemap({key: "level1"});
        this.tileset = this.tilemap.addTilesetImage("tilesheet","tiles");
        this.layerWatter = this.tilemap.createStaticLayer("watter",this.tileset,0,0);
        this.layerLowLand = this.tilemap.createStaticLayer("lowland",this.tileset,0,0);
        this.layerLand = this.tilemap.createStaticLayer("land",this.tileset,0,0);
        this.layerItems = this.tilemap.createDynamicLayer("items",this.tileset,0,0);

        this.positionDebut = this.tilemap.findObject("Objects", obj => obj.name === "debut");
        this.positionFin = this.tilemap.findObject("Objects", obj => obj.name === "fin");

        this.layerLand.setCollisionByProperty({Collides : true});

        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
    },
    gererCollider : function() {
        // jeu.scene.physics.add.collider(jeu.player.aPlayer, this.worldLayer)
        // jeu.scene.physics.add.overlap(jeu.player.aPlayer, this.overlapLayer);
    },
    gererCamera : function() {
      
    },
}