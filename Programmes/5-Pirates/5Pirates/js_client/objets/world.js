var world = {
    tilemap : null,
    tileset : null,
    layerWatter : null,
    layerLowLand : null,
    layerLand : null,
    layerItems : null,
    positionDebut : null,
    positionFin : null,
    drapeauFin : null,
    score : 0,
    scoreText : null,

    initialiserWorld : function() {
        this.tilemap = jeu.scene.make.tilemap({key: "level1"});
        this.tileset = this.tilemap.addTilesetImage("tilesheet","tiles");
        this.layerWatter = this.tilemap.createStaticLayer("watter",this.tileset,0,0);
        this.layerLowLand = this.tilemap.createStaticLayer("lowland",this.tileset,0,0);
        this.layerLand = this.tilemap.createStaticLayer("land",this.tileset,0,0);
        this.layerItems = this.tilemap.createDynamicLayer("items",this.tileset,0,0);

        this.positionDebut = this.tilemap.findObject("Objects", obj => obj.name === "Debut");
        jeu.scene.add.sprite(this.positionDebut.x,this.positionDebut.y,"debut").setScale(3);
        this.positionFin = this.tilemap.findObject("Objects", obj => obj.name === "Fin");
        this.drapeauFin = jeu.scene.add.sprite(this.positionFin.x,this.positionFin.y,"fin").setScale(3);

        this.layerLand.setCollisionByProperty({Collides : true});

        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
    },
    gererCollider : function() {
        jeu.scene.physics.add.collider(jeu.player.aPlayer, this.layerLand);
        // jeu.scene.physics.add.overlap(jeu.player.aPlayer, this.overlapLayer);
    },
    gererCamera : function() {
        jeu.scene.cameras.main.startFollow(jeu.player.aPlayer);
        jeu.scene.cameras.main.setBounds(0,0,this.tilemap.widthInPixels, this.tilemap.heightInPixels);
    },
}