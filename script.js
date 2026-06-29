function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

/* SEARCH FILTER */
document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const rows = document.querySelectorAll("table.filterable tr");

  rows.forEach((row, i) => {
    if (i === 0) return;
    row.style.display =
      row.innerText.toLowerCase().includes(value) ? "" : "none";
  });
});
