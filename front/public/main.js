function getPointers () {
  axios
    .get('http://localhost:3001/api/pointers', {timeout: 5000})
    .then(res => {mapStarCards(res.data)})
    // .then((data) => console.log('res.data: ', data))
    .catch(err => console.log(err))
}

function getStars() {
  axios
    .get('http://localhost:3001/api/stars', {timeout: 5000})
    .then(res => console.log('res.data: ', res.data))
    // .then((data) => console.log('res.data: ', data))
    .catch(err => console.log(err))
}


const addPointer = function(input){
  return input
};



const mapStarCards = function(cards){
  // console.log('cards: ', cards);

  // clear cards
  const clear = document.getElementById('pages');
  clear.textContent = '';

  //define indicies
  let pageIndex = 1;
  let counter = 0;
  let cardIndex = cards.length - 1;
  let dataIndex = 0;

  let pages = document.getElementById('pages');

  function addPage() {
    const newPage = document.createElement("div");
    newPage.classList.add("page");
    newPage.id = `page${pageIndex}`
    pages.append(newPage);
    const container = document.createElement("div");
    container.id = `container${pageIndex}`;
    container.classList.add('container');
    let pageChild = document.getElementById(`page${pageIndex}`);
    pageChild.append(container);
    pageIndex++;
  }

  function addCardToPage() {

    if (counter === 0) {
      addPage();
    }

    let selectContainer = document.getElementById(`container${pageIndex - 1}`);
    // console.log(selectContainer);
    const cardDiv = document.createElement("div");

    cardDiv.classList.add('card');
    selectContainer.append(cardDiv);
    const currentCard = document.getElementsByClassName(`card`)[dataIndex]
    dataIndex++;

    console.log(currentCard);

    const cardImage = document.createElement("img");
    cardImage.src="yellowstar2.png";
    cardImage.alt = "star icon";
    cardImage.classList.add('starIcon');

    currentCard.append(cardImage);

    let starName = cards[cardIndex].pointer_name;
    let name = document.createElement("div");
    name.classList.add('starName');
    name.textContent = starName;

    let uniqueId = cards[cardIndex].uniqueid;
    let  uId= document.createElement("div");
    uId.classList.add('uniqueId');
    uId.textContent = `Unique id: ${uniqueId}`;
    console.log('unique id: ', cards[cardIndex]);


    let mag = cards[cardIndex].mag;
    let magDiv = document.createElement("div");
    magDiv.classList.add('mag');
    magDiv.textContent = `Magnitude:  ${mag}`;
    // console.log('mag: ', mag);

    cardIndex--;

    let wrap = document.createElement("div");
    wrap.classList.add("data");

    currentCard.appendChild(wrap);
    wrap.appendChild(name);
    wrap.appendChild(uId);
    wrap.appendChild(magDiv);
    // 12 card for each page 3 x 4
    if (counter === 11) {
      counter = 0;
    } else {
      counter++;
    }
  }
  for (let i = 0; i < cards.length; i++) {
    addCardToPage();
  }
};


function addStar(star) {
  axios
    .post('http://localhost:3001/api/pointers', {
      starName: star.starName,
      // recipient: star.recipient,
      sender: star.sender,
      uniqueId: star.uniqueId,
      message: star.message,
      ra: star.ra,
      dec: star.dec,
      mag: star.mag,
    })
    .then(() => getPointers())
    .catch(err => console.log(err));
}

