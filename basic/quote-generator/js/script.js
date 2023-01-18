/*Targetting DOM elemnt with window's document obj to select / obtain val from ele.*/
/*getting button ele */

const btn = document.querySelector('.btn');
const quote = document.querySelector('#quote');
const author = document.querySelector('.author');

/*attaching eventlistener to the btn ele */
btn.addEventListener('click', generateQuote);

/*defining the fun */
function generateQuote() {
  /*generate random color */
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const randomColorSec = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;

  //console.log(typeof randomColorSec)
  //console.log(`background: linear-gradient(to left bottom, ${randomColor}, ${randomColorSec}, ${randomColor})`)

  /*loader till data get loaded from API */
  quote.textContent = 'Loading quote...';
  btn.style = 'curser: not-allowed';
  /*fetching random quotes from  API & parsing it into Js Object   */

  fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((data) => {
      quote.textContent = data.content;
      author.textContent = `__${data.author}`;
      document.body.style = `background: linear-gradient(to left bottom, ${randomColor}, ${randomColorSec}, ${randomColor})`;

      /*styling DOM ele */
      quote.style = `color:${randomColor}`;
      author.style = `color:${randomColor}`;
      document.querySelector('.heading').style = `color:${randomColor}`;
    })
    .catch((err) => (quote.textContent = err));
}

/* Note for Future Ref 
 1] instead of two seperate colors use one color & make 2 or more color from It..
 2] keep fix word length(lines) for quotes. add show more etc. (so we can have fix size for wrapper)
 */

console.log(
  'https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373'
);
console.log('https://rapidapi.com/yoavshalev/api/quote-of-the-day/');
