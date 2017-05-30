$(document).ready(function () {
    $.getJSON("../JSON/events.json", function (json) //upload json file
        {
            console.log("test");





            $.each(json.evenementen, function () {
                var details = "";
                details += '<div class="entry">';
                details += ' <img src="' + this.url + '" alt="" class="event-img" />';
                details += '  <div class="text">';
                details += '    <span class="title">' + this.naamEvent + '<span class="' + this.naam + '"></span></span>';
                details += '    <span class="time">' + this.uur + '</span>';
                details += '   </div>';
                details += ' </div>';
                $('.entry-container').append(details);
            });
        });




    // add 7 days to each day in the calendar    
    $(".next-day").click(function () {
        $(".day span").html(function (i, a) {
            if (a < 30) {
                return +a + 7;
            } else {
                OnPageMonth += 1;
                a = 1;
            }
        });
    });




    $(".prev-day").click(function () {
        $(".day span").html(function (i, a) {
            if (a > 0) {
                return +a - 7
            } else {
                OnPageMonth -= 1;
                a = 1;
            }
        });
    });
});



var OnPageMonth = 4;

function Months(i) {
    var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    OnPageMonth += i;
    $(".month").text(Months[Math.abs(OnPageMonth % 12)]);
}
