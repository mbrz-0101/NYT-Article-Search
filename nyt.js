// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var queryObject = {
  'api-key': '95d973a442e34b5c935e8312a5ebb43a',
  'q': "",
  'page': 0
}
var pageNo = -1;


$("#search").on('click', queryNYT);
$("#clear").on('click', () => {
  $("#search-term").val("");
  $("#begin-date").val("");
  $("#end-date").val("");
});
$("#next-page").on('click', () => {
  nextQueryNYT();
});

function queryNYT() {
  pageNo++;
  queryObject.page = pageNo;
  $("#area").html("<div id='area'></div>");
    var queryTerm = $("#search-term").val();
    // var recordsRetrieve = $("#records-retrieve").val();
    var beginDate = $("#begin-date").val();
    var endDate = $("#end-date").val();
  
    queryObject['q'] = queryTerm;
  
  
    if (beginDate) {
      queryObject['begin_date'] = beginDate;
    }
    if (endDate) {
      queryObject['end_date'] = endDate;
    }
  
  
  
    url += '?' + $.param(queryObject);
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function (response) {
      console.log(response);
      var results = response.response.docs;
      console.log(results);
  
      for (var i = 0; i < results.length; i++) {
        // if (articleCounter = articleLimit) {
        //   break;
        // } 
        // For each result
        var resultDiv = $("<div>");
        resultDiv.attr("style", "border: 1px solid black");
        // For each headline
        var articleHeadline = $("<h1>");
        articleHeadline.text(results[i].headline.main);
        // For each web url
        var webUrl = $("<p>");
        webUrl.text("Web URL: " + results[i].web_url);
  
        // For each snippet
        var snippetNYT = $("<p>");
        snippetNYT.text("Snippet: " + results[i].snippet);
  
        // For each publish date
        var pubDate = $("<p>");
        pubDate.text("Publish Date: " + results[i].pub_date);
  
        // For each author
        var author = $("<p>");
        author.text(results[i].byline.original);
  
        resultDiv.append(articleHeadline);
        resultDiv.append(author);
        resultDiv.append(snippetNYT);
        resultDiv.append(pubDate);
        resultDiv.append(webUrl);
  
        $("#area").append(resultDiv);
      }
    }).fail(function (err) {
      throw err;
    });

}

function nextQueryNYT() {
  pageNo++;
  queryObject.page = pageNo;
  url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  $("#area").html("<div id='area'></div>");

    url += '?' + $.param(queryObject);
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function (response) {
      console.log(response);
      var results = response.response.docs;
      console.log(results);
  
      for (var i = 0; i < results.length; i++) {
        // if (articleCounter = articleLimit) {
        //   break;
        // } 
        // For each result
        var resultDiv = $("<div>");
        resultDiv.attr("style", "border: 1px solid black");
        // For each headline
        var articleHeadline = $("<h1>");
        articleHeadline.text(results[i].headline.main);
        // For each web url
        var webUrl = $("<p>");
        webUrl.text("Web URL: " + results[i].web_url);
  
        // For each snippet
        var snippetNYT = $("<p>");
        snippetNYT.text("Snippet: " + results[i].snippet);
  
        // For each publish date
        var pubDate = $("<p>");
        pubDate.text("Publish Date: " + results[i].pub_date);
  
        // For each author
        var author = $("<p>");
        author.text(results[i].byline.original);
  
        resultDiv.append(articleHeadline);
        resultDiv.append(author);
        resultDiv.append(snippetNYT);
        resultDiv.append(pubDate);
        resultDiv.append(webUrl);
  
        $("#area").append(resultDiv);
      }
    }).fail(function (err) {
      throw err;
    });

}