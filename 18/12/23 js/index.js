const content = document.getElementById("content")

initialiseWebsite()

function initialiseWebsite () {
    createHeader()
    // createBody()
    // createFooter()
}

function createHeader () {
    /*
    const header = document.createElement("div")
    const navHeader = document.createElement("nav")
    navHeader.className = "navbar navbar-expand-lg bg-body-tertiary"
    header.appendChild(navHeader)
    const navContainer = document.createElement("div")
    navContainer.className = "container-fluid"
    navHeader.appendChild(navContainer)
    const navA = document.createElement("a")
    navA.className = "navbar-brand"
    navA.innerText = "To do list"
    navContainer.appendChild(navA)
    const navButton1 = document.createElement("button")
    navButton1.className = "navbar-toggler"
    navButton1.setAttribute("type", "button")
    navButton1.setAttribute("data-bs-toggle", "collapse")
    navButton1.setAttribute("aria-expanded", "false")
    navButton1.setAttribute("aria-label", "Toggle navigation")
    navHeader.appendChild(navButton1)
    const navButton1Span = document.createElement("span")
    navButton1Span.className = "navbar-toggler-icon"
    navContainer.appendChild(navButton1)
    console.log(header)
    content.appendChild(header)
    */
    // Lmao just used the html to dom converter thingy
    var node_1 = document.createElement('NAV');
    node_1.setAttribute('class', 'navbar navbar-expand-lg bg-body-tertiary');
    
    var node_2 = document.createElement('DIV');
    node_2.setAttribute('class', 'container-fluid');
    node_1.appendChild(node_2);
    
    var node_3 = document.createElement('A');
    node_3.setAttribute('class', 'navbar-brand');
    node_3.setAttribute('href', '#');
    node_2.appendChild(node_3);
    
    var node_4 = document.createTextNode((new String("Navbar")));
    node_3.appendChild(node_4);
    
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
    
    var node_10 = document.createElement('A');
    node_10.setAttribute('class', 'nav-link active');
    node_10.setAttribute('aria-current', 'page');
    node_10.setAttribute('href', '#');
    node_9.appendChild(node_10);
    
    var node_11 = document.createTextNode((new String("Home")));
    node_10.appendChild(node_11);
    
    var node_12 = document.createElement('LI');
    node_12.setAttribute('class', 'nav-item');
    node_8.appendChild(node_12);
    
    var node_13 = document.createElement('A');
    node_13.setAttribute('class', 'nav-link');
    node_13.setAttribute('href', '#');
    node_12.appendChild(node_13);
    
    var node_14 = document.createTextNode((new String("Link")));
    node_13.appendChild(node_14);
    
    var node_15 = document.createElement('LI');
    node_15.setAttribute('class', 'nav-item dropdown');
    node_8.appendChild(node_15);
    
    var node_16 = document.createElement('A');
    node_16.setAttribute('class', 'nav-link dropdown-toggle');
    node_16.setAttribute('href', '#');
    node_16.setAttribute('role', 'button');
    node_16.setAttribute('data-bs-toggle', 'dropdown');
    node_16.setAttribute('aria-expanded', 'false');
    node_15.appendChild(node_16);
    
    var node_17 = document.createTextNode((new String("Dropdown")));
    node_16.appendChild(node_17);
    
    var node_18 = document.createElement('UL');
    node_18.setAttribute('class', 'dropdown-menu');
    node_15.appendChild(node_18);
    
    var node_19 = document.createElement('LI');
    node_18.appendChild(node_19);
    
    var node_20 = document.createElement('A');
    node_20.setAttribute('class', 'dropdown-item');
    node_20.setAttribute('href', '#');
    node_19.appendChild(node_20);
    
    var node_21 = document.createTextNode((new String("Action")));
    node_20.appendChild(node_21);
    
    var node_22 = document.createElement('LI');
    node_18.appendChild(node_22);
    
    var node_23 = document.createElement('A');
    node_23.setAttribute('class', 'dropdown-item');
    node_23.setAttribute('href', '#');
    node_22.appendChild(node_23);
    
    var node_24 = document.createTextNode((new String("Another action")));
    node_23.appendChild(node_24);
    
    var node_25 = document.createElement('LI');
    node_18.appendChild(node_25);
    
    var node_26 = document.createElement('HR');
    node_26.setAttribute('class', 'dropdown-divider');
    node_25.appendChild(node_26);
    
    var node_27 = document.createElement('LI');
    node_18.appendChild(node_27);
    
    var node_28 = document.createElement('A');
    node_28.setAttribute('class', 'dropdown-item');
    node_28.setAttribute('href', '#');
    node_27.appendChild(node_28);
    
    var node_29 = document.createTextNode((new String("Something else here")));
    node_28.appendChild(node_29);
    
    var node_30 = document.createElement('LI');
    node_30.setAttribute('class', 'nav-item');
    node_8.appendChild(node_30);
    
    var node_31 = document.createElement('A');
    node_31.setAttribute('class', 'nav-link disabled');
    node_31.setAttribute('aria-disabled', 'true');
    node_30.appendChild(node_31);
    
    var node_32 = document.createTextNode((new String("Disabled")));
    node_31.appendChild(node_32);
    
    var node_33 = document.createElement('FORM');
    node_33.setAttribute('class', 'd-flex');
    node_33.setAttribute('role', 'search');
    node_7.appendChild(node_33);
    
    var node_34 = document.createElement('INPUT');
    node_34.setAttribute('class', 'form-control me-2');
    node_34.setAttribute('type', 'search');
    node_34.setAttribute('placeholder', 'Search');
    node_34.setAttribute('aria-label', 'Search');
    node_33.appendChild(node_34);
    
    var node_35 = document.createElement('BUTTON');
    node_35.setAttribute('class', 'btn btn-outline-success');
    node_35.setAttribute('type', 'submit');
    node_33.appendChild(node_35);
    
    var node_36 = document.createTextNode((new String("Search")));
    node_35.appendChild(node_36);

    content.appendChild(node_1)
}

function createParagrah(text) {
    paragraph = document.createElement("p");
    paragraph.innerText = text;
    return paragraph
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