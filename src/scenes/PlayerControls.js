

export class PlayerControls extends Phaser.Physics.Arcade.Sprite {


    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        let selectedCharacter = localStorage.getItem('selectedCharacter') || 'priest';
        this.setupCharacter(selectedCharacter);
        
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

        
        this.scene.game.events.on('characterChanged', this.updateCharacterSprite, this);
        //this.scene.registry.events.on('changedata-currentCharacter', this.handleCharacterChange, this);
        
        
    }

    handleCharacterChange(parent, value) {
        this.updateCharacterSprite(value);
    }

    setupCharacter(character) {
        this.updateCharacterSprite(character);
        // Set up the initial animations and other character-specific settings
    }

    updateCharacterSprite(character) {
        console.log("Received character change to: " + character);
        switch (character) {
            case 'priest':
                this.setTexture('priest',0);
                this.currentWalkUp = "priestWalkUp"
                this.currentWalkDown = "priestWalkDown"
                this.currentWalkSide = "priestWalkSide"   
                break;
            case 'magus':
                this.setTexture('magus',0);
                this.currentWalkUp = "magusWalkUp";
                this.currentWalkDown = "magusWalkDown";
                this.currentWalkSide = "magusWalkSide";
                break;
            case 'warrior':
                this.setTexture('warrior',0);
                this.currentWalkUp = "warWalkUp";
                this.currentWalkDown = "warWalkDown";
                this.currentWalkSide = "warWalkSide";
                break;
        }
        this.anims.play(this.currentWalkSide, true);
    }


    update() {
       
        this.setVelocity(0);

            // Horizontal movement
        if (this.keys.a.isDown) {
            this.setVelocityX(-this.speed);
            this.setFlipX(true); // Flip sprite to face left
            this.anims.play(this.currentWalkSide, true); // '
        } else if (this.keys.d.isDown) {
            this.setVelocityX(this.speed);
            this.setFlipX(false); // No flip, sprite faces right
            this.anims.play(this.currentWalkSide, true);
        } else {

                // Vertical movement
        if (this.keys.w.isDown) {
            this.setVelocityY(-this.speed);
            this.anims.play(this.currentWalkUp, true);
        } else if (this.keys.s.isDown) {
            this.setVelocityY(this.speed);
            this.anims.play(this.currentWalkDown, true);
        }

        


        }


            /// Check if no movement keys are pressed to stop animations and reset texture
        if (!this.keys.a.isDown && !this.keys.d.isDown && 
            !this.keys.w.isDown && !this.keys.s.isDown) {
            this.anims.stop(); // Stop all animations
            this.setFrame(0); // Set to default frame
        }


    }


}