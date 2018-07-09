const db = require('../models');

// Define methods for articleController
module.exports = {
    // Return all saved articles
    findAll: function(req,res){
        db.Article
            .find(req.query)
            .sort({
                date:-1
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // Insert a new article in to db 
    insert: function(req,res){
        db.Article
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },

    // Delete an article from db
    remove: function(req,res){
        db.Article
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    }
};