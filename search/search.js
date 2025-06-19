// 뒤로가기 버튼 처리
document.querySelector('.back-button').addEventListener('click', () => {
    window.history.back();
});

// 검색어 입력 처리
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-button');

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim()) {
        addSearchHistory(searchInput.value.trim());
        searchInput.value = '';
    }
});

searchButton.addEventListener('click', () => {
    if (searchInput.value.trim()) {
        addSearchHistory(searchInput.value.trim());
        searchInput.value = '';
    }
});

// 최근 검색어 처리
const historyTags = document.querySelector('.history-tags');
const clearAllButton = document.querySelector('.clear-all');

// 로컬 스토리지에서 검색 기록 가져오기
let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');

// 검색 기록 표시
function displaySearchHistory() {
    historyTags.innerHTML = searchHistory.slice(0, 10).map(term => `
        <div class="tag">
            ${term}
            <button class="remove-tag" onclick="removeSearchHistory('${term}')">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" stroke-width="1.5"/>
                </svg>
            </button>
        </div>
    `).join('');
}

// 검색 기록 추가
function addSearchHistory(term) {
    // 중복 제거
    searchHistory = searchHistory.filter(item => item !== term);
    // 최근 검색어를 앞에 추가
    searchHistory.unshift(term);
    // 최대 10개까지만 저장
    if (searchHistory.length > 10) {
        searchHistory = searchHistory.slice(0, 10);
    }
    // 로컬 스토리지 업데이트
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    // 화면 업데이트
    displaySearchHistory();
}

// 검색 기록 삭제
function removeSearchHistory(term) {
    searchHistory = searchHistory.filter(item => item !== term);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    displaySearchHistory();
}

// 전체 삭제
clearAllButton.addEventListener('click', () => {
    searchHistory = [];
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    displaySearchHistory();
});

// 추천 검색어 클릭 처리
document.querySelector('.recommended-tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
        const term = e.target.textContent.trim();
        addSearchHistory(term);
    }
});

// 초기 검색 기록 표시
displaySearchHistory(); 