class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
        <div class="hero-inner">
        <h1 class="hero-title">Selamat Datang, Foodies!</h1>
        <p class="hero-tag">Temukan restaurant terbaik di Indonesia.</p>
        </div>
    </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
