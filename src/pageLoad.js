import menu from "/src/menu.js";
import about from "/src/about.js";
import contact from "/src/contact.js";
import sandwich from "/src/sandwich.jpeg";

function pageLoad() {
  function makeBtn(btnName, btnPath) {
    const button = document.createElement("button");
    button.id = btnName;
    button.classList = "btn";
    button.textContent = btnName;
    button.addEventListener("click", (event) => {
      const buttons = document.querySelectorAll(".btn");
      console.log(buttons);
      buttons.forEach((btn) => {
        btn.style.borderBottomColor = "rgb(73, 86,76)";
      });
      button.style.borderBottomColor = "black";
      main.firstChild.classList = "invis";
      window.setTimeout(() => {
        main.removeChild(main.firstChild);
        window.setTimeout(() => {
          btnPath.classList = "vis";
        }, 20);
        main.appendChild(btnPath);
      }, 500);
    });
    return button;
  }

  const header = document.createElement("header");
  header.id = "header";

  const headline = document.createElement("h1");
  headline.id = "page-title";
  headline.textContent = "Sandwiches";

  const image = new Image();
  image.src = sandwich;
  image.id = "sandwich-image";
  image.alt = "a picture of a veggie sandwich";

  const nav = document.createElement("div");
  nav.id = "nav";
  nav.appendChild(makeBtn("menu", menu));
  nav.appendChild(makeBtn("contact", contact));
  nav.appendChild(makeBtn("about", about));

  const content = document.getElementById("content");
  const main = document.createElement("div");
  main.id = "main";
  content.appendChild(header);
  header.appendChild(headline);
  header.appendChild(image);
  header.appendChild(nav);
  content.appendChild(main);
  main.appendChild(document.createElement("div"));
}

export default pageLoad;
