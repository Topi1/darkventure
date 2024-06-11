export default class Animations {
    static create(scene) {

            const addAnimation = (config) => {
                if (!scene.anims.exists(config.key)) {
                    scene.anims.create(config)
                }
            }

            addAnimation({
                key: 'walkDown',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('priest', { start: 0, end: 3 }),
                frameRate: 3,
                repeat: -1  // Repeat indefinitely
            });
            addAnimation({
                key: 'walkUp',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('priest', { start: 4, end: 7 }),
                frameRate: 3,
                repeat: -1  // Repeat indefinitely
            });
            addAnimation({
                key: 'walkSide',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('priest', { start: 16, end: 19 }),
                frameRate: 3,
                repeat: -1  // Repeat indefinitely
            });

        }
    }       