var player = {
    aPlayer : null,
    keyD : null,
    keyQ : null,
    keyS : null,
    keyZ : null,
    keyShift : null,
    gauche : null,
    droite : null,
    haut : null,
    bas : null,
    speedX : 0,
    speedY : 0,
    maxSpeed : 180,
    speedRatio : 7,
    speedReduction : 3,

    initialiserPlayer : function() {
        this.aPlayer = jeu.scene.physics.add.sprite(jeu.world.positionDebut.x,jeu.world.positionDebut.y,"player");
        this.aPlayer.setSize(50,50);
        this.aPlayer.setFlip(false,true);
        this.aPlayer.setCollideWorldBounds(true);

        this.keyD = jeu.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyQ = jeu.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.keyS = jeu.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyZ = jeu.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.keyShift = jeu.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
    },
    
    generatePlayerAnimations : function() {
       
    },

    gererDeplacement : function() {
        this.gererBooleen();
        this.gererMouvement();
    },
    
    gererBooleen : function() {
        if(this.keyD.isDown) {
            this.droite = true;
        } else if (this.keyD.isUp) {
            this.droite = false;
        }
        if(this.keyS.isDown) {
            this.bas = true;
        } else if (this.keyS.isUp) {
            this.bas = false;
        }
        if(this.keyZ.isDown) {
            this.haut = true;
        } else if (this.keyZ.isUp) {
            this.haut = false;
        }
        if(this.keyQ.isDown) {
            this.gauche = true;
        } else if (this.keyQ.isUp) {
            this.gauche = false;
        }
    },
    
    gererMouvement : function() {
        if(this.gauche) {
            if(this.speedX > -this.maxSpeed) {
                this.speedX -= this.speedRatio;
            }
        } else {
            if(this.speedX < 0) {
                this.speedX += this.speedReduction;
            }
        }
        if(this.droite) {
            if(this.speedX < this.maxSpeed) {
                this.speedX += this.speedRatio;
            }
        } else {
            if(this.speedX > 0) {
                this.speedX -= this.speedReduction;
            }
        }
        if(this.haut) {
            if(this.speedY > -this.maxSpeed) {
                this.speedY -= this.speedRatio;
            }
        } else {
            if(this.speedY < 0) {
                this.speedY += this.speedReduction;
            }
        }
        if(this.bas) {
            if(this.speedY < this.maxSpeed) {
                this.speedY += this.speedRatio;
            }
        } else {
            if(this.speedY > 0) {
                this.speedY -= this.speedReduction;
            }
        }
        this.aPlayer.setVelocityX(this.speedX);
        this.aPlayer.setVelocityY(this.speedY);
    }
}