


$("span").on("click", function() {
var searchTerm = $(this).attr("data-id");
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q= " + searchTerm + "&api-key=AGl4kmw0lmcd06BkTfpee91WeEGgZdNW";




var search = $("#search");
var number = $("#number");
var yearStart = $("#yearStart");
var yearEnd = $("#yearEnd");

$.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var results = response.response.docs
          console.log(results); 
        
          for (var i = 0; i < 5; i++) {

            // <div class="infoReturned" data-url=${data.results.docs[i].web.url}">
            //  <div Headline: $(data.results.docs[i].headline}>
            

            
                          }

        
        })
    });

    // var output = ""; for... output +- <div class="infoReturned"...