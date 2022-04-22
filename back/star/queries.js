const getPointers = "SELECT * FROM pointers";
const getStars = "SELECT * FROM stars";


const getStarById = "SELECT * FROM pointers WHERE id = $1";
const checkEmailExists = "SELECT s FROM pointers s WHERE s.email = $1"
// const addStar = "INSERT INTO stars (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const addStar = "INSERT INTO pointers (pointer_name, sender, uniqueid, message, ra, dec, mag ) VALUES ($1,$2,$3,$4,$5,$6,$7)";
const removeStar = "DELETE FROM pointers WHERE id = $1";
const updateStar = "UPDATE pointers SET name = $1 WHERE id = $2";

module.exports = {
  getPointers,
  getStars,
  getStarById,
  checkEmailExists,
  addStar,
  removeStar,
  updateStar,
}