$(document).ready(function () {
    $("#click").click(function () {

        var output = $("#output");
        var div = $("<div></div>");
        div.addClass("happy");
        div.append("Happy");
        output.append(div);
        var div = $("<div></div>");
        div.addClass("birthday");
        div.append("Birthday");
        output.append(div);
        var div = $("<div></div>");
        div.addClass("torin");
        div.append("Torin!");
        output.append(div);
    });

    $("#picture").click(function () {

        var output = $("#output");
        var div = $("<div></div>");
        div.addClass("pic");
        div.append("");
        output.append(div);
    });
});