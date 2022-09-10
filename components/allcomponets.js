let navbar = () => {
  return `
    <a href="./index.html">HOME</a>
    <input type="text" id="search_input">`;
};

let sidebar = () => {
  return `
    <li id="in">india</li>
    <li id="ch">china</li>
    <li id="us">usa</li>
    <li id="uk">uk</li>
    <li id="nz">Newzeland</li>`;
};

let getData = async (url) => {
  let response = await fetch(url);
  let result = await response.json();
  return result;
};

let newsTemplate = (url, title, description) => {
  return `<img src="${url}" alt="" />
    <div>
    <h3>${title}</h3>
    <p>${description}</p>
    </div>`;
};
export { navbar, sidebar, getData, newsTemplate };
