const axios = require("axios");
const express = require("express");
const cherrio = require("cheerio"); //To capture the specific html element
const { response } = require("express");
const res = require("express/lib/response");

const app = express();

const url = "https://www.theguardian.com/international";

app.get("/", function(req, res) {
    axios(url).then(response => {
        const html = response.data; //use to get HTML Elements
        const $ = cherrio.load(html);
        
        const articles = [];
    
        $('.fc-item__title', html).each(function() {
            const title = $(this).text();
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        res.send(articles);
    }).catch(err => console.log(err));
})






app.listen(3000, function() {
    console.log("Server is running on server 3000.");
});