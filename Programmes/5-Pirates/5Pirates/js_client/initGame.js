var config = {
    type : Phaser.AUTO,
    backgroundColor : "#ccccff",
    width : 1200,
    height : 800,
    scene : {
        preload : preload,
        create : create,
        update : update
    },
    physics : {
        default : "arcade",
        arcade : {
            debug:true,
            gravity : {y : 0}
        }
    }
}

const game = new Phaser.Game(config);

/*

ennemi.destructPoint1 = jeu.scene.add.sprite(ennemi.x,ennemi.y).play("destructionBateau");
        jeu.scene.time.delayedCall(200,function(){
            ennemi.destructPoint1 = jeu.scene.add.sprite(ennemi.x+20,ennemi.y+20).play("destructionBateau").setScale(0.5);
            ennemi.destructPoint1 = jeu.scene.add.sprite(ennemi.x-20,ennemi.y-20).play("destructionBateau").setScale(0.5);
        },this);
        jeu.scene.time.delayedCall(400,function(){
            ennemi.destructPoint1 = jeu.scene.add.sprite(ennemi.x+20,ennemi.y-20).play("destructionBateau").setScale(0.8);
        },this);
        jeu.scene.time.delayedCall(700,function(){
            ennemi.destructPoint1 = jeu.scene.add.sprite(ennemi.x,ennemi.y).play("destructionBateau").setScale(2);
        },this);
        */