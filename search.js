const yourkey = "4kJrG9A7HMPAzjz6xUDfg6a9lVubL5c7";
var searchTerms = "";
var endYear = "";
var startYear = "";


$("#searchButton").on("click", function() {
    searchTerms = $("#searchTermID").text();
    if($("#startYearID").text() !== ""){
    startYear="begin_date="+$("#startYearID").text()+"0101";
};
    if($("#endYearID").text() !== ""){
    startYear="end_date="+$("#endYearID").text()+"1232";
};

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    +startYear+"&"+endYear+"&q="+searchTerms+"&api-key="+yourkey;

$.ajax({
    url:queryURL,
    method: "GET"
}).then(function(res){
    console.log(res);

 
});
});
