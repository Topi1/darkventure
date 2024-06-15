import { Scene } from 'phaser';


export class IngameUI extends Scene {
    constructor() {
        super({ key: 'IngameUI', active: true });
        
    }

    preload() {
        this.load.bitmapFont('baseFontUI', 'assets/fonts/baseFont_0.png', 'assets/fonts/baseFont.fnt')

        this.load.image("ingameBorders", "assets/ui/ingameBorders.png")
        this.load.image("mainUI", "assets/ui/mainUI.png")
        

        this.load.spritesheet("inventoryBtn", "assets/ui/inventoryBtn.png", {frameWidth: 19, frameHeight: 18})
        this.load.spritesheet("skillsBtn", "assets/ui/skillsBtn.png", {frameWidth: 19, frameHeight: 18})

        this.load.spritesheet("priestPortrait", "assets/portraits/priestPortrait.png", {frameWidth: 44, frameHeight: 26})
        this.load.spritesheet("magusPortrait", "assets/portraits/magusPortrait.png", {frameWidth: 44, frameHeight: 26})
        this.load.spritesheet("warPortrait", "assets/portraits/warPortrait.png", {frameWidth: 44, frameHeight: 26})
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
        
       //Skills Button
       this.skillsButton = this.add.sprite(297, 139, "skillsBtn").setFrame(0)
       .setInteractive({ useHandCursor: true })
       .on('pointerdown', () => {
           this.toggleInventory();
       })
       .on('pointerover', () => {this.skillsButton.setFrame(1)})
       .on('pointerout', () => {this.skillsButton.setFrame(0)});
       this.skillsButton.depth = 21



       //PORTRAITS

       //Priest Portrait
       this.priestPortrait = this.add.sprite(285, 112, "priestPortrait").setFrame(0)
       .setInteractive({ useHandCursor: true })
       .on('pointerdown', () => {
           this.toggleInventory();
       })
       .on('pointerover', () => {this.priestPortrait.setFrame(1)})
       .on('pointerout', () => {this.priestPortrait.setFrame(0)});
       this.priestPortrait.depth = 21

       //this.priestName = this.add.bitmapText(280,112,"baseFontUI","Aserius",16)
       //this.priestName.scale = 0.5
       //this.priestName.depth = 22

       //Magus Portrait
       this.magusPortrait = this.add.sprite(285, 82, "magusPortrait").setFrame(2)
       .setInteractive({ useHandCursor: true })
       .on('pointerdown', () => {
           this.toggleInventory();
       })
       .on('pointerover', () => {this.magusPortrait.setFrame(3)})
       .on('pointerout', () => {this.magusPortrait.setFrame(2)});
       this.magusPortrait.depth = 21

       //War Portrait
       this.warPortrait = this.add.sprite(285, 52, "warPortrait").setFrame(0)
       .setInteractive({ useHandCursor: true })
       .on('pointerdown', () => {
           this.toggleInventory();
       })
       .on('pointerover', () => {this.warPortrait.setFrame(1)})
       .on('pointerout', () => {this.warPortrait.setFrame(0)});
       this.warPortrait.depth = 21



        
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


