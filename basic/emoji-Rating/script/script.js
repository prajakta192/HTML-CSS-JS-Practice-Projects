const starsEle = document.querySelectorAll('.fa-star');
const emojisEle = document.querySelectorAll('.fa-regular');
const emoColors = ['red', 'orange', 'lightblue', 'lightgreen', 'green'];
updateRating(0);
starsEle.forEach((starEle, index) => {
  starEle.addEventListener('click', () => {
    updateRating(index);
  });
});

function updateRating(index) {
  starsEle.forEach((starsEle, i) => {
    //console.log(index, i);
    if (i < index + 1) {
      starsEle.classList.add('active');
    } else {
      starsEle.classList.remove('active');
    }
  });
  emojisEle.forEach((emojiEle) => {
    emojiEle.style.transform = `translateX(-${index * 50}px)`;
    emojiEle.style.color = emoColors[index];
  });
}
//console.log(starsEle);
