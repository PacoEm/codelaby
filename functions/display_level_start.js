const starter = document.getElementById("start_level");

export function Start_infos(level_number, permit_strokes) {
  starter.textContent = `COMPLÉTEZ LE NIVEAU ${
    level_number + 1
  } EN ${permit_strokes} COUPS`;
  setTimeout(() => {
    starter.textContent = "";
  }, 3000);
}
