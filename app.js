function displayArticleSearch() {
  var article = $(this).attr("data-name");

  var APIKey = "mVyAp2pgfClcuQtwVg9i4phNHBCOh6Av";

  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    article +
    "&api-key=" +
    APIKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    var articleDiv = $(".results-panel");
    var articleTitle = response.headline;
    var article = response.docs(0,abstract);
    console.log(article);
    console.log(articleTitle);

    console.log(response);
    //  $("");
  });
}

displayArticleSearch();
