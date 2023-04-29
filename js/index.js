class Enemy {
    constructor(row, col) {
      this.row = row;
      this.col = col;
      this.elem = document.createElement("div");
      this.elem.classList.add("enemy");
      this.elem.style.top = this.row * 60 + "px";
      this.elem.style.left = this.col * 60 + "px";
    }
  
    moveRight() {
      this.col += 1;
      this.elem.style.left = this.col * 60 + "px";
    }
  
    moveLeft() {
      this.col -= 1;
      this.elem.style.left = this.col * 60 + "px";
    }
  
    isAtLeftEdge() {
      return this.col === 0;
    }
  
    isAtRightEdge() {
      return this.col === 6;
    }
  
    getElem() {
      return this.elem;
    }
  }
  
  class Game {
    constructor(numRows, numCols) {
      this.container = document.querySelector(".container");
      this.enemies = [];
      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          const enemy = new Enemy(i, j);
          this.container.appendChild(enemy.getElem());
          this.enemies.push(enemy);
        }
      }
      this.direction = 1;
      this.animateEnemies = this.animateEnemies.bind(this);
    }
  
    animateEnemies() {
      for (let i = 0; i < this.enemies.length; i++) {
        const enemy = this.enemies[i];
        if (enemy.col === 6 && this.direction === 1) {
          this.direction = -1;
          enemy.row += 1;
        } else if (enemy.col === 0 && this.direction === -1) {
          this.direction = 1;
          enemy.row += 1;
        }
        if (this.direction === 1) {
          enemy.moveRight();
        } else {
          enemy.moveLeft();
        }
        enemy.elem.style.top = enemy.row * 60 + "px";
      }
    }
  
    startGame() {
      setInterval(this.animateEnemies, 250);
    }
  }
  
  const game = new Game(5, 7);
  game.startGame();
  