
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  let x = 100;
  let y = 100;
  let dx = 2;
  let dy = 2;

  const img = new Image();
  img.src = "ship.png";

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, 50, 50);
    x += dx;
    y += dy;
    if (x > canvas.width - 50 || x < 0) dx = -dx;
    if (y > canvas.height - 50 || y < 0) dy = -dy;
    requestAnimationFrame(draw);
  }

  img.onload = () => draw();
});
