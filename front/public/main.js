function getStars () {
  axios
    .get('http://localhost:3001/api/stars', {timeout: 5000})
    .then(res => {console.log('data: ', res.data); mapStarCards(res.data)})
    .catch(err => console.log(err))
}

const mapStarCards = async function(card){
  console.log('card: ', card);
	S("div#card").remove()
	S("div#cardsContainer").remove();
	await card.map((card) => S("div#cards").prepend(`<div id="cardsContainer">${card.star_name}${card.recipient}</div>`));
}

function addStar(star) {
  axios
    .post('http://localhost:3001/api/stars', {
      starName: star.starName,
      date: star.date,
      message: star.message,
      recipient: star.recipient,
      sender: star.sender,
      starType: star.starType,
      uniqueId: star.uniqueId
    })
    .catch(err => console.log(err));
}

