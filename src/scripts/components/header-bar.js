class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="header-bar">
    <div class="header">
      <div class="header-inner">
        <h1 class="header-title">
          Foodies Bar
        </h1>
      </div>
      <a id="menu" class="header-menu" href="#" aria-label="navigation-menu">☰</a>
    </div>

    <nav id="drawer" class="nav">
      <ul class="nav-list">
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#">Favorite</a></li>
        <li class="nav-item"><a href="https://github.com/fiindah" target="_blank" rel="noopener noreferrer">About Us</a></li>
      </ul>
    </nav>
  </header>
      `;
  }
}

customElements.define('header-bar', HeaderBar);
