// var all = '*';
// $.ajaxSetup({
//     headers:{
//        'Access-Control-Allow-Origin': all
//     }
//  });


// $.get("https://newsapi.org/v2/everything?q=bitcoin&from=2020-05-25&sortBy=publishedAt&apiKey=940263c7c37248af8b1f276dc8843634", function(data) {
//       console.log(data);
//     }, "json");


    // $.ajax({
    //     type: "GET",
    //     headers: {"X-My-Custom-Header": "some value"},
    //     url: "https://newsapi.org/v2/everything?q=bitcoin&from=2020-05-25&sortBy=publishedAt&apiKey=940263c7c37248af8b1f276dc8843634"
    // }).done(function (data) {
    //     console.log(data);
    // });

    // fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2020-05-25&sortBy=publishedAt&apiKey=940263c7c37248af8b1f276dc8843634", {
    //     credentials: "include"
    // }).then(function (response) {
    //     return response.json();
    // }).then(function (json) {
    //     console.log(json);
    // });

//     $.get("https://www.facebook.com/feeds/page.php?format=json&id=501718186559038", function(r){
//   console.log(r);
// });

// $.enableCORS();

// var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=940263c7c37248af8b1f276dc8843634';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     });

// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-25&sortBy=publishedAt&apiKey=940263c7c37248af8b1f276dc8843634",
// 	"method": "GET"
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// var url = "https://newsapi.org/v2/everything?q=bitcoin&from=2020-05-25&sortBy=publishedAt&apiKey=940263c7c37248af8b1f276dc8843634";

// $.ajax({
//     crossOrigin: true,
//     url: u,
//     success: function(data) {
//       $( '#test' ).html(data);
//     }
//   });

// $.ajax({
//     type:     "GET",
//     url:      url,
//     dataType: "jsonp",
//     success: function(data){
//       console.log(data);
//     }
//   });

//   $.ajaxSetup({
//     crossOrigin: true
//   });
  
//   $.getJSON(url, null, function(data) {
//     $( '#test' ).html(data);
//   });

// var settings = {
//     "url": "http://newsapi.org/v2/top-headlines?country=us&apiKey=940263c7c37248af8b1f276dc8843634",
//     "method": "GET",
//     "timeout": 0,
//     "headers": {
//       "Cookie": "__cfduid=dce03ea0796d2297a1688a3cf914156ec1593191619"
//     },
//   };
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });

$(document).ready(function() {
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=us&amp;apiKey=e03753c9126b408d870a44318813ac3d"
    }).then(function(data) {

        for (i = 0; i < data.articles.length; i++) {
          $('#news').append("<ul><li>"+data.articles[i].title+"</li></ul>");
        }

    });
});