var player = {
    aPlayer : null,

    initialiserPlayer : function() {
        this.aPlayer = jeu.scene.physics.add.sprite(jeu.world.positionDebut.x,jeu.world.positionDebut.y,"player");
        this.aPlayer.setSize(50,50);
        this.aPlayer.setFlip(false,true);
        this.aPlayer.setCollideWorldBounds(true);
    },
    
    generatePlayerAnimations : function() {
       
    },

    gererDeplacement : function() {
      
    }
}