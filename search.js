const yourkey = "4kJrG9A7HMPAzjz6xUDfg6a9lVubL5c7";
var searchTerms = "";
var endYear = "";
var startYear = "";


$("#searchButton").on("click", function() {
    $("#articleDisplay").empty()
    searchTerms = $("#searchTermID").val();
    console.log("searchTerms " + searchTerms)
    if($("#startYearID").val() !== ""){
    startYear="begin_date="+$("#startYearID").val()+"0101";
};
    if($("#endYearID").val() !== ""){
    startYear="end_date="+$("#endYearID").val()+"1232";
};

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    +startYear+"&"+endYear+"&q="+searchTerms+"&api-key="+yourkey;

$.ajax({
    url:queryURL,
    method: "GET"
}).then(function(res){
    console.log(res);
    var count = $("#articleCount").val()
    count = parseInt(count)
    var displayArticleVariable 
    console.log(count)
    
    for(var i = 0; i < count; i++) {
        var outerDiv = $("<div>")
        displayArticleVariable = $("<a>").attr("href", res.response.docs[i].web_url).text( res.response.docs[i].headline.main);
        $(outerDiv).append(displayArticleVariable);
        $("#articleDisplay").append(outerDiv)
        
    }
    // console.log(displayArticleVariable);

 
});
});
$("#clearButton").on("click",function(){
    $("#searchTermID").val("");
    $("#endYearID").val("");
    $("#startYearID").val("");
})




// parseInt($("#articleCount").find("option:selected").text())