$(document).ready(function () {
    $.getJSON("JSON/events.json", function (json) //upload json file
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
            var index = ((+a + 7) % 31);
            if (index == 0) {
                index = 31;
                Months(1);
            }
            return index;
        });
    });
    $(".prev-day").click(function () {
        $(".day span").html(function (i, a) {
            var index = ((+a - 7));
            var indexVoorMin = index
            if (index <= 0) {
                indexVoorMin = index + 31;
            }
            if (indexVoorMin == 1) {
                Months(-1);
            }
            return indexVoorMin;
        });
    });
});
var OnPageMonth = 4;

function Months(i) {
    var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    OnPageMonth += i;
    $(".month").text(Months[Math.abs(OnPageMonth % 12)]);
}
