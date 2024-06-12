

export class PlayerControls extends Phaser.Physics.Arcade.Sprite {


    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        

        
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setOrigin(0.5, 0.5);
        this.body.setAllowGravity(false);
        

        this.depth = 8;
        this.scale = 1;

        this.setSize(16, 10);
        this.body.setOffset(8, 21);
        
        
        this.scene = scene;
        this.speed = 45;
        

        this.keys = {
            w: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            a: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            s: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            d: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };
        
        
    }




    update() {
       
        this.setVelocity(0);

            // Horizontal movement
        if (this.keys.a.isDown) {
            this.setVelocityX(-this.speed);
            this.setFlipX(true); // Flip sprite to face left
            this.anims.play('walkSide', true); // '
        } else if (this.keys.d.isDown) {
            this.setVelocityX(this.speed);
            this.setFlipX(false); // No flip, sprite faces right
            this.anims.play('walkSide', true);
        } else {

                // Vertical movement
        if (this.keys.w.isDown) {
            this.setVelocityY(-this.speed);
            this.anims.play('walkUp', true);
        } else if (this.keys.s.isDown) {
            this.setVelocityY(this.speed);
            this.anims.play('walkDown', true);
        }

        


        }


            /// Check if no movement keys are pressed to stop animations and reset texture
        if (!this.keys.a.isDown && !this.keys.d.isDown && 
            !this.keys.w.isDown && !this.keys.s.isDown) {
            this.anims.stop(); // Stop all animations
            this.setTexture('priest', 0); // Set to default frame
        }


    }


}