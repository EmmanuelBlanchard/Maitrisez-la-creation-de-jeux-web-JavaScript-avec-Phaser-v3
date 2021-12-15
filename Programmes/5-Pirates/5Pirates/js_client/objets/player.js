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
    targetAngle : 0,
    isShooting : false,
    pointer : null,
    fireRate : 500,
    nextFire : 0,
    bullets : null,
    attaque : 15,

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

        jeu.scene.input.on("pointerdown",function(pointer) {
            this.pointer = pointer;
            this.isShooting = true;
        },this);
        jeu.scene.input.on("pointerup",function() {
            this.isShooting = false;
        },this);

        this.bullets = jeu.scene.physics.add.group({
            defaultKey : "cannonBall",
            maxSize : 10
        })
    },
    
    generatePlayerAnimations : function() {
       
    },

    gererDeplacement : function() {
        this.gererBooleen();
        this.gererMouvement();
        this.gererRotation();
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
    },

    gererRotation : function() {
        if(this.gauche && !this.droite && !this.bas && !this.haut) {
            if(this.aPlayer.angle < 90) this.targetAngle = -90;
            else this.targetAngle = 270;
        }
        if(this.gauche && this.bas && !this.droite  && !this.haut) {
            if(this.aPlayer.angle < 45) this.targetAngle = -135;
            else this.targetAngle = 225;
        }
        if(this.gauche && this.haut && !this.droite && !this.bas) {
            if(this.aPlayer.angle > 135) this.targetAngle = 315;
            else this.targetAngle = -45;
        }
        if(this.droite && !this.bas && !this.haut && !this.gauche) {
            if(this.aPlayer.angle > -90) this.targetAngle = 90;
            else this.targetAngle = -270;
        }
        if(this.droite && this.haut && !this.bas  && !this.gauche) {
            if(this.aPlayer.angle > -135) this.targetAngle = 45;
            else this.targetAngle = -315;
        }
        if(this.droite && this.bas && !this.haut && !this.gauche) {
            if(this.aPlayer.angle > -45)this.targetAngle = 135;
            else this.targetAngle = -225;
        }
        if(this.haut && !this.gauche && !this.droite && !this.bas) {
            if(this.aPlayer.angle < 180)this.targetAngle = 0;
            else this.targetAngle = 360;
        }
        if(this.bas && !this.gauche && !this.droite && !this.haut) {
            if(this.aPlayer.angle > 0) this.targetAngle = 175;
            else this.targetAngle = -175;
        }

        if(this.bas || this.haut || this.gauche || this.droite) {
            if(this.aPlayer.angle < this.targetAngle) {
                this.aPlayer.angle += this.speedRatio/2;
            }
            if(this.aPlayer.angle > this.targetAngle) {
                this.aPlayer.angle -= this.speedRatio/2;
            }
        }
    },

    tirer : function() {
        if(this.isShooting) {
            if(jeu.scene.time.now > this.nextFire) {
                this.nextFire = jeu.scene.time.now + this.fireRate;
                var shoot = this.bullets.get(this.aPlayer.x,this.aPlayer.y);
                jeu.scene.physics.moveTo(shoot,this.pointer.worldX,this.pointer.worldY,750);
            }
        }
    },
}