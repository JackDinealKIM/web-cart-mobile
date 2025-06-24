class DefaultHeader extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const showHome = this.getAttribute('showHome') === 'true';
    const showCart = this.getAttribute('showCart') === 'true';
    this.innerHTML = `
      <div class="w-full flex items-center h-14 px-4 bg-white relative">
        <button onclick="history.back()" class="text-2xl text-gray-800 mr-auto z-10">&#8592;</button>
        <div class="absolute left-0 right-0 flex justify-center items-center h-14 pointer-events-none">
          <span class="text-xl font-bold text-gray-900 select-none">${title}</span>
        </div>
        <div class="flex items-center gap-2 min-w-[56px] justify-end z-10">
          ${showHome ? '<button onclick="location.href=\'main.html\'" class="w-7 h-7 flex items-center justify-center"><img src="images/home_black.png" alt="홈" class="w-[20px] h-[20px] object-contain" /></button>' : ''}
          ${showCart ? '<button onclick="location.href=\'cart.html\'" class="w-7 h-7 flex items-center justify-center"><img src="images/cart_black.png" alt="장바구니" class="ml-3 w-[23px] h-[21px] object-contain" /></button>' : ''}
        </div>
      </div>
    `;
  }
}
customElements.define('default-header', DefaultHeader); 