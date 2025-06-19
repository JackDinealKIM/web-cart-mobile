// header.js
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="header-content">
                    <div class="logo">
                        <img src="assets/logo/store-logo.png" alt="로고">
                    </div>
                    <h1 class="store-name">천안 불당지셜시티점 ▾</h1>
                    <div class="header-icons">
                        <button class="icon-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" stroke-width="2"/>
                                <path d="M3 10H21" stroke="white" stroke-width="2"/>
                                <path d="M8 2L8 6" stroke="white" stroke-width="2"/>
                                <path d="M16 2L16 6" stroke="white" stroke-width="2"/>
                            </svg>
                        </button>
                        <button class="icon-button" onclick="location.href='search/search.html'">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="11" cy="11" r="7" stroke="white" stroke-width="2"/>
                                <path d="M20 20L16 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>
                        <button class="icon-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" stroke-width="2"/>
                                <path d="M19 15C20.6569 15 22 13.6569 22 12C22 10.3431 20.6569 9 19 9C17.3431 9 16 10.3431 16 12C16 13.6569 17.3431 15 19 15Z" stroke="white" stroke-width="2"/>
                                <path d="M5 15C6.65685 15 8 13.6569 8 12C8 10.3431 6.65685 9 5 9C3.34315 9 2 10.3431 2 12C2 13.6569 3.34315 15 5 15Z" stroke="white" stroke-width="2"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define('store-header', Header); 