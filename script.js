document.addEventListener('DOMContentLoaded', () => {
  const giftBtn = document.getElementById('giftBtn');
  const giftBox = document.getElementById('giftBox');

  giftBtn.addEventListener('click', () => {
    giftBox.classList.toggle('hidden');
    giftBtn.style.display = 'none';
  });
});
