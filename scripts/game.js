import { Display_level } from "../functions/display_level.js";
import { Move } from "../functions/move.js";
import { permitted_strokes } from "../functions/permitted_strokes.js";
import { Succes_test } from "../functions/win_or_lose.js";
import { user_location } from "../functions/user_location.js";
import { levels_array } from "../levels/level_1.js";
import { Recover_current_level } from "../functions/recover_level.js";
import { Calculate_stroke_size } from "../functions/calc_stroke_size.js";
import { Start_infos } from "../functions/display_level_start.js";
import { Congratulate } from "../functions/display_end.js";

const start_image = document.getElementById("screen");
const level_infos = document.getElementById("start_level");

// === GAME CONTAINER EMPLACEMENT ===
let game_content = document.getElementById("content");

// === COUNTER OF TRIALS ===
let trial_number = 0;

// === LEVEL'S NUMBER TO WORK ON ===
let level_number = 0;

// === LEVEL RECOVERING ===
let current_level;
current_level = Recover_current_level(level_number);

// === CURRENT LEVEL COPY ===
let level_copy = [];
current_level.forEach((element) => {
  level_copy.push(element.slice());
});

// === RECOVERING STROKES PERMITTED PER LEVEL===
let permit_strokes;
permit_strokes = permitted_strokes[level_number];

// === NUMBER OF STROKES PLAYED ===
let strokes_played = 0;

// === HAVE THE WINNER WON OR LOSED ? ===
let winner;

// ++++++++++++++++++++++++++++++++++++++++
start_image.style.visibility = "visible";
level_infos.style.visibility = "hidden";
// ++++++++++++++++++++++++++++++++++++++++

// === THE USER CAN BEGIN TO PLAY BY PRESSING THE ECAHP KEY ===
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    start_image.style.visibility = "hidden";
    Display_level(current_level);
    // === IF THE LEVEL STARTS ===
    if (strokes_played === 0 && trial_number === 0) {
      Start_infos(level_number, permit_strokes, winner);
      setTimeout(() => {
        winner = "continue";
      }, 5000);
    }
  }
});

// 2 - INTIAL DISPLAY OF THE LEVEL
game_content.innerHTML = '<div id="content""></div>';

// === USER START POSITION ===
export let u_row = user_location[level_number][0];
export let u_col = user_location[level_number][1];
let level = level_copy;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxx  EVENT LISTENER xxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

document.addEventListener("keydown", (e) => {
  if (start_image.style.visibility === "hidden") {
    // ====================================
    // === VICTORY OR DEFEAT MANAGEMENT ===
    // ====================================

    // === IF THE USER WIN ===
    if (winner === "yes") {
      level_number += 1;
      strokes_played = 0;
      trial_number = 0;

      if (level_number < levels_array.length) {
        current_level = Recover_current_level(level_number);
        level = current_level;
        permit_strokes = permitted_strokes[level_number];

        // === CURRENT LEVEL COPY ===
        level_copy = [];
        current_level.forEach((element) => {
          level_copy.push(element.slice());
        });

        // === USER START POSITION ===
        u_row = user_location[level_number][0];
        u_col = user_location[level_number][1];
        level = level_copy;

        Calculate_stroke_size(permit_strokes, strokes_played);
        Display_level(level);

        // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        // === IF THE LEVEL STARTS ===
        if (trial_number === 0) {
          winner = "";
          Start_infos(level_number, permit_strokes);
          setTimeout(() => {
            winner = "continue";
          }, 5000);
        }
        // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
      } else {
        Congratulate();
      }
    }
    // === IF THE USER LOSE ===
    else if (winner === "no") {
      level = current_level;
      trial_number += 1;

      // === CURRENT LEVEL COPY ===
      level_copy = [];
      current_level.forEach((element) => {
        level_copy.push(element.slice());
      });

      // === USER START POSITION ===
      u_row = user_location[level_number][0];
      u_col = user_location[level_number][1];
      level = level_copy;

      strokes_played = 0;
      Calculate_stroke_size(permit_strokes, strokes_played);
      Display_level(level);
      winner = "continue";
    }
    // === IF THERE REMAINING STROKES TO BE PLAYED ===
    else if (winner === "continue") {
      // ======================
      // === USER'S CONTROL ===
      // ======================

      // === UP ===
      if (e.key === "z") {
        if (level[u_row - 1][u_col] === 0 || level[u_row - 1][u_col] === 2) {
          u_row -= 1;
          strokes_played += 1;
        }
        //
        // === DOWN ===
      } else if (e.key === "s") {
        if (level[u_row + 1][u_col] === 0 || level[u_row + 1][u_col] === 2) {
          u_row += 1;
          strokes_played += 1;
        }
        //
        // === LEFT ===
      } else if (e.key === "q") {
        if (level[u_row][u_col - 1] === 0 || level[u_row][u_col - 1] === 2) {
          u_col -= 1;
          strokes_played += 1;
        }
        //
        // === RIGHT ===
      } else if (e.key === "d") {
        if (level[u_row][u_col + 1] === 0 || level[u_row][u_col + 1] === 2) {
          u_col += 1;
          strokes_played += 1;
        }
      }
      // IF USER HAVE PLAYED ALL THE PERMITTED STROKES
      Calculate_stroke_size(permit_strokes, strokes_played);
      winner = Succes_test(level, strokes_played, permit_strokes);
      level[u_row][u_col] = 1;

      // === DISPLAY THE LEVEL MODIFIED ===
      Display_level(level);
    }
  }
});
