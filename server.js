// ======= Dependencies =========
// ==============================
const express = require ('express'); 
const bodyParser = require('body-parser');
// const axios = require('axios');
const mongoose = require('mongoose');
// const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 8080

// Middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}  

// Add routes, both API and view
const articleController = require('./controllers/articleController');
const router = new express.Router();
// Get saved articles from db
router.get('/api/articles', )
// Save articles to db
router.post('api/articles')
// Delete articles to db
router.delete('api/articles')


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.get('/', function(req,res){
    res.send('Hello world')
})

// Start the API server 
app.listen(PORT, function(){
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})


