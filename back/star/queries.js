const getStars = "SELECT * FROM stars";
const getStarById = "SELECT * FROM stars WHERE id = $1";
const checkEmailExists = "SELECT s FROM stars s WHERE s.email = $1"
// const addStar = "INSERT INTO stars (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const addStar = "INSERT INTO stars (star_name, recipient, sender, star_type, uniqueid ) VALUES ($1,$2,$3,$4, $5)";
const removeStar = "DELETE FROM stars WHERE id = $1";
const updateStar = "UPDATE stars SET name = $1 WHERE id = $2";

module.exports = {
  getStars,
  getStarById,
  checkEmailExists,
  addStar,
  removeStar,
  updateStar,
}