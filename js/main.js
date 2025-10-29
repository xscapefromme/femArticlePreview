let isOn = false;
const card = document.querySelector('.centerCard');
const shareBtn = document.getElementById('shareIcon');

let mobilePfpContainer = document.querySelector('.pfpContainer');
let mobileProfileContainer = document.querySelector('.profileContainer');
const shareContainer = document.createElement('div');
const mobileShareContainer = document.createElement('div');
shareBtn.addEventListener('click', function () {
  let currentWidth = window.innerWidth;
  console.log(currentWidth);
  isOn = !isOn; //inverts the boolean value when user clicks
  if (isOn) {
    if (currentWidth < 800) {
      addIconItemsForMobile();
      console.log('run the code');

      console.log(mobilePfpContainer);
    } else if (currentWidth > 800) {
      renderForDesktop();
      removeItemsForMobile();

      console.log('normal');
    }
  } else {
    removeIconItems();
    removeItemsForMobile();
  }

  console.log(isOn);
});

function renderForDesktop() {
  shareContainer.innerHTML = `<p>share</p> 
  <span>
  <img src="images/icon-facebook.svg"><img src="images/icon-twitter.svg"><img src="images/icon-pinterest.svg"></span>`;

  shareContainer.classList.add('shareContainerOnClick');
  shareBtn.classList.add('shareIconOnClick');
  card.append(shareContainer);
}

function removeIconItems() {
  shareContainer.remove();
  shareBtn.classList.remove('shareIconOnClick');
  mobileProfileContainer.classList.remove('profileContainerOnClickForMobile');
}

function addIconItemsForMobile() {
  mobileShareContainer.innerHTML = `<p>share</p> 
  <span>
  <img src="images/icon-facebook.svg"><img src="images/icon-twitter.svg"><img src="images/icon-pinterest.svg"></span>`;
  mobileProfileContainer.classList.add('profileContainerOnClickForMobile');
  mobilePfpContainer.style.display = 'none';
  mobileShareContainer.classList.add('mobileShareContainer');
  mobileProfileContainer.append(mobileShareContainer);
}

function removeItemsForMobile() {
  mobilePfpContainer.style.display = 'flex';
  mobileShareContainer.remove();
}
