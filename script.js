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
  document.getElementById('toggle-review-form').addEventListener('click', function () {
    const form = document.getElementById('review-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  });
function handleLogin(event) {
      event.preventDefault();
      // логика входа...
    }
    function requireLogin() {
      alert('Вы должны войти');
    }
    function showScreen(id) {
      document.querySelectorAll('.screen').forEach(screen => screen.style.display = 'none');
      document.getElementById(id).style.display = 'block';
    }
    function handleSearch(e) {
      e.preventDefault();
      const query = document.querySelector('.search').value.trim();
      if (query) alert('Вы ввели: ' + query);
    }
    function submitReview(event) {
      event.preventDefault();
      const name = document.getElementById('reviewer-name').value;
      const stars = '★★★★★';
      const date = '7 июля 2025';
      const text = document.getElementById('review-text').value;
      const newBlock = document.createElement('div');
      newBlock.className = 'review-content';
      newBlock.innerHTML = `
        <div class="review-header">
          <strong>\${name}</strong>
          <span class="date">\${date}</span>
          <span class="stars">\${stars}</span>
        </div>
        <p class="review-text">\${text}</p>
      `;
      document.querySelector('.review').appendChild(newBlock);
      event.target.reset();
    }

