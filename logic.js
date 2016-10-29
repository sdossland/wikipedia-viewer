/**
 * Created by sophia on 10/19/16.
 */
$(document).ready(function() {

    var displaySearchResults = function(searchResults) {
        var title = searchResults[1];
        var summary = searchResults[2];
        var link = searchResults[3];

        for (i = 0; i < searchResults[1].length; i++) {
            $(".results").append('<div class="result"><a href=\"' + link[i] + '\" target="_blank">' + '<span class="row" style=font-weight:bold;>' + title[i] + '</span>' + '<span class="row">' + summary[i] + '</span></div>');
        }
    };

    function doSearch(query) {
        var endpoint = "http://en.wikipedia.org/w/api.php";
        var params = {
            action: 'opensearch',
            search: query,
            format: 'json'
        };

        $.ajax({
            url: 'http://en.wikipedia.org/w/api.php',
            dataType: 'jsonp',
            data: params
        }).done(function(data) {
            console.log(data);
            if (data) {
                displaySearchResults(data);
            }
        });
    }

    $(".searchIcon").on('click', function() {
        $(".searchForm").show();
        $(".searchForm input").focus();
        $(".results").show();
        $(".searchIcon").hide();
    });
    $(".searchClose").on('click', function() {
        $('#search input').val("");
        $(".results").empty();
        $(".searchForm").hide();
        $(".searchIcon").show();
        $(".searchLayout").addClass("centered");
    });

    $("#random").on('click', function() {  window.open("http://en.wikipedia.org/wiki/Special:Random")
    });

    $(".sbtn").on('click', function(event) {
        event.preventDefault();
        var searchWords = $('#search input').val();
        doSearch(searchWords);
        $(".searchLayout").removeClass("centered");
    });
});