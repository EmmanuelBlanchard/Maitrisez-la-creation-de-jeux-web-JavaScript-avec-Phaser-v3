var zombie = {
    aZombie : null,

    createZombie : function () {
        this.aZombie = jeu.scene.physics.add.sprite(jeu.world.debutZombie1.x,jeu.world.debutZombie1.y,"zombie","zombie_stand");
        this.aZombie.setOrigin(0,1);
    },

    detruireZombie : function() {
        this.aZombie.destroy();
    },

    generateZombieAnimations : function() {
        jeu.scene.anims.create ({
            key : "zombieWalk",
            frames : game.anims.generateFrameNames("zombie",{prefix:"zombie_walk",start:1,end:2}),
            frameRate : 5,
            repeat : -1
        });
    },
    
    gererDeplacement : function() {
        this.aZombie.anims.play("zombieWalk");
        var tween = jeu.scene.tweens.add({
            targets : this.aZombie,
            x : jeu.world.debutZombie1.x + 100,
            ease : "Linear",
            duration : 1000,
            yoyo : true,
            repeat : -1,
            onStart : function (){},
            onComplete : function (){},
            onYoyo : function (){ jeu.zombie.aZombie.flipX = !jeu.zombie.aZombie.flipX},
            onRepeat : function (){jeu.zombie.aZombie.flipX = !jeu.zombie.aZombie.flipX}
        });
    }
}
