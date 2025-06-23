$(function () {
  class StoreFooter extends HTMLElement {
    connectedCallback() {
      $(this).load("common/footer.html");
    }
  }

  customElements.define("store-footer", StoreFooter);
}); 