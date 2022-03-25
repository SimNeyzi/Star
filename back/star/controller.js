const pool = require('../db');
const queries = require('./queries');

const getStars = (req, res) => {
  pool.query(queries.getStars, (err, results) => {
    if (err) throw error;
    res.status(200).json(results.rows);
  });
};

const getStarById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStarById, [id], (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  })
}

const addStar = (req, res) => {
  const { name, email, age, dob} = req.body;

  // check if email exists
  pool.query(queries.checkEmailExists, [email], (err, results) => {
    if (results.rows.length) {
      res.send("Email already exists");
    }
  })

  // add star to do db
  pool.query(queries.addStar, [name, email, age, dob], (err, results) => {
    if (err) throw err;
    res.status(201).send("Star created successfully");
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
  getStars,
  getStarById,
  addStar,
  removeStar,
  updateStar,
};