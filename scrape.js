var GodTier = require('nightmare');
var nightmare = GodTier({ show: true });

nightmare
  .goto('https://www.reddit.com/')
  .wait('input[id="header-search-bar"]')
  .type('#header-search-bar', 'alien')
  .type('#header-search-bar', '\u000d')
  .wait('div[class="_3eEGmb1TERzQ2jBCUr-XNg"]')
  .click('div[class="_3eEGmb1TERzQ2jBCUr-XNg"]')
  .wait('h3')
  .evaluate(function () {
    var nameNodes = document.querySelectorAll('h3');
    var list = [].slice.call(nameNodes); // Why did I have to do this?
    return list.map(function(node){
      return node.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });