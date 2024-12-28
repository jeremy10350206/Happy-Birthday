// 播放背景音樂
const music = document.getElementById("birthday-music");
music.play();

// 生成氣球
const balloonContainer = document.getElementById("balloon-container");

for (let i = 0; i < 20; i++) {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.animationDuration = `${3 + Math.random() * 2}s`;

  balloon.addEventListener("click", () => {
    balloon.remove();
    alert("祝你生日快樂！願你的每一天都充滿喜悅！");
  });

  balloonContainer.appendChild(balloon);
}
