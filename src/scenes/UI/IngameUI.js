import { Scene } from 'phaser';


export class IngameUI extends Scene {
    constructor() {
        super({ key: 'IngameUI', active: true });
        
    }

    preload() {
        this.load.image("ingameBorders", "assets/ui/ingameBorders.png")
        this.load.image("mainUI", "assets/ui/mainUI.png")
    }

    create() {
        // border

        this.borders = this.add.sprite(128,90,"ingameBorders").setOrigin(0.5,0.5)
        this.borders.depth = 10

        this.mainUI = this.add.sprite(287,90,"mainUI").setOrigin(0.5,0.5)
        this.mainUI.depth = 11

       

        
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


