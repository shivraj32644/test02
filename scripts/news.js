// Ude Import export (MANDATORY)

import { navbar, sidebar } from "../components/allcomponets.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("search_input").addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName === "Enter") {
    let val = document.getElementById("search_input").value;
    localStorage.setItem("value", val);
    window.location = "./search.html";
  }
});

let newData = JSON.parse(localStorage.getItem("news"));
console.log(newData);

// let displaDetailNews = () => {
let { title, content, urlToImage } = newData;
let div = document.createElement("div");

div.innerHTML = `
    <img src="${urlToImage}" alt="" />
    <h3>${title}</h3>
    <p>${content}</p>`;

document.getElementById("detailed_news").append(div);

// }
