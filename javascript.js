const toggleBtn = document.getElementById('share-icon')
const shareLinks = document.querySelector('.share-link');

toggleBtn.addEventListener('click', function() {
	shareLinks.parentNode.classList.toggle('active');
})