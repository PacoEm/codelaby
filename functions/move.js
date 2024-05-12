import { Display_level } from "./display_level.js";

// +++++++++++++++++++++++++++++
// +++++++++ TEST SON ++++++++++
// +++++++++++++++++++++++++++++

// =================================================================
// ======================== Function MOVE ==========================
// =================================================================
//
// Takes 1 array argument: the level to display
// Returns the number of strokes played

export function Move(level) {
  // === START POSITION OF THE USER ===
  let u_row = 10;
  let u_col = 1;

  // === REPLACEMENT OF THE NEXT ITEM BY THE USER'S NUMBER (1) ===
  document.addEventListener("keydown", (e) => {
    // === USER'S CONTROL ===
    //
    // === UP ===
    if (e.key === "z") {
      if (level[u_row - 1][u_col] === 0 || level[u_row - 1][u_col] === 2) {
        u_row -= 1;
        level[u_row][u_col] = 1;
      }
      //
      // === DOWN ===
    } else if (e.key === "s") {
      if (level[u_row + 1][u_col] === 0 || level[u_row + 1][u_col] === 2) {
        u_row += 1;
        level[u_row][u_col] = 1;
      }
      //
      // === LEFT ===
    } else if (e.key === "q") {
      if (level[u_row][u_col - 1] === 0 || level[u_row][u_col - 1] === 2) {
        u_col -= 1;
        level[u_row][u_col] = 1;
      }
      //
      // === RIGHT ===
    } else if (e.key === "d") {
      if (level[u_row][u_col + 1] === 0 || level[u_row][u_col + 1] === 2) {
        u_col += 1;
        level[u_row][u_col] = 1;
      }
    }

    // === DISPLAY THE LEVEL MODIFIED ===

    Display_level(level);
  });
}
