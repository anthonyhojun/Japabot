// require library
const twit = require('twit');
const config = require('./config.js');
const request = require('request');

// link library and config: 1 letter
const T = new twit(config);

// paramters
const tweeter = {
    screen_name: 'JapaCurry',
    count: 1
}

// function code.. get name, created_at, text
const getData = (err, data, response) => {
//    console.log(data[0].user.name); 
//    console.log(data[0].created_at);
//    console.log(data[0].text);
//        console.log('err!', err);

    const options = {
        uri: 'https://hooks.slack.com/services/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',
        method: 'POST',
        json: {
          "text": data[0].user.name + ' ' + data[0].text
        }
      };
      
      request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        // console.log(body) // Print the shortened url.
        //  console.log('starting')
        //  console.log(response)
        } else {
            console.log('error!', error)
        }
      });
      
}


// call 
T.get('statuses/user_timeline', tweeter, getData)



