///navigate to countdown page.


const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://american-country-countdown.fandom.com/wiki/November_2,_2019';

rp(url)
  .then(function(html){
    //success!
    const wikiUrls = [];
    // loop through all ul (40 songs) if the childs type is text, rpint the text. If not, the child will be an href, so navigate further
    for (let i = 0; i < 40; i++) {
      if ($('#mw-content-text > ol > li > b ', html)[i].children[0].type == 'text') {
        console.log($('#mw-content-text > ol > li > b ', html)[i].children[0].data)
        //console.log($('#mw-content-text > ol > li > b ', html)[i])
        console.log(i)

        
      }else{
        
        //console.log($('#mw-content-text > ol > li > b > a', html)[i].attribs.href) 
        //if (($('#mw-content-text > ol > li > b > a', html)[i].attribs.href).contains(':')){
          //if (toString(($('#mw-content-text > ol > li > b > a', html)[i].attribs.title).contains(":"))){
            console.log(i, 'me')
          }
          
          
        
        
      }
      
      
    }
    //console.log('done');
    //console.log(wikiUrls)
    //console.log($('#mw-content-text > ol > li > b', html)[3]);
  })
  .catch(function(err){
    //handle error
    console.log("no bueno senor")
  });

  


  

//ask user to select date of countdown, make sure only selectable dates are OffscreenCanvasRenderingContext2D, in the correct data typeof


//document.querySelector("#mw-content-text > ul:nth-child(7) > li:nth-child(20) > a")







//return the countdown selected



//*[@id="mw-content-text"]/ol/li[1]/b
//document.querySelector("#mw-content-text > ol > li:nth-child(1) > b")





//in the spotify api, create a playlist in decending order of songs in countdown









//work on what to do if songs arent there











//possible work on an anouncement of weeks on countdown, artist/song trivia, audio files announcing the song is realistic
