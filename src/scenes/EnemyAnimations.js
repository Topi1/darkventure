export default class EnemyAnimations {
    static create(scene) {

            const addAnimation = (config) => {
                if (!scene.anims.exists(config.key)) {
                    scene.anims.create(config)
                }
            }

            addAnimation({
                key: 'shroomMove',  // The key for this animation
                frames: scene.anims.generateFrameNumbers('shroom', { start: 0, end: 7 }),
                frameRate: 6.5,
                repeat: -1  // Repeat indefinitely
            });

           
            

        }
    }       