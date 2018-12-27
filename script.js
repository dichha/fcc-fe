
$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
});


/*// 1. create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET- request for the ULR
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback"

xhr.open('GET','proxyurl + url');

// 3. Send the request over the network

xhr.send();

// 4. This will be called after the response is received

xhr.onload = function(){
    if(xhr.status != 200){
        // analyze HTTP status of the response
        alert(xhr.status + ': ' + xhr.statusText);
    }else{
        // show the result
        console.log("result: " + xhr.responseText);
    }
}
*/