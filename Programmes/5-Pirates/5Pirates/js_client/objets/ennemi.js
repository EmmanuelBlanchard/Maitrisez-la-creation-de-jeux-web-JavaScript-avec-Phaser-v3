var ennemiTemplate = {
    createEnnemi : function(posX,posY) {
        var ennemi = {
            aEnnemi : null,
        
            initEnnemi : function () {
                this.aEnnemi = jeu.scene.physics.add.sprite(posX,posY,"ennemi1a");
                this.aEnnemi.pv = 100;
                this.gererCollide();
            },
            gererCollide : function() {
                jeu.scene.physics.add.collider(this.aEnnemi,jeu.world.layerLand);
                jeu.scene.physics.add.overlap(this.aEnnemi,jeu.player.bullets,this.takeDamage);
            },
            takeDamage : function(ennemi,bullets) {
                bullets.destroy();
                ennemi.pv -= jeu.player.attaque;
                if(ennemi.pv >= 100) {
                    ennemi.setTexture("ennemi1a");
                } else if(ennemi.pv >= 50) {
                    ennemi.setTexture("ennemi1b");
                } else if(ennemi.pv >= 1) {
                    ennemi.setTexture("ennemi1c");
                } else {
                    ennemi.setTexture("ennemi1d");
                }
            }
        }
        return ennemi;
    }
}
