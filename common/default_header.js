class DefaultHeader extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    this.innerHTML = `
      <div class="w-full flex items-center h-14 px-4 bg-white">
        <button onclick="history.back()" class="text-2xl text-gray-800 mr-auto">&#8592;</button>
        <div class="flex-1 text-center text-xl font-bold text-gray-900 select-none">${title}</div>
        <div class="w-8"></div>
      </div>
    `;
  }
}
customElements.define('default-header', DefaultHeader); 