export default class ObjectAnimations {
    static create(scene) {

            const addAnimation = (config) => {
                if (!scene.anims.exists(config.key)) {
                    scene.anims.create(config)
                }
            }

            addAnimation({
                key: 'firePlay',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('fire', { start: 0, end: 2 }),
                frameRate: 5,
                repeat: -1  // Repeat indefinitely
            });

            addAnimation({
                key: 'campfire',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('campfire', { start: 0, end: 2 }),
                frameRate: 5,
                repeat: -1  // Repeat indefinitely
            });
            

        }
    }       