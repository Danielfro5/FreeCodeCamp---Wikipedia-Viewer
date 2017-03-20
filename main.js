var userSearchTerm = window.prompt("Enter Search Term","");
var searchStringHolder;
var searchStringMulti;

$(function() {

    $.getJSON("https:///crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+(userSearchTerm), function(wikiData) {
        var termLength = wikiData.length;

        for (i=1;i<termLength;i++){
          searchStringHolder =
          "<h3>"+wikiData[1][i]+"</h3><br><p>"+wikiData[2][i]+"</p><br><a href='"+wikiData[3][i]+"'>"+wikiData[3][i]+"</a>";
          searchStringMulti += searchStringHolder;
          document.getElementById("searchResults").innerHTML = searchStringMulti;






        }

    });
});
