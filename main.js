$(function() {

  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json",function(wikiData){
    console.log("atleast its not broken");
  });
  });
