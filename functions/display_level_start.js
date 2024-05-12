const starter = document.getElementById("start_level");

function sound() {
  const audio = new Audio();
  audio.src = "../assets/sounds/one_beep.mp3";
  audio.play();
}

export function Start_infos(level_number, permit_strokes) {
  starter.style.visibility = "visible";
  let i = 0;

  function Text(level_number, permit_strokes) {
    let text = `Complétez le niveau ${
      level_number + 1
    }/5 en ${permit_strokes} coups`;
    return text;
  }

  let text = Text(level_number, permit_strokes);

  function loop(text) {
    starter.textContent += text[i];
    if (text[i] != " ") {
      sound();
    }
    i++;

    return text[i];
  }

  function display_loop() {
    let clear_loop = setInterval(() => {
      loop(text);
      if (i === text.length) {
        clearInterval(clear_loop);
      }
    }, 100);
  }

  display_loop();

  setTimeout(() => {
    starter.textContent = "";
    starter.style.visibility = "hidden";
  }, 5000);
}
