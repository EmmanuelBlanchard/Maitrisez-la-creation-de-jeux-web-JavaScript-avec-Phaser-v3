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
    gameOver : false,

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
        this.overlapLayer.setTileIndexCallback(50, this.collectGemme, this); 
        this.overlapLayer.setTileIndexCallback(53,this.collectGemme,this);
        this.overlapLayer.setTileIndexCallback(71,this.killPlayer,this);
        jeu.scene.physics.add.collider(jeu.player.aPlayer,this.worldLayer)
        jeu.scene.physics.add.overlap(jeu.player.aPlayer,this.overlapLayer);
    },
    
    gererCamera : function() {
        jeu.scene.cameras.main.startFollow(jeu.player.aPlayer);
        jeu.scene.cameras.main.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
    },
    
    collectGemme : function (player,tile) {
        jeu.scene.sound.play("gemmeSound");
        this.genererParticules(tile.getCenterX(),tile.getCenterY());
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
    },

    genererParticules : function(posX,posY) {
        var particules = jeu.scene.add.particles("spark");

        var configParticules = {
            x : posX,
            y : posY,
            speed : 200,
            angle : {min : 180, max : 360},
            lifeSpan : {min : 100, max :300},
            scale : {start : 0.1, end : 0.1},
            blendMode : "ADD"
        }
        var emitter = particules.createEmitter(configParticules);

        jeu.scene.time.delayedCall(300, function() {
            particules.destroy();
        })
    },
    
    killPlayer : function() {
        if(!this.gameOver) {
            this.gameOver = true;
            jeu.player.killPlayer();
            jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x,jeu.scene.cameras.main.midPoint.y,"panel").setScale(5,3);
            var restartBouton = jeu.scene.add.sprite(jeu.scene.cameras.main.midPoint.x,jeu.scene.cameras.main.midPoint.y+100,"validation").setInteractive();
            restartBouton.on("pointerup", function() {
                jeu.scene.scene.restart();
            });

            var policeTitre = {
                fontSize : "52px",
                color : "#FFFFFF",
                fontFamily : "ZCOOL KuaiLe"
            }
            this.scoreText = jeu.scene.add.text(jeu.scene.cameras.main.midPoint.x-200,jeu.scene.cameras.main.midPoint.y-100,"Tu es mort \n Recommencer ?",policeTitre);
        }
    }

}