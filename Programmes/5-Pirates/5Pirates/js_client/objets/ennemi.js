var ennemiTemplate = {
    createEnnemi : function(posX,posY) {
        var ennemi = {
            aEnnemi : null,
        
            initEnnemi : function () {
                this.aEnnemi = jeu.scene.physics.add.sprite(posX,posY,"ennemi1a");
            },
            gererCollide : function() {
                jeu.scene.physics.add.collider(this.aEnnemi,jeu.world.layerLand);
        
            }
        }
        return ennemi;
    }
}
