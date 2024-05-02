import { u_row } from "../scripts/game.js";
import { u_col } from "../scripts/game.js";

export function Succes_test(level, strokes_played, permit_strokes) {
  if (strokes_played === permit_strokes) {
    if (level[u_row][u_col] === 2) {
      // === IN CASE OF SUCCES ===
      return "yes";
    } else if (level[u_row][u_col] === 0) {
      // === IN CASE OF DEFEAT ===
      return "no";
    }
  } else if (strokes_played < permit_strokes) {
    // === NEITHER ===
    return "continue";
  }
}
