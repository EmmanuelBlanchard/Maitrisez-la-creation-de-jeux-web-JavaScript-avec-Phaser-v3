var player = {
    aPlayer : null,
    speed : 5,
    
    initialiserPlayer : function() {
        this.aPlayer = jeu.scene.add.sprite(jeu.world.positionDebut.x,jeu.world.positionDebut.y,"player").setScale(0.8);
    },
    
    generatePlayerAnimations : function() {
       
    },

    gererDeplacement : function() {
        if(jeu.cursor.left.isDown) this.aPlayer.x -= this.speed ;
        if(jeu.cursor.right.isDown) this.aPlayer.x += this.speed;
        if(jeu.cursor.up.isDown) this.aPlayer.y -= this.speed;
        if(jeu.cursor.down.isDown) this.aPlayer.y += this.speed;
    },
    
    gererRotation() {
        this.aPlayer.setAngle(this.aPlayer.angle - 1.5);
    }
}