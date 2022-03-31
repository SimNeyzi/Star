// const pool = require('../../back/db');
// import pool from '../../back/db';

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
    .post('http://localhost:3001/api/stars', {recipient: star.recipient, sender: star.sender, star_name: star.star_name})
    .catch(err => console.log(err));
}
