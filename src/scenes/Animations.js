export default class Animations {
    static create(scene) {

            const addAnimation = (config) => {
                if (!scene.anims.exists(config.key)) {
                    scene.anims.create(config)
                }
            }

            //WARRIOR

            addAnimation({
                key: 'warWalkDown',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('warrior', { start: 1, end: 4 }),
                frameRate: 3,
                repeat: -1  // Repeat indefinitely
            });
            addAnimation({
                key: 'warWalkUp',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('warrior', { start: 5, end: 8 }),
                frameRate: 3,
                repeat: -1  // Repeat indefinitely
            });
            addAnimation({
                key: 'warWalkSide',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('warrior', { start: 9, end: 10 }),
                frameRate: 3,
                repeat: -1  // Repeat indefinitely
            });



            //MAGUS

            addAnimation({
                key: 'magusWalkDown',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('magus', { start: 1, end: 4 }),
                frameRate: 3,
                repeat: -1  // Repeat indefinitely
            });
            addAnimation({
                key: 'magusWalkUp',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('magus', { start: 5, end: 8 }),
                frameRate: 3,
                repeat: -1  // Repeat indefinitely
            });
            addAnimation({
                key: 'magusWalkSide',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('magus', { start: 9, end: 10 }),
                frameRate: 3,
                repeat: -1  // Repeat indefinitely
            });

            //PRIEST

            addAnimation({
                key: 'priestWalkDown',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('priest', { start: 1, end: 4 }),
                frameRate: 3,
                repeat: -1  // Repeat indefinitely
            });
            addAnimation({
                key: 'priestWalkUp',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('priest', { start: 5, end: 8 }),
                frameRate: 3,
                repeat: -1  // Repeat indefinitely
            });
            addAnimation({
                key: 'priestWalkSide',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('priest', { start: 17, end: 18 }),
                frameRate: 3,
                repeat: -1  // Repeat indefinitely
            });

        }
    }       