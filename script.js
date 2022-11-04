window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

function removeTransition(e) {
  console.log(e); //沒綁到line 18 :( 為何放在html <script>裡可以，這裡不行//找到原因了!!! derfer!!!

  console.log(this);
  console.log(e.target);
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// *****Finalized code***********//
// function removeTransition(e) {
//   if (e.propertyName !== "transform") return;
//   e.target.classList.remove("playing");
// }

// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//   if (!audio) return;

//   key.classList.add("playing");
//   audio.currentTime = 0;
//   audio.play();
// }

// const keys = Array.from(document.querySelectorAll(".key"));
// keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// window.addEventListener("keydown", playSound);
