function getStars () {
  axios
    .get('http://localhost:3001/api/stars', {timeout: 5000})
    .then(res => {mapStarCards(res.data)})
    // .then((data) => console.log('res.data: ', data))
    .catch(err => console.log(err))
}


const addPointer = function(input){
  return input
};


const mapStarCards = function(card){
  console.log('card: ', card);
	S("div#card").remove()
	S("div#cardsContainer").remove();
	card.map((card) => S("div#cards").prepend(`<div id="card">Name: ${card.star_name}<br>Unique ID: ${card.uniqueid}<br>Magnitute: ${card.mag}</div>`));

  // return 'sim';
}

function addStar(star) {
  axios
    .post('http://localhost:3001/api/stars', {
      starName: star.starName,
      // recipient: star.recipient,
      sender: star.sender,
      uniqueId: star.uniqueId,
      message: star.message,
      ra: star.ra,
      dec: star.dec,
      mag: star.mag,
    })
    .then(() => getStars())
    .catch(err => console.log(err));
}

