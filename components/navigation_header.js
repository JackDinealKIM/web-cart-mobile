// navigation_header.js
class NavigationHeader extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'show-back', 'class'];
    }

    constructor() {
        super();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || '';
        const showBack = this.getAttribute('show-back') !== null;
        const customClass = this.getAttribute('class') || '';
        this.innerHTML = `
            <header class="${customClass}">
                ${showBack ? `<button class="nav-back" onclick="history.back()">←</button>` : '<span style="width:24px;"></span>'}
                <span class="nav-title">${title}</span>
                <span style="width:24px;"></span>
            </header>
        `;
    }
}

customElements.define('navigation-header', NavigationHeader); 