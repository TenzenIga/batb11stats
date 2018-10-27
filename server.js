const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const games = require('./routes/api/games');
const path = require('path');
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(cors());
//DB Config
const db = require('./config/keys').mongoUR;


//Connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(()=> console.log('Connected'))
  .catch(err => console.log(err));

//Use routes
app.use('/api/games', games);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started at port ${port}`));
