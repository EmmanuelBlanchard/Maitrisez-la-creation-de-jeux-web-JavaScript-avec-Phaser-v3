var world = {
    tilemap : null,
    tileset : null,
    downLayer : null,
    worldLayer : null,
    topLayer : null,
    overlapLayer : null,
    positionDebut : null,
    score : 0,
    scoreText : null,

    initialiserWorld : function() {
        this.tilemap = jeu.scene.make.tilemap({key: "map"});
        this.tileset = this.tilemap.addTilesetImage("tilesheet","tiles");
        this.downLayer = this.tilemap.createStaticLayer("bot",this.tileset,0,0);
        this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",this.tileset,0,0);
        this.overlapLayer = this.tilemap.createDynamicLayer("overlap",this.tileset,0,0);

        this.positionDebut = this.tilemap.findObject("Objects", obj => obj.name === "debut");
        this.worldLayer.setCollisionByProperty({Collides : true});

        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
        
        var policeTitre = {
            fontSize : "32px",
            color : "#FF0000",
            fontFamily : "ZCOOL KuaiLe"
        }
        this.scoreText = jeu.scene.add.text(16,16,"Score : 0",policeTitre);
        this.scoreText.setScrollFactor(0);
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
        this.addScoreGemme(tile.properties.item);
        this.scoreText.setText("Score : " + this.score);
        this.overlapLayer.removeTileAt(tile.x,tile.y).destroy();
    },

    addScoreGemme : function(item) {
        if(item === "gemmeRouge") {
            this.score += 10;
        } else if(item === "gemmeBleu") {
            this.score += 20;
        }
    }
}