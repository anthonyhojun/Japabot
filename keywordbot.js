// require library
const twit = require('twit')
const config = require('./config.js')


// link library and config: 1 letter
const T = new twit(config)

// paramters
const words = {
    q: 'Gen.G',
    count: 5
}

// function code.. get name, created_at, text
const getData = (err, data, response) => {
    const tweet = data.statuses; 
    for(i=0; i<tweet.length; i++){
        console.log(`No.: ${[i + 1]}`);
        console.log(`ID: ${tweet[i].id}`);
        console.log(`Date: ${tweet[i].created_at}`);
        console.log(`Tweet: ${tweet[i].text}`);
        console.log(`Retweets: ${tweet[i].retweet_count}`);
    }
}

// get id and text 


// call 
T.get('search/tweets', words, getData)
