import { Scene } from 'phaser';
import EnemyAnimations from '../EnemyAnimations';

export class Fight extends Scene
{
    constructor ()
    {
        super('Fight');
    }

    create ()
    {
        EnemyAnimations.create(this)
      
        this.shroom = this.add.sprite(160,90, "shroom").setOrigin(0.5,0.5)
        this.shroom.anims.play("shroomMove")

       
    }

    update() {
        
    }
}
