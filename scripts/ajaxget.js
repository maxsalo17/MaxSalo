$(document).ready(function () {
    "use strict";
    var loadBut = $("#load_songs");
    var isVisible = false; // для "перемикача"
    var songsBlock = $("#songs_block"); // блок, у який вставимо таблицю
    songsBlock.css("display", "none"); // на початку ховаємо таблицю
    loadBut.on("click", function () { // показати або сховати таблицю
        $.ajax({
            url: "ajax/songs.json",
            success: function (result) { // результат разу розпарсений
                var i;
                var table = "<table class='table'><tr class='row1'><th class='cell'>Song Name</th><th class='cell'></th>";
                for (i = 0; i < result.length; i += 1) { // "заповнюємо" таблицю
                    table += "<tr class='row" +
                            ((i % 2 === 0) // для різнокольорових рядків
                        ? "2"
                        : "1") + "'><td class='cell'>" + result[i].last_name + " " + result[i].first_name + " "
                     "</td></tr>";
                }
                table += "</table>";
                $("#songs_block").html(table); // вставляємо таблицю
            }
        });
        if (isVisible) { // якщо таблицю показано - ховаємо і навпаки
            loadBut.html("SHOW SONGS");
            songsBlock.css("display", "none");
        } else {
            loadBut.html("HIDE SONGS");
            songsBlock.css("display", "block");
        }
        isVisible = !isVisible; // для організації "перемикача" присвоюємо булевій змінній протилежне значення
    });
});