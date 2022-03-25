const express = require('express');
const starRoutes = require ('./star/routes');

const app = express()
const port = 3001
const path = require('path')

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static('public'));

// app.get("/", (req, res) => {

//   res.sendFile('/Users/sim/Desktop/star_website/front/public/index.html')
// })


app.use('/api/stars', starRoutes);

app.listen(port, () => console.log(`app listening on port ${port} on directory ${__dirname}`));