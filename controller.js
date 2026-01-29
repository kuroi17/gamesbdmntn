// Keyboard controls
export const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});

// Draw the court
export function drawCourt(ctx) {
  // Ground
  ctx.fillStyle = "#27ae60";
  ctx.fillRect(0, 550, 800, 50);

  // Net
  ctx.fillStyle = "#d2d6d7";
  ctx.fillRect(395, 400, 10, 150);
}

// Update player movement
export function updatePlayer(player, canvas, keys) {
  // Horizontal movement (WASD + Arrow keys)
  if (keys["a"] || keys["arrowleft"]) {
    player.x -= player.speed;
  }
  if (keys["d"] || keys["arrowright"]) {
    player.x += player.speed;
  }
  
  // Space bar for jump
  if (keys[" "] && !player.jumping) {
    player.velocityY = -15;
    player.jumping = true;
    keys[" "] = false; // Prevent continuous jumping
  }

  // Gravity and jumping
  player.velocityY += 0.8; // gravity
  player.y += player.velocityY;

  // Ground collision
  if (player.y >= 490) {
    // 550 (ground) - 60 (player height)
    player.y = 490;
    player.velocityY = 0;
    player.jumping = false;
  }

  // Keep player in bounds
  if (player.x < 0) player.x = 0;
  if (player.x > canvas.width - player.width)
    player.x = canvas.width - player.width;
}

