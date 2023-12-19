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
    
    var node_11 = document.createTextNode((new String("Create")));
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
    
    var node_14 = document.createTextNode((new String("Home")));
    node_13.appendChild(node_14);

    return node_1;
}

function createBody() {
    var node_1 = document.createElement("main");
    node_1.classList.add("main");
    node_1.setAttribute("id", "main");

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
    return createParagrah("Home");
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