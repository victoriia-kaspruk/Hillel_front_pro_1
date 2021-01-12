window.addEventListener("load", function () {
  var h = 120;
  var step = 100;
  var left = 300;
  var top = 500;
  var width = 100;
  var height = 100;
  var isSit = false;

  const block = document.querySelector(".block");
  block.style.bottom = `${top}px`;
  block.style.left = `${left}px`;
  block.style.transition = "all 0.2s";

  document.addEventListener("keydown", (event) => {
    if (event.code == "Space" && !isSit) {
      block.style.bottom = `${top + h}px`;
    }
    if (event.code == "ArrowDown" && !isSit) {
      top = top - step;
      block.style.bottom = `${top}px`;
    }
    if (event.code == "ArrowLeft") {
      left = left - step;
      block.style.left = `${left}px`;
    }
    if (event.code == "ArrowUp" && !isSit) {
      top = top + step;
      block.style.bottom = `${top}px`;
    }
    if (event.code == "ArrowRight") {
      left = left + step;
      block.style.left = `${left}px`;
    }
    if (event.code == "ControlLeft" || event.code == "ControlRight") {
      block.style.height = `${height - height * 0.4}px`;
      block.style.width = `${width + width * 0.15}px`;
      isSit = true;
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.code == "Space") {
      block.style.bottom = `${top}px`;
    }
    if (event.code == "ControlLeft" || event.code == "ControlRight") {
      block.style.height = `100px`;
      block.style.width = `100px`;
      isSit = false;
    }
  });
});
