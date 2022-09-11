## Web Scraping
From web scraping we basically understand that, we need to extract some useful data from any website. From this method you can create your own API and use the extracted information for selling

## What it does
1. It extract that useful data from HTML file of website as a whole
2. We can either use it API for selling or build very own sites without using any API.
--
## How we built it
- Initialize the npm package and then install the other dependencies package like express, axios and cherrio.
- Require each of the package and create a app using express module Now by using axios method to data from html file using class from the 
[The Guardian New site](https://www.theguardian.com/international) and get the response as a promise .
- And Push each element by same class in array and send the data to local host by get method.
- Run the code 
```ruby
npm start
```

## What we learned
Thanks to MLH I learn new concept about web scraping, how to use it and it benefit in tech world. 

## What's next for web-scraping
Either use it from build very own news sites or use the receive data as API  for sharing the news.
