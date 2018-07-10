import axios from 'axios';


export default {
    // Query NYT API
    nytSearch: function(topic, startYear, endYear){
        const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q="
        + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
        return axios.get(queryURL);
    }, 
    // Get saved articles
    getArticles: function(){
        return axios.get('/api/articles');
    },

    // Save a new article to db
    saveArticles: function(articleStuff){
        return axios.post(articleStuff);
    },

    // Delete article from db
    deleteArticles: function(id){
        return axios.delete('/api/articles/' + id);
    }
};

