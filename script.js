function showPopup(text) {
      document.getElementById('popup-text').textContent = text;
      document.getElementById('popup').style.display = 'flex';
    }

    function closePopup() {
      document.getElementById('popup').style.display = 'none';
    }
function addBlock() {
  // 1. Создаем новый элемент
  const newBlock = document.createElement('div');
  
  // 2. Добавляем стили и текст
  
  newBlock.textContent = 'Новый блок';
  newBlock.style.padding = '20px';
  newBlock.style.margin = '10px 0';
  newBlock.style.background = '#f0f0f0';
  newBlock.style.border = '1px solid #ccc';

  // 3. Добавляем в контейнер
  document.getElementById('.review').appendChild(newBlock);
}
function addBlock() {
  const newBlock = document.createElement('div');
  newBlock.className = 'review-content'; // чтобы стили подходили
  newBlock.innerHTML = `
    <div class="review-header">
      <strong>Новый Гость</strong>
      <span class="date">15 июля 2025</span>
      <span class="stars">★★★★★</span>
    </div>
    <p class="review-text">Это новый отзыв, добавленный через JavaScript!</p>
  `;

  document.getElementById('review-container').appendChild(newBlock);
}