$.getJSON("publications/publications.json", function(json) {
    for (var i = 0; i < json.length; i++) {
        var card = json[i];
        console.log(card);
        $('#cards').append(
            "<div class=\"card border-dark mb-3\">" +
            "<div class=\"card-header\">" + card["conference"] + "</div>" +
            "<div class=\"card-body\">" +
            "<h4 class=\"card-title\"><a href=" + card["link"] + ">" + card["title"] + "</a></h4>" +
            "<h5 class=\"card-title\">" + card["authors"] + "</h5>" +
            "<p class=\"card-text\">" + card["body"] + "</p>" +
            "</div></div>"
        );
    }
})
