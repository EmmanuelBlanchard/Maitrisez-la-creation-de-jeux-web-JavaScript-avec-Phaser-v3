var zombie = {
    aZombie : null,

    createZombie : function () {
        this.aZombie = jeu.scene.physics.add.sprite(400,100,"zombie","zombie_stand");
    },
    detruireZombie : function() {
        this.aZombie.destroy();
    }
}
