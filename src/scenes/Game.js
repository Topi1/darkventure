import { Scene } from 'phaser';
import Animations from './Animations';
import ObjectAnimations from './ObjectAnimations';
import { PlayerControls } from './PlayerControls';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        Animations.create(this)
        ObjectAnimations.create(this)

        this.priest = new PlayerControls(this, 120,100)

        this.cameras.main.startFollow(this.priest,true,1,1)
        this.cameras.main.setDeadzone(50, 20);

        const testMap = this.make.tilemap({ key: "fantasyTest" });

        const ground = testMap.addTilesetImage("ground", "groundtiles", 16,16);

        const firstLayer = testMap.createLayer("ground", ground)
        firstLayer.depth = 1;

        firstLayer.setCollisionByProperty({ collides: true });

        this.physics.add.collider(this.priest, [
            firstLayer
        ])

        this.fire1 = this.add.sprite(58,50,"fire")
        this.fire1.depth = 2
        this.fire1.anims.play("firePlay")

        this.fire2 = this.add.sprite(198,50,"fire")
        this.fire2.depth = 2
        this.fire2.anims.play("firePlay")

       
    }

    update() {
        this.priest.update()
    }
}
