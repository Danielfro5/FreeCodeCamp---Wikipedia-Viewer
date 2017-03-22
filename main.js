var userSearchString;
var searchStringHolder;
var searchStringMulti;

function searchFunction() {
    searchStringHolder = "";
    searchStringMulti = "";
    userSearchString = document.getElementById("searchBar").value;
    $(function() {

        $.getJSON("https:///crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + (userSearchString), function(wikiData) {
            var termLength = wikiData[1].length;
            for (i = 1; i < termLength; i++) {
                searchStringHolder =
                    "<div><h3>" + wikiData[1][i] + "</h3><br><p>" + wikiData[2][i] + "</p><br><a href='" + wikiData[3][i] + "'>" + wikiData[3][i] + "</a></div>";
                searchStringMulti += searchStringHolder;
                document.getElementById("searchResults").innerHTML = searchStringMulti;
            }

        });
    });

}

$(function() {
$('#searchBar').keypress(function(e){
   if(e.keyCode==13)
   $('#searchBarBtn').click();
 });});
