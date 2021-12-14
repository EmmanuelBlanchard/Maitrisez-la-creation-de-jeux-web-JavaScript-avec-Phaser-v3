var player = {
    aPlayer : null,

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
    },

    gererDeplacement : function() {
        if(jeu.cursor.left.isDown) {
            this.aPlayer.setVelocityX(-200);
        } else if(jeu.cursor.right.isDown) {
            this.aPlayer.setVelocityX(200);
        }
        else {
            this.aPlayer.setVelocityX(0);
        }
    }
}