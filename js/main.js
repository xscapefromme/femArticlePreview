let isOn = false;
const card = document.querySelector('.centerCard');
const shareBtn = document.getElementById('shareIcon');
const shareContainer = document.createElement('div');
shareBtn.addEventListener('click', function () {
  isOn = !isOn; //inverts the boolean value when user clicks
  if (isOn) {
    renderIconItems();
  } else {
    removeIconItems();
  }

  console.log(isOn);
});

function renderIconItems() {
  shareContainer.innerHTML = `<p>share</p> 
  <span>
  <img src="images/icon-facebook.svg"><img src="images/icon-twitter.svg"><img src="images/icon-pinterest.svg"></span>`;
  shareContainer.classList.add('shareContainerOnClick');
  card.append(shareContainer);
}

function removeIconItems() {
  shareContainer.remove();
}
