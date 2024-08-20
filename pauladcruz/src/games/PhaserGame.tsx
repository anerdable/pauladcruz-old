import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import './PhaserGame.css';

const SimplePhaserGame: React.FC = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);

  let player: Phaser.Physics.Arcade.Sprite;
  let cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  function preload(this: Phaser.Scene) {
    this.load.spritesheet('dude', 'https://labs.phaser.io/assets/sprites/dude.png', {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image('star', 'https://labs.phaser.io/assets/sprites/star.png');
  }

  function create(this: Phaser.Scene) {
    this.cameras.main.setBackgroundColor('#FEF3F5');
  
    player = this.physics.add.sprite(752, 200, 'dude');
    player.setCollideWorldBounds(true);
  
    player.setSize(32, 48);
    player.setOffset(0, 0);
  
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
  
    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20,
    });
  
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });
  
    if (this.input.keyboard) {
      cursors = this.input.keyboard.createCursorKeys();
    }
  }  

  function update(this: Phaser.Scene) {
    if (cursors?.left?.isDown) {
      player.setVelocityX(-160);
      player.anims.play('left', true);
    } else if (cursors?.right?.isDown) {
      player.setVelocityX(160);
      player.anims.play('right', true);
    } else {
      player.setVelocityX(0);
      player.anims.play('turn');
    }

    if ((player.body?.blocked.down || player.body?.touching.down) && cursors.up.isDown) {
      player.setVelocityY(-250); 
    }
  }  

  useEffect(() => {
    if (gameContainerRef.current) {
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: 100,    
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { x: 0, y: 600 },
            debug: false,
          },
        },
        scene: {
          preload,
          create,
          update,
        },
        parent: gameContainerRef.current,
      };

      const game = new Phaser.Game(config);

      return () => {
        game.destroy(true);
      };
    }
  });

  return <div ref={gameContainerRef} className="game-container"></div>;
};

export default SimplePhaserGame;
