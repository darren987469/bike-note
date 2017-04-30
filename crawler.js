var Crawler = require("crawler");

var result = [];
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            // console.log(res);
            var data = {};
            data.title = $("meta[name='Title']").attr('content'); 
            data.description = $("meta[name='description']").attr('content').replace("Total Distance","總距離").replace("Ascent","爬升").replace("Descent","下降");
            data.image = $("link[rel='image_src']").attr("href");
            data.uri = res.options.uri;
            result.push(data);
            console.log(result);
        }
        done();
    }
});

// c.queue(['http://www.google.com/','http://www.yahoo.com']);
c.queue([
  'http://tour.xplova.com/routeDetail/?GUID=27CB7F9B-4629-D002-5525-2EC1E49D2E3C',//觀音山凌雲路
  'http://tour.xplova.com/routeDetail/?GUID=01E29461-C573-BDE1-DB84-8F5F460C9501',
  'http://tour.xplova.com/routeDetail/?GUID=1C244E44-D77F-35A5-1B38-B938502DA694',
  'http://tour.xplova.com/routeDetail/?GUID=E45EB4E0-283B-6855-F34B-DDC72A816EA5',
  'http://tour.xplova.com/routeDetail/index.php?GUID=1C33E978-2FB8-7DA1-4FBA-08CC0C028C84&ts=1484039514752',
  'http://tour.xplova.com/routeDetail/?GUID=0BB8F4AE-E83D-69A2-CBF1-40F15370002B',
  'http://tour.xplova.com/routeDetail/?GUID=B6655F2C-005C-4262-6B64-A43546448772',
  'http://tour.xplova.com/routeDetail/?GUID=D61A0E59-B755-8E2E-C166-C971721D05D3',
  'http://tour.xplova.com/routeDetail/?GUID=03ED4157-D8DF-F1D3-4E76-D39EC42C38CF'
  ])

/* Data structure
var data = {
  title: "",
  description: "",
  image: "",
  uri: ""
}
*/