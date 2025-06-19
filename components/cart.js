// cart.js - 장바구니 화면 스크립트

document.addEventListener('DOMContentLoaded', function() {
    // 예시: 전체 선택 체크박스
    const selectAll = document.querySelector('.cart-select-all input[type="checkbox"]');
    if (selectAll) {
        selectAll.addEventListener('change', function() {
            const checkboxes = document.querySelectorAll('.cart-product input[type="checkbox"]');
            checkboxes.forEach(cb => cb.checked = selectAll.checked);
        });
    }

    // 예시: 수량 조절 버튼
    document.querySelectorAll('.cart-product-qty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.cart-product-qty-input');
            let value = parseInt(input.value, 10);
            if (this.textContent === '+') value++;
            if (this.textContent === '-' && value > 1) value--;
            input.value = value;
        });
    });

    // 예시: 삭제 버튼
    document.querySelectorAll('.cart-product-remove').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.cart-product').remove();
        });
    });
}); 