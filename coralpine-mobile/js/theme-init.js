// Sets light/dark BEFORE the page draws. Saved choice wins, otherwise follows the visitor's device.
document.documentElement.dataset.theme =
  localStorage.getItem("cp_theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
