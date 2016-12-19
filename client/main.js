(() => {
	"use strict";
	try {
		class Test{}
	} catch(e) {
		return alert('Your browser does not support this game! It is recommended you play this game on Google Chrome with the latest version.');
	}
	let hexInt = str => {
		return parseInt(str.replace(/^#/, ''), 16);
	}
	class Tile {
		constructor() {
			this.x = 0;
			this.y = 0;
			this.color = "#FFFFFF";
		}
	}
	let genSampleMap = () => {
		return [
			[new Tile, new Tile, new Tile, new Tile, new Tile],
			[new Tile, new Tile, new Tile, new Tile, new Tile],
			[new Tile, new Tile, new Tile, new Tile, new Tile],
			[new Tile, new Tile, new Tile, new Tile, new Tile],
			[new Tile, new Tile, new Tile, new Tile, new Tile],
			[new Tile, new Tile, new Tile, new Tile, new Tile],
			[new Tile, new Tile, new Tile, new Tile, new Tile],
			[new Tile, new Tile, new Tile, new Tile, new Tile],
			[new Tile, new Tile, new Tile, new Tile, new Tile],
			[new Tile, new Tile, new Tile, new Tile, new Tile],
			[new Tile, new Tile, new Tile, new Tile, new Tile]
		]
	}
	class Game {
		constructor() {
			this.renderer = null;
			this.w = null;
			this.h = null;
			this.map = null;
			this.stage = null;
			this.tileSize = 70;
			this.tileBorderSize = 3;
			this.tileBorderColor = hexInt('#000000');
			this.tiles = [[]];
			// this.tiles = genSampleMap();
			this.size = [
				window.innerWidth,
				window.innerHeight
			];
			this.load = () => {
				if (!window.PIXI) {
					return alert('There was an error loading the game! Make sure you are on the latest version of your browser!');
				} else {
					this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
					game.renderer.view.id = "canvas";
					document.body.appendChild(this.renderer.view);
					this.map = new PIXI.Graphics();
					this.stage = new PIXI.Container();
					this.stage.addChild(this.map);
					requestAnimationFrame(this.beginRendering);
					window.addEventListener('load', game.load);	
				}
			}
			this.resize = () => {
				this.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
				this.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
				this.renderer.resize(this.w, this.h);
			}
			this.beginRendering = () => {
				this.resize();
				this.map.clear();
				var me = this;
				for (var x = 0; x <= this.w; x += this.tileSize) {
					for (var y = 0; y <= this.h; y += this.tileSize) {
						var tileX = 0;
						var tileY = 0;
						if (x !== 0 && y !== 0) {
							tileX = x - this.tileSize;
							tileY = y - this.tileSize;
						}
						if (me.tiles[tileX] !== undefined && me.tiles[tileX][tileY] !== undefined) {
							this.map.lineStyle(this.tileBorderSize, this.tileBorderColor);
				        	this.map.beginFill(hexInt(this.tiles[tileX][tileY].color), 1);
				       		this.map.drawRect(x, y, x + this.tileSize, y + this.tileSize);
						} else {
							this.map.lineStyle(this.tileBorderSize, 0x000000);
				        	this.map.beginFill(0x000000, 1);
				       		this.map.drawRect(x, y, x + this.tileSize, y + this.tileSize);
						}
					}
				}
				this.renderer.render(this.stage);
				requestAnimationFrame(this.beginRendering);
			}
		}
	}
	window.game = null;
	let init = () => {
		game = new Game();
	}
	init();
})();
