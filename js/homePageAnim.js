let gameElements = document.getElementsByClassName("game-element");

for (let i = 0; i < gameElements.length; i++) {
  let gameElm = gameElements[i];

  gameElm.addEventListener("animationend", () => {
    console.log(gameElm.src.split("img/")[1]);
    switch (gameElm.src.split("img/")[1]) {
      case "Final%20Icons/Rock.png":
        gameElm.src = "img/Final Icons/Paper.png";
        break;
      case "Final%20Icons/Paper.png":
        gameElm.src = "img/Final Icons/Scissors.png";
        break;
      case "Final%20Icons/Scissors.png":
        gameElm.src = "img/Final Icons/Rock.png";
        break;
    }
    gameElm.classList.remove("game-element-animation");
    setTimeout(() => {
      gameElm.classList.add("game-element-animation");
    }, 10);
  });
}
