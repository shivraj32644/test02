// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {
  getData,
  navbar,
  newsTemplate,
  sidebar,
} from "../components/allcomponets.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("search_input").addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName === "Enter") {
    let val = document.getElementById("search_input").value;
    localStorage.setItem("value", val);
    window.location = "./search.html";
  }
});
let val = localStorage.getItem("value");
let url = `https://masai-api.herokuapp.com/news?q=${val}`;

getData(url).then((res) => {
  displaydata(res.articles);
});

let displaydata = (data) => {
  document.getElementById("results").innerHTML = "";
  data.map((element, index) => {
    let { urlToImage, description, title } = element;
    let div = document.createElement("div");
    div.setAttribute("class", "news");

    div.innerHTML = newsTemplate(urlToImage, title, description);
    div.addEventListener("click", () => {
      getCompleteData(element, index);
    });

    document.getElementById("results").append(div);
  });
};

let getCompleteData = (element, index) => {
  localStorage.setItem("news", JSON.stringify(element));
  window.location = "./news.html";
};
