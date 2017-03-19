var userSearchTerm = "test";

//create textarea search box and feed input in realtime to userSearchTerm variable.

$(function() {

    $.getJSON("https:///crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+(userSearchTerm), function(wikiData) {
        console.log(wikiData);
    });
});
