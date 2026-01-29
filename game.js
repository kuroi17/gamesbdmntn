// Get canvas and context
import { drawCourt, updatePlayer, keys } from "./controller.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// the player object
const player = {
  x: 100,
  y: 500,
  width: 30,
  height: 60,
  color: "#e74c3c",
  speed: 5,
  velocityY: 0,
  jumping: false,
};

// Draw player by using point object
function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Main game loop
function gameLoop() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update game state
  updatePlayer(player, canvas, keys);

  // Draw everything
  drawCourt(ctx);
  drawPlayer();

  // Continue loop
  requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
