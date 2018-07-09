// Require odm (object document mapper)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type:string, 
        required:true
    },
    link: {
        type:string, 
        required:true
    },
    date: {
        type:string, 
        required:true
    }
});

// Model 
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;