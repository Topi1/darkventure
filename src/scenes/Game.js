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

        

        

        const testMap = this.make.tilemap({ key: "fantasyTest" });

        const ground = testMap.addTilesetImage("ground", "groundtiles", 16,16);

        const firstLayer = testMap.createLayer("ground", ground).setPipeline("Light2D")
        firstLayer.depth = 1;

        firstLayer.setCollisionByProperty({ collides: true });

        this.physics.add.collider(this.priest, [
            firstLayer
        ])


        this.cameras.main.startFollow(this.priest,true,0.5,0.5)
        this.cameras.main.setDeadzone(50, 20);
        this.cameras.main.setBounds(0, 0, testMap.widthInPixels, testMap.heightInPixels);


        this.fire1 = this.add.sprite(58,50,"fire")
        this.fire1.depth = 2
        this.fire1.anims.play("firePlay")
        this.light1 = this.lights.addLight(58,50,100)

        this.fire2 = this.add.sprite(198,50,"fire")
        this.fire2.depth = 2
        this.fire2.anims.play("firePlay")
        this.light2 = this.lights.addLight(198,50,100)

        this.fire3 = this.add.sprite(58,205,"fire")
        this.fire3.depth = 2
        this.fire3.anims.play("firePlay")
        this.light3 = this.lights.addLight(58,205,100)

        this.fire4 = this.add.sprite(198,205,"fire")
        this.fire4.depth = 2
        this.fire4.anims.play("firePlay")
        this.light4 = this.lights.addLight(198,205,100)

        this.campfire1 = this.add.sprite(70,320,"campfire").setPipeline("Light2D")
        this.campfire1.depth = 2
        this.campfire1.anims.play("campfire")
        this.light5 = this.lights.addLight(70,320,100)

       
    }

    update() {
        this.priest.update()
    }
}
