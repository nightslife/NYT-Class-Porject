const yourkey = "4kJrG9A7HMPAzjz6xUDfg6a9lVubL5c7";
var searchTerms = "";
var endYear = "";
var startYear = "";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"+startYear+"&"+endYear+"&q="
+searchTerms+"&api-key="+yourkey;




$.ajax({
    url:queryURL,
    method: "GET"
}).then(function(res){
    console.log(res);

    // endYear="end_date="+#endYearID+"1231";
    // startYear="begin_date="+#startYearID+"0101";
})

