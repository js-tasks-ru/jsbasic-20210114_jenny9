/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    const ageCell = row.cells[1];
    const genderCell = row.cells[2];
    const statusCell = row.cells[3];

    if (ageCell.innerText <= 18) {
      row.style.textDecoration = "line-through";
    }

    if (genderCell.innerText === "m") {
      row.classList.add("male");
    }
    if (genderCell.innerText === "f") {
      row.classList.add("female");
    }

    if (statusCell.hasAttribute("data-available")) {
      if (statusCell.getAttribute("data-available") === "true") {
        row.classList.add("available");
      } else {
        row.classList.add("unavailable");
      }
    } else {
      row.setAttribute("hidden");
    }
  }
}

