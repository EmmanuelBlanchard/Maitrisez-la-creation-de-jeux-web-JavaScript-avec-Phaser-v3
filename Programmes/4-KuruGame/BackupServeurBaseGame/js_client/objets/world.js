var world = {
    tilemap : null,
    tilesetTerrain : null,
    tilesetItem : null,
    downLayerTerrain : null,
    downLayerItem : null,
    worldLayer : null,
    worldLayerItem : null,
    topLayer : null,
    overlapLayer : null,
    positionDebut : null,
    positionFin : null,
    drapeauFin : null,
    score : 0,
    scoreText : null,
    isLevelFin : false,

    initialiserWorld : function() {
        this.tilemap = jeu.scene.make.tilemap({key: "map"});
        this.tilesetTerrain = this.tilemap.addTilesetImage("terrain","terrain");
        this.tilesetItem = this.tilemap.addTilesetImage("tilesPerso","tilesPerso");
        this.downLayerTerrain = this.tilemap.createStaticLayer("botTerrain",this.tilesetTerrain,0,0);
        this.downLayerItem = this.tilemap.createStaticLayer("botItem",this.tilesetItem,0,0);
        this.worldLayer = this.tilemap.createStaticLayer("world",this.tilesetTerrain,0,0);
        this.worldLayerItem = this.tilemap.createStaticLayer("worldItem",this.tilesetItem,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",this.tilesetTerrain,0,0);
        this.overlapLayer = this.tilemap.createDynamicLayer("overlap",this.tilesetTerrain,0,0);

        this.positionDebut = this.tilemap.findObject("Objects", obj => obj.name === "Debut");
        this.positionFin = this.tilemap.findObject("Objects", obj => obj.name === "Fin");
        jeu.scene.add.sprite(this.positionDebut.x, this.positionDebut.y,"debut").setScale(3);
        this.drapeauFin = jeu.scene.physics.add.sprite(this.positionFin.x, this.positionFin.y,"fin").setScale(3);

        this.worldLayer.setCollisionByProperty({Collides : true});

        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);

        var policeTitre = {
            fontSize : "32px",
            color : "#FF0000",
            fontFamily : "ZCOOL KuaiLe"
        }
        this.scoreText = jeu.scene.add.text (16,16,"Score : 0",policeTitre);
        this.scoreText.setScrollFactor(0);
    },
    gererCollider : function() {
        jeu.scene.physics.add.overlap(jeu.player.playerCenter,this.drapeauFin, this.finLevel);
        this.worldLayer.setTileIndexCallback(this.tilesetTerrain.firstgid + 21,this.contactPlayerWorld,this);
        this.worldLayer.setTileIndexCallback(this.tilesetTerrain.firstgid + 22,this.contactPlayerWorld,this);
        this.worldLayer.setTileIndexCallback(this.tilesetTerrain.firstgid + 33,this.contactPlayerWorld,this);
        this.worldLayer.setTileIndexCallback(this.tilesetTerrain.firstgid + 34,this.contactPlayerWorld,this);
        this.worldLayer.setTileIndexCallback(this.tilesetTerrain.firstgid + 35,this.contactPlayerWorld,this);
        this.worldLayer.setTileIndexCallback(this.tilesetTerrain.firstgid + 36,this.contactPlayerWorld,this);

        this.worldLayerItem.setTileIndexCallback(this.tilesetItem.firstgid + 6,this.contactPlayerWorld,this);

        jeu.scene.physics.add.overlap(jeu.player.ident, this.worldLayer);
        jeu.scene.physics.add.overlap(jeu.player.ident2, this.worldLayer);
        jeu.scene.physics.add.overlap(jeu.player.ident, this.worldLayerItem);
        jeu.scene.physics.add.overlap(jeu.player.ident2, this.worldLayerItem);
    },
    gererCamera : function() {
        jeu.scene.cameras.main.startFollow(jeu.player.playerCenter);
        jeu.scene.cameras.main.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
    },
    finLevel : function() {
        jeu.player.ableToMove = false;
        if(!jeu.world.isLevelFin) {
            jeu.scene.physics.moveTo(jeu.player.playerCenter,jeu.world.positionFin.x,jeu.world.positionFin.y,100);
        }
        if(jeu.player.playerCenter.x > jeu.world.positionFin.x -2 && jeu.player.playerCenter.x < jeu.world.positionFin.x + 2) {
            jeu.player.playerCenter.body.stop();
            jeu.world.isLevelFin = true;
        }
    },
    contactPlayerWorld : function() {
        console.log("coucou");
    }
}