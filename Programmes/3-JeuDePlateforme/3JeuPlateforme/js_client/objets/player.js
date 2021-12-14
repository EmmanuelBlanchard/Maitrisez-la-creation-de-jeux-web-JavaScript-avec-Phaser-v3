var player = {
    aPlayer : null,
    isJumping : false,

    initialiserPlayer : function() {
        this.aPlayer = jeu.scene.physics.add.sprite(200,200,"player","adventurer_stand");
        this.aPlayer.setCollideWorldBounds(true);
    },
    
    generatePlayerAnimations : function() {
        jeu.scene.anims.create ({
            key : "playerWalk",
            frames : game.anims.generateFrameNames("player",{prefix:"adventurer_walk",start:1,end:2}),
            frameRate : 5,
            repeat : -1
        });
        jeu.scene.anims.create ({
            key : "playerIdle",
            frames : [{key : "player",frame : "adventurer_stand"},{key : "player",frame : "adventurer_idle"}],
            frameRate : 2,
            repeat : -1
        });
    },

    gererDeplacement : function() {
        if(jeu.cursor.left.isDown) {
            this.aPlayer.setVelocityX(-200);
            this.aPlayer.setFlip(true,false);
        } else if(jeu.cursor.right.isDown) {
            this.aPlayer.setVelocityX(200);
            this.aPlayer.setFlip(false,false);
        } else {
            this.aPlayer.setVelocityX(0);
        }
        if(jeu.cursor.up.isDown && this.aPlayer.body.onFloor()) {
            this.aPlayer.setVelocityY(-350);
        }

        if(this.aPlayer.body.onFloor()) {
            this.isJumping = false;
        } else {
            this.isJumping = true;
        }

        if(this.isJumping) {
            this.aPlayer.setTexture("player","adventurer_jump");
        } else {
            if(jeu.cursor.left.isDown) {
                this.aPlayer.anims.play("playerWalk",true);
            } else if(jeu.cursor.right.isDown) {
                this.aPlayer.anims.play("playerWalk",true);
            } else {
                this.aPlayer.anims.play("playerIdle",true);
            }
        }
    }
}