// =================================================================
// ==================== Function DISPLAY_LEVEL =====================
// =================================================================
//
// Takes 1 array argument: the level to display
// Returns nothing

export function Display_level(level) {
  // === THE DIV WHERE TO DISPLAY THE GRID ===
  const g_content = document.getElementById("content");

  // === THE NUMBER OF DIVS PER ROW ===
  const grid_width = 12;

  // THE ARRAY THAT WILL RECEIVE THE CREATED DIVS
  let d_grid = [];

  // === INITIALIZE D_GRID WITH DIVS TO DISPLAY ===
  for (let i = 0; i < grid_width; i++) {
    level[i].forEach((elt) => {
      let nbr_div;
      //
      // === NEUTRAL DIVS ===
      if (elt === 0) {
        nbr_div = 0;
        d_grid.push(`<div class="grid_div_${nbr_div}"></div>`);
      }
      //
      //  === USER'S DIVS ===
      else if (elt === 1) {
        nbr_div = 1;
        d_grid.push(`<div class="grid_div_${nbr_div}"></div>`);
      }
      //
      //  === EXIT DIV ===
      else if (elt === 2) {
        nbr_div = 2;
        d_grid.push(`<div class="grid_div_${nbr_div}"></div>`);
      }
      //
      // === OBSTACLES DIVS ===
      else if (elt === 3) {
        nbr_div = 3;
        d_grid.push(`<div class="grid_div_${nbr_div}"></div>`);
      }

      //
      // EXTERNAL WALLS DIVS
      else {
        nbr_div = 4;
        d_grid.push(`<div class="grid_div_${nbr_div}"></div>`);
      }
    });
  }

  // REPLACEMENT OF THE CONTENT OF THE DIV 'CONTENT'
  g_content.innerHTML = '<div id="content""></div>';

  // === DISPLAY OF THE GRID ===
  for (let i = 0; i < d_grid.length; i++) {
    g_content.innerHTML += d_grid[i];
  }
}
