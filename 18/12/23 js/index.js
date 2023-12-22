const content = document.getElementById("content");

initialiseWebsite();
loadHome();

function initialiseWebsite () {
    content.appendChild(createHeader());
    content.appendChild(createBody());
    content.appendChild(createFooter());
}

function createHeader () {
    // Lmao just used the html to dom converter thingy
    var node_1 = document.createElement('NAV');
    node_1.setAttribute('class', 'navbar navbar-expand-lg bg-body-tertiary');
    
    var node_2 = document.createElement('DIV');
    node_2.setAttribute('class', 'container-md');
    node_1.appendChild(node_2);
    
    var node_3 = document.createElement('A');
    node_3.setAttribute('class', 'navbar-brand');
    node_2.appendChild(node_3);
    
    // var node_4 = document.createTextNode(("To do &#128466;"));
    node_3.innerHTML = "To do &#9999;"
    // node_3.appendChild(node_4);
    
    var node_5 = document.createElement('BUTTON');
    node_5.setAttribute('class', 'navbar-toggler');
    node_5.setAttribute('type', 'button');
    node_5.setAttribute('data-bs-toggle', 'collapse');
    node_5.setAttribute('data-bs-target', '#navbarSupportedContent');
    node_5.setAttribute('aria-controls', 'navbarSupportedContent');
    node_5.setAttribute('aria-expanded', 'false');
    node_5.setAttribute('aria-label', 'Toggle navigation');
    node_2.appendChild(node_5);
    
    var node_6 = document.createElement('SPAN');
    node_6.setAttribute('class', 'navbar-toggler-icon');
    node_5.appendChild(node_6);
    
    var node_7 = document.createElement('DIV');
    node_7.setAttribute('class', 'collapse navbar-collapse');
    node_7.setAttribute('id', 'navbarSupportedContent');
    node_2.appendChild(node_7);
    
    var node_8 = document.createElement('UL');
    node_8.setAttribute('class', 'navbar-nav me-auto mb-2 mb-lg-0');
    node_7.appendChild(node_8);
    
    var node_9 = document.createElement('LI');
    node_9.setAttribute('class', 'nav-item');
    node_8.appendChild(node_9);
    
    var node_10 = document.createElement('BUTTON');
    node_10.setAttribute('class', 'button-nav nav-link');
    node_10.setAttribute('aria-current', 'page');
    node_10.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(node_10);
      loadHome();
    });
    node_9.appendChild(node_10);
    
    var node_11 = document.createTextNode((new String("Home")));
    node_10.appendChild(node_11);

    var node_12 = document.createElement('LI');
    node_12.setAttribute('class', 'nav-item');
    node_8.appendChild(node_12);
    
    var node_13 = document.createElement('BUTTON');
    node_13.setAttribute('class', 'button-nav nav-link');
    node_13.setAttribute('aria-current', 'page');
    node_13.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(node_13);
      loadCreate();
    });
    node_12.appendChild(node_13);
    
    var node_14 = document.createTextNode((new String("Create")));
    node_13.appendChild(node_14);

    return node_1;
}

function createBody() {
    var node_1 = document.createElement("main");
    node_1.classList.add("main");
    node_1.setAttribute("id", "main");
    var node_2 = document.createElement("div");
    node_2.setAttribute("class", "overlay");
    node_2.setAttribute("id", "overlay");
    node_1.appendChild(node_2);
    console.log(node_1);
    console.log(node_2);

    return node_1;
}

function createFooter () {
    // Lmao just used the html to dom converter thingy
    var node_2 = document.createElement('DIV');
    node_2.setAttribute('class', 'footer container-md');
    
    var node_3 = document.createElement('P');
    node_2.appendChild(node_3);
    
    var node_4 = document.createElement('A');
    node_4.setAttribute('href', 'https://github.com/VaticanMemes');
    node_3.appendChild(node_4);
    
    var node_5 = document.createTextNode((new String("Made by Vatican Memes")));
    node_4.appendChild(node_5);

    return node_2;
}

function loadHome() {
    var main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

function createHome() {
    var home = document.createElement("div");
    var popUpButton = document.createElement("button");
    popUpButton.innerText = "create a pop up";
    popUpButton.addEventListener("click", (e) => {
      document.getElementById("main").appendChild(createPopUp())
    });
    home.appendChild(popUpButton);
    return home;
}

function loadCreate () {
    var main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createCreate());
}

function createCreate () {
    return createParagrah("Create")
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createParagrah(text) {
    paragraph = document.createElement("p");
    paragraph.innerText = text;

    return paragraph;
}

function createPopUp () {
    var node_1 = document.createElement('DIV');
    node_1.setAttribute('class', 'card text-center');
    
    var node_2 = document.createElement('DIV');
    node_2.setAttribute('class', 'card-header');
    node_1.appendChild(node_2);
    
    var node_3 = document.createElement('UL');
    node_3.setAttribute('class', 'nav nav-tabs card-header-tabs');
    node_2.appendChild(node_3);
    
    var node_4 = document.createElement('LI');
    node_4.setAttribute('class', 'nav-item');
    node_3.appendChild(node_4);
    
    var node_5 = document.createElement('A');
    node_5.setAttribute('class', 'nav-link active');
    node_5.setAttribute('href', '#');
    node_4.appendChild(node_5);
    
    var node_6 = document.createTextNode((new String("Active")));
    node_5.appendChild(node_6);
    
    var node_7 = document.createElement('LI');
    node_7.setAttribute('class', 'nav-item');
    node_3.appendChild(node_7);
    
    var node_8 = document.createElement('A');
    node_8.setAttribute('class', 'nav-link');
    node_8.setAttribute('href', '#');
    node_7.appendChild(node_8);
    
    var node_9 = document.createTextNode((new String("Link")));
    node_8.appendChild(node_9);
    
    var node_10 = document.createElement('LI');
    node_10.setAttribute('class', 'nav-item');
    node_3.appendChild(node_10);
    
    var node_11 = document.createElement('A');
    node_11.setAttribute('class', 'nav-link disabled');
    node_11.setAttribute('href', '#');
    node_10.appendChild(node_11);
    
    var node_12 = document.createTextNode((new String("Disabled")));
    node_11.appendChild(node_12);
    
    var node_13 = document.createElement('DIV');
    node_13.setAttribute('class', 'card-body');
    node_1.appendChild(node_13);
    
    var node_14 = document.createElement('H5');
    node_14.setAttribute('class', 'card-title');
    node_13.appendChild(node_14);
    
    var node_15 = document.createTextNode((new String("Special title treatment")));
    node_14.appendChild(node_15);
    
    var node_16 = document.createElement('P');
    node_16.setAttribute('class', 'card-text');
    node_13.appendChild(node_16);
    
    var node_17 = document.createElement('A');
    node_17.setAttribute('href', '#');
    node_17.setAttribute('class', 'btn btn-primary');
    node_13.appendChild(node_17);
    
    var node_18 = document.createTextNode((new String("Go somewhere")));
    node_17.appendChild(node_18);
    
    return node_1;
}

/*
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
*/

/*
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-md">
    <p>Made by <a href="https://github.com/VaticanMemes">Vatican Memes</a></p>
  </div>
</nav>
*/