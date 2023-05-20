function bigger() {
  document.getElementById("fancify-text").style.fontSize = "2em";
}
function fancify() {
  let text = document.getElementById("fancify-text");
  text.style.fontWeight = "bold";
  text.style.color = "blue";
  text.style.textDecoration = "underline";
}
function boring() {
  let text = document.getElementById("fancify-text");
  text.style.fontWeight = "400";
  text.style.color = "black";
  text.style.textDecoration = "none";
}
function moo() {
  let text = document.getElementById("fancify-text");
  var UppercaseText = text.value.toUpperCase();
  text.value = UppercaseText;
  var parts = text.value.split(".");
  text.value = parts.join("-Moo.");
}
