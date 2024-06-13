import { Scene } from 'phaser';


export class IngameUI extends Scene {
    constructor() {
        super({ key: 'IngameUI', active: true });
        
    }

    preload() {
        this.load.image("ingameBorders", "assets/ui/ingameBorders.png")
        this.load.image("mainUI", "assets/ui/mainUI.png")

        this.load.spritesheet("inventoryBtn", "assets/ui/inventoryBtn.png", {frameWidth: 19, frameHeight: 18})
    }

    create() {
        // border

        this.borders = this.add.sprite(128,90,"ingameBorders").setOrigin(0.5,0.5)
        this.borders.depth = 10

        this.mainUI = this.add.sprite(287,90,"mainUI").setOrigin(0.5,0.5)
        this.mainUI.depth = 11


        //Inventory Button
        this.inventoryButton = this.add.sprite(272, 139, "inventoryBtn").setFrame(0)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => {
            this.toggleInventory();
        })
        .on('pointerover', () => {this.inventoryButton.setFrame(1)})
        .on('pointerout', () => {this.inventoryButton.setFrame(0)});
        this.inventoryButton.depth = 21
        
        
        //this.inventoryText = this.add.bitmapText(525,47,"baseFontUI","Inventory",16).setVisible(false)
        
       

        
    }

    showUI() {
        
    }
    
    hideUI() {
        
    }

    toggleInventory() {
        // Toggle the visibility of the inventory display
        this.inventoryPopup.setVisible(!this.inventoryPopup.visible);
        console.log('Inventory toggled');
    }


    showMain() {
        // Code to display settings, could toggle visibility of a settings panel
        this.popupMenu.toggleVisibility()
        console.log('Main button clicked');
        
    }

    toggleUIInput(enable) {
        this.uiContainer.list.forEach(child => {
            if (child.input && child.setInteractive) {
                child.input.enabled = enable; // Only toggle input if it exists
            }
        });
    }
    


}


