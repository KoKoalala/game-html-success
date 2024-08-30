let probability = 100;
const totalBooks = 20;
let currentBookIndex = 0;
const books = Array.from({ length: totalBooks }, (_, i) => `images/book${i + 1}.png`);
const usedBooks = new Set();

function enhance() {
    const success = Math.random() * 100 < probability;
    const bookImage = document.getElementById('bookImage');
    const probabilityDisplay = document.getElementById('probability');

    if (success) {
        if (currentBookIndex < books.length) {
            // 현재 인덱스의 이미지를 선택하고 표시
            const chosenBook = books[currentBookIndex];
            bookImage.src = chosenBook;
            bookImage.style.display = 'block'; // 이미지 보이도록 설정

            // 다음 이미지를 표시할 인덱스로 업데이트
            currentBookIndex++;
        } else {
            // 모든 이미지를 사용한 경우
            bookImage.src = '';
            bookImage.style.display = 'none';
            alert('모든 책이 사용되었습니다!');
        }

        // 확률 감소, 최소 0으로 설정
        probability = Math.max(probability - 5, 0);
    } else {
        // 실패 시 이미지 숨기기
        bookImage.style.display = 'none';
    }

    // 확률 업데이트
    probabilityDisplay.textContent = `${probability}%`;
}
