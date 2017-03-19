var userSearchTerm = window.prompt("Enter Search Term","...");



$(function() {

    $.getJSON("https:///crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+(userSearchTerm), function(wikiData) {
        console.log(wikiData);
    });
});
