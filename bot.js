console.log("bot is starting");

var twit = require("twit");
var config = require("./config");
var t = new twit(config);

function getTwitter() {
  var params = {
    q: "narendramodi",
    count: 2
  };
  t.get("search/tweets", params, getData);

  function getData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);
    }
  }
}

function postTwitter() {
  var r = Math.floor(Math.random() * 100);

  var paramsPost = {
    status: "hello twitter again" + r
  };
  t.post("statuses/update", paramsPost, postData);
  function postData(err, data, response) {
    if (err) {
      console.log("something broke--- " + err);
    } else {
      console.log("Post Done: \n" + data);
    }
  }
}

setInterval(postTwitter, 1000 * 30);
