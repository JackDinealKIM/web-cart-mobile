class DefaultBottom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-center items-center px-0 py-3 z-10">
        <button id="nav-home" class="flex-1 flex flex-col items-center text-gray-700 focus:outline-none">
            <img src="./images/home.png" width="28px" height="28px" />
        </button>
        <button id="nav-cart" class="flex-1 flex flex-col items-center text-gray-700 focus:outline-none">
            <img src="./images/cart.png" width="28px" height="28px" />
        </button>
        <button id="nav-inquiry" class="flex-1 flex flex-col items-center text-gray-700 focus:outline-none">
            <img src="./images/chat.png" width="28px" height="28px" />
        </button>
        <button id="nav-myorder" class="flex-1 flex flex-col items-center text-gray-700 focus:outline-none">
            <img src="./images/my.png" width="28px" height="28px" />
        </button>
      </nav>
    `;
    // jQuery로 클릭 이벤트 연결
    $(this).find('#nav-home').on('click', function() { location.href = 'main.html'; });
    $(this).find('#nav-cart').on('click', function() { location.href = 'cart.html'; });
    $(this).find('#nav-inquiry').on('click', function() { location.href = 'inquiry.html'; });
    $(this).find('#nav-myorder').on('click', function() { location.href = 'my_order.html'; });
  }
}
customElements.define('default-bottom', DefaultBottom); 