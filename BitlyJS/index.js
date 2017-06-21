var request = require('request-promise');

module.exports = function (context, req) {

    var statusCode = 400;
    var responseBody = "Invalid request object";

    if (typeof req.body != 'undefined' && typeof req.body == 'object') {
       
        var longUrl = req.body.longUrl;
        var bitly_token = process.env.bitly_token;

        let options = {
            uri: "https://api-ssl.bitly.com//v3/shorten?access_token=" 
            + bitly_token + "&longurl=" + longUrl,
            method: 'GET'
        };

        request(options)
        .then((response) => {

            responseBody = JSON.parse(response);
            
            statusCode = 200;

            context.res = {
                status: statusCode,
                body: responseBody
            };        

        })
        .catch((error) => context.log(error))
        .finally(() => context.done());
       
    }

};
