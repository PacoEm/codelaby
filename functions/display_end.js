export function Congratulate() {
  let end_screen = document.getElementById("end_screen");
  end_screen.style.visibility = "visible";
  setTimeout(() => {
    // window.close();
    console.log("bravo !!!");
  }, 3000);
}
