// footer.js
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="bottom-nav">
                <button class="nav-button active">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 10.5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10.5" stroke="currentColor" stroke-width="2"/>
                        <path d="M12 3L22 12H2L12 3Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>홈</span>
                </button>
                <button class="nav-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 9H20L19.1654 18.1811C19.0717 19.2112 18.208 20 17.1736 20H6.82643C5.79197 20 4.92829 19.2112 4.83464 18.1811L4 9Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M8 9V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V9" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>장바구니</span>
                </button>
                <button class="nav-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9021 3.5901 15.6665 4.59721 17.1199C4.70168 17.2707 4.7226 17.4653 4.64529 17.6317L3.42747 20.2519C3.23699 20.5853 3.47768 21 3.86159 21H12Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>채팅</span>
                </button>
                <button class="nav-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
                        <path d="M5 20C5 16.6863 8.13401 14 12 14C15.866 14 19 16.6863 19 20" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>마이</span>
                </button>
            </nav>
        `;
    }
}

customElements.define('store-footer', Footer); 