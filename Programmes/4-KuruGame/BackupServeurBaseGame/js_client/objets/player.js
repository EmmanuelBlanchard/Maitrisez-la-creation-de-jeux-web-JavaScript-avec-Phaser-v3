var player = {
    aPlayer : null,

    initialiserPlayer : function() {
        this.aPlayer = jeu.scene.add.sprite(jeu.world.positionDebut.x,jeu.world.positionDebut.y,"player").setScale(0.8);
    },
    
    generatePlayerAnimations : function() {
       
    },

    gererDeplacement : function() {
      
    },
    
    gererRotation() {
        this.aPlayer.setAngle(this.aPlayer.angle - 1.5);
    }
}