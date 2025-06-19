// 모달 관련 요소들
const modalOverlay = document.getElementById('modalOverlay');
const optionModal = document.getElementById('optionModal');
const selectedOption = document.getElementById('selectedOption');
const optionSelectBox = document.getElementById('optionSelectBox');
const optionList = document.getElementById('optionList');
const quantitySection = document.getElementById('quantitySection');
const paymentMethod = document.getElementById('paymentMethod');
const quantityInput = document.getElementById('quantityInput');
const totalPrice = document.getElementById('totalPrice');
let currentPrice = 4900;
let currentQuantity = 1;

// 즉시 실행되는 이벤트 바인딩
function bindEvents() {
    console.log('이벤트 바인딩 시작');
    const cartButtons = document.querySelectorAll('.product-buttons .cart-button');
    const buyButtons = document.querySelectorAll('.product-buttons .buy-button');
    
    console.log('장바구니 버튼 수:', cartButtons.length);
    console.log('구매하기 버튼 수:', buyButtons.length);

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('장바구니 버튼 클릭');
            openModal();
        });
    });

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('구매하기 버튼 클릭');
            openModal();
        });
    });

    // 옵션 선택 박스 클릭 이벤트
    optionSelectBox.addEventListener('click', () => {
        console.log('옵션 선택 박스 클릭');
        toggleOptionList();
    });

    // 옵션 아이템 클릭 이벤트
    const optionItems = document.querySelectorAll('.option-item');
    optionItems.forEach(item => {
        item.addEventListener('click', () => {
            const optionText = item.querySelector('span').textContent;
            const priceText = item.querySelector('.price').textContent;
            const price = parseInt(priceText.replace(/[^0-9]/g, ''));
            selectOption(optionText, price);
        });
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

// 페이지 로드 시 이벤트 바인딩 실행
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindEvents);
} else {
    bindEvents();
}

// 모달 열기
function openModal() {
    console.log('모달 열기');
    modalOverlay.style.display = 'block';
    setTimeout(() => {
        optionModal.classList.add('show');
    }, 10);
}

// 모달 닫기
function closeModal() {
    optionModal.classList.remove('show');
    setTimeout(() => {
        modalOverlay.style.display = 'none';
        clearOption();
    }, 300);
}

// 옵션 목록 토글
function toggleOptionList() {
    console.log('옵션 목록 토글');
    const optionList = document.getElementById('optionList');
    const optionSelectBox = document.getElementById('optionSelectBox');
    
    if (optionList.style.display === 'none' || !optionList.style.display) {
        optionList.style.display = 'block';
        console.log('옵션 목록 표시');
    } else {
        optionList.style.display = 'none';
        console.log('옵션 목록 숨김');
    }
}

// 옵션 선택
function selectOption(optionText, price) {
    console.log('옵션 선택:', optionText, price);
    selectedOption.style.display = 'flex';
    selectedOption.querySelector('span').textContent = optionText;
    optionSelectBox.style.display = 'none';
    optionList.classList.remove('show');
    
    quantitySection.classList.add('show');
    paymentMethod.style.display = 'block';
    
    currentPrice = price;
    updateTotalPrice();
}

// 옵션 초기화
function clearOption() {
    selectedOption.style.display = 'none';
    optionSelectBox.style.display = 'block';
    quantitySection.classList.remove('show');
    paymentMethod.style.display = 'none';
    
    quantityInput.value = '1';
    currentQuantity = 1;
    updateTotalPrice();
}

// 수량 증가
function increaseQuantity() {
    currentQuantity = parseInt(quantityInput.value) + 1;
    quantityInput.value = currentQuantity;
    updateTotalPrice();
}

// 수량 감소
function decreaseQuantity() {
    if (currentQuantity > 1) {
        currentQuantity = parseInt(quantityInput.value) - 1;
        quantityInput.value = currentQuantity;
        updateTotalPrice();
    }
}

// 총 금액 업데이트
function updateTotalPrice() {
    const total = currentPrice * currentQuantity;
    totalPrice.textContent = `총 금액: ${total.toLocaleString()}원`;
}

// 결제 방법 선택
function selectPayment(type) {
    const cashOption = document.getElementById('cashOption');
    const cardOption = document.getElementById('cardOption');
    
    if (type === 'cash') {
        cashOption.classList.add('selected');
        cardOption.classList.remove('selected');
    } else {
        cardOption.classList.add('selected');
        cashOption.classList.remove('selected');
    }
}

// 장바구니 담기
function addToCart() {
    if (!validateSelection()) return;
    alert('장바구니에 추가되었습니다.');
    closeModal();
}

// 바로 구매
function buyNow() {
    if (!validateSelection()) return;
    alert('구매 페이지로 이동합니다.');
    closeModal();
}

// 선택 검증
function validateSelection() {
    if (selectedOption.style.display === 'none') {
        alert('옵션을 선택해주세요.');
        return false;
    }

    const cashOption = document.getElementById('cashOption');
    const cardOption = document.getElementById('cardOption');
    if (!cashOption.classList.contains('selected') && !cardOption.classList.contains('selected')) {
        alert('결제 방법을 선택해주세요.');
        return false;
    }

    return true;
}

function handleCalendarClick() {
    alert('캘린더 기능은 준비 중입니다.');
}

function handleSettingsClick() {
    alert('설정 기능은 준비 중입니다.');
}

function handleSearchClick() {
    window.location.href = 'search.html';
} 