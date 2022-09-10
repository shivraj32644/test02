// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {
  getData,
  navbar,
  newsTemplate,
  sidebar,
} from "../components/allcomponets.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("sidebar").innerHTML = sidebar();

// window
document.getElementById("search_input").addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName === "Enter") {
    let val = document.getElementById("search_input").value;
    localStorage.setItem("value", val);
    window.location = "./search.html";
  }
});

let GetTrendingNews = (url) => {
  getData(url).then((res) => {
    displaydata(res.articles);
  });
};

window.addEventListener("load", () => {
  let url = `https://masai-api.herokuapp.com/news/top-headlines?country=in`;
  GetTrendingNews(url);
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

document.getElementById("in").addEventListener("click", () => {
  let url = `https://masai-api.herokuapp.com/news/top-headlines?country=in`;
  GetTrendingNews(url);
});
document.getElementById("ch").addEventListener("click", () => {
  let url = `https://masai-api.herokuapp.com/news/top-headlines?country=ch`;
  GetTrendingNews(url);
});
document.getElementById("us").addEventListener("click", () => {
  let url = `https://masai-api.herokuapp.com/news/top-headlines?country=us`;
  GetTrendingNews(url);
});
document.getElementById("uk").addEventListener("click", () => {
  let url = `https://masai-api.herokuapp.com/news/top-headlines?country=uk`;
  GetTrendingNews(url);
});
document.getElementById("nz").addEventListener("click", () => {
  let url = `https://masai-api.herokuapp.com/news/top-headlines?country=nz`;
  GetTrendingNews(url);
});
