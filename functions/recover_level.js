import { levels_array } from "../levels/level_1.js";

// =================================================================
// ================ Function RECOVER_CURRENT_LEVEL =================
// =================================================================
//
// Takes 1 int argument: the index of the level stocked in the array levels_array
// Returns an array : the entiere level selected

export function Recover_current_level(level_number) {
  let current_level = levels_array[level_number];
  return current_level;
}
