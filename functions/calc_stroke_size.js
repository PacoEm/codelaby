const view_strokes = document.getElementById("per_cent_strokes");
const strokes_container = document.getElementById("strokes_viewport");

// =================================================================
// ================ Function CALCULATE_STROKE_SIZE =================
// =================================================================
//
// Takes 2 ints in argument:
// 1 - the permitted dstrokes of the level
// 2 - the number of strokes played
// Returns nothing

export function Calculate_stroke_size(permit_strokes, strokes_played) {
  let one_stroke = strokes_container.offsetHeight / permit_strokes;
  let strokes_to_substract = one_stroke * strokes_played;
  view_strokes.style.height =
    strokes_container.offsetHeight - strokes_to_substract + "px";
}
