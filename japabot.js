// require library
const twit = require('twit')
const config = require('./config.js')


// link library and config: 1 letter
const T = new twit(config)

// paramters
const tweeter = 
{
    screen_name: 'JapaCurry',
    count: 1
}

// function code.. get name, created_at, text
const getData = (err, data, response) => {
    console.log(data[0].user.name); 
    console.log(data[0].created_at);
    console.log(data[0].text);
}


// call 
T.get('statuses/user_timeline', tweeter, getData)
