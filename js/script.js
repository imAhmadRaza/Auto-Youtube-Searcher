let url = "https://www.youtube.com/results?search_query=";

const searchTermInp = document.getElementById("searchTermInp");
const searchBtn = document.getElementById("searchBtn");
const openGoogle = document.getElementById("openGoogle");
const openYoutube = document.getElementById("openYoutube");
const openFacebook = document.getElementById("openFacebook");
const openTwitter = document.getElementById("openTwitter");
const openInstagram = document.getElementById("openInstagram");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let searchTerm = searchTermInp.value.split(" ").join("+");
  url += searchTerm;
  window.open(url, "_blank");
  searchTermInp.value = "";
  url = "https://www.youtube.com/results?search_query=";
});

openGoogle.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.google.com/", "_blank");
});
openYoutube.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.youtube.com/", "_blank");
});
openFacebook.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.facebook.com/", "_blank");
});
openTwitter.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.twitter.com/", "_blank");
});
openInstagram.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.instagram.com/", "_blank");
});
