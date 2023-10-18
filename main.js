document.getElementById("btn").addEventListener("click", btnClicked);

//calculation
function btnClicked() {
  let r = +document.getElementById("r-in").value;
  let h = +document.getElementById("h-in").value;

  let v = Math.PI * (r * r) * h;
  let sa = 2 * Math.PI * (r * r) + 2 * Math.PI * r * h;

  document.getElementById("v-out").innerHTML = v;
  document.getElementById("sa-out").innerHTML = sa;
}
