let counterLabel = document.getElementById("counter");
let images = document.getElementsByClassName("img");

let clicks = new Map();
let timers = new Map();

let score = 0;

for (let image of images) {
  clicks.set(image, 0);
  timers.set(
    image,
    setInterval(() => {
      for (let image of images) {
        let randomTop = rnd(0, 25);
        let randomLeft = rnd(0, 25);
        image.style.left = randomLeft + "%";
        image.style.top = randomTop + "%";
      }
    }, 1000)
  );
  image.addEventListener("click", () => {
    console.log("Click detected");
    clicks.set(image, clicks.get(image) + 1);
    score++;
    if (clicks.get(image) == 3) {
      image.style.display = "none";
      clearInterval(timers.get(image));
    }
    counterLabel.innerHTML = "Score: " + score;
  });
}

function rnd(min, max) {
  return Math.random() * (max - min) + min;
}

let timer = setInterval(() => {
  for (let image of images) {
    let randomTop = rnd(0, 50);
    let randomLeft = rnd(0, 50);
    image.style.left = randomLeft + "%";
    image.style.top = randomTop + "%";
  }
}, 1000);
