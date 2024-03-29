const pool = require('../db');
const queries = require('./queries');

const getStars = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  pool.query(queries.getStars, (err, results) => {
    console.log('HERE');
    if (err) throw err;
    res.status(200).json(results.rows);
  });
};




const getPointers = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  pool.query(queries.getPointers, (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  });
};

// const getStarById = (req, res) => {
//   const id = parseInt(req.params.id);
//   pool.query(queries.getStarById, [id], (err, results) => {
//     if (err) throw err;
//     res.status(200).json(results.rows);
//   })
// }

const addStar = (req, res) => {
  // console.log('req body: ', req.body)

  const {starName, sender, uniqueId, message, ra, dec, mag} = req.body;
  pool.query(queries.addStar, [starName, sender, uniqueId, message, ra, dec, mag], (err, results) => {
    if (err) throw err;
    res.status(201).send('Star is added to the db')
  })
}

const removeStar = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStarById, [id], (err, results) => {
    const noStarFound = !results.rows.length;
    if (noStarFound) {
      res.send("Star does not exists in the db")
    }

    pool.query(queries.removeStar, [id], (err, results) => {
      if (err) throw err;
      res.status(200).send("Stars removed successfully");
    })
  });
};

const updateStar = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(queries.getStarById, [id], (err, results) => {
    const noStarFound = !results.rows.length;
    if (noStarFound) {
      res.send("Star does not exists in the db")
    }

    pool.query(queries.updateStar, [name, id], (err, results) => {
      if (err) throw err;
      res.status(200).send("Star updated successfully")
    });
  });
}

module.exports = {
  getPointers,
  getStars,
  addStar,
  removeStar,
  updateStar,
};