var player = {
    playerBarre : null,
    playerCenter : null,
    speed : 5,

    initialiserPlayer : function() {
        this.playerBarre = jeu.scene.add.sprite(jeu.world.positionDebut.x,jeu.world.positionDebut.y,"playerBarre").setScale(2);
        this.playerCenter = jeu.scene.add.sprite(jeu.world.positionDebut.x,jeu.world.positionDebut.y,"playerCenter").setScale(2);
    },
    
    generatePlayerAnimations : function() {
       
    },

    gererDeplacement : function() {
        if(jeu.cursor.left.isDown) this.playerCenter.x -= this.speed ;
        if(jeu.cursor.right.isDown) this.playerCenter.x += this.speed;
        if(jeu.cursor.up.isDown) this.playerCenter.y -= this.speed;
        if(jeu.cursor.down.isDown) this.playerCenter.y += this.speed;
        this.playerBarre.x = this.playerCenter.x;
        this.playerBarre.y = this.playerCenter.y;
    },
    
    gererRotation() {
        this.playerBarre.setAngle(this.playerBarre.angle - 1.5);
    }
}