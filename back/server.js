const express = require('express');
const starRoutes = require ('./star/routes');
const cors = require('cors');

const app = express()
app.use(cors());
const port = 3001
const path = require('path')

app.use(express.json());
console.log('dir name: ', process.cwd());
app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static('public'));

// app.get("/", (req, res) => {

//   res.sendFile('/Users/sim/Desktop/star_website/front/public/index.html')
// })


app.use('/api/stars', starRoutes);

app.listen(port, () => console.log(`app listening on port ${port} on directory ${__dirname}`));