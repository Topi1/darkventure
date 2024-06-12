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

        this.lights.enable()
        this.lights.enable().setAmbientColor(0x070708);

        this.priest = new PlayerControls(this, 120,300)
        this.priest.setPipeline("Light2D")

        this.cameras.main.startFollow(this.priest,true,1,1)
        this.cameras.main.setDeadzone(50, 20);

        const testMap = this.make.tilemap({ key: "fantasyTest" });

        const ground = testMap.addTilesetImage("ground", "groundtiles", 16,16);

        const firstLayer = testMap.createLayer("ground", ground).setPipeline("Light2D")
        firstLayer.depth = 1;

        firstLayer.setCollisionByProperty({ collides: true });

        this.physics.add.collider(this.priest, [
            firstLayer
        ])

        this.fire1 = this.add.sprite(58,50,"fire")
        this.fire1.depth = 2
        this.fire1.anims.play("firePlay")
        this.light1 = this.lights.addLight(58,50,130)

        this.fire2 = this.add.sprite(198,50,"fire")
        this.fire2.depth = 2
        this.fire2.anims.play("firePlay")
        this.light2 = this.lights.addLight(198,50,130)

        this.fire3 = this.add.sprite(58,205,"fire")
        this.fire3.depth = 2
        this.fire3.anims.play("firePlay")
        this.light3 = this.lights.addLight(58,205,130)

        this.fire4 = this.add.sprite(198,205,"fire")
        this.fire4.depth = 2
        this.fire4.anims.play("firePlay")
        this.light4 = this.lights.addLight(198,205,130)

       
    }

    update() {
        this.priest.update()
    }
}
