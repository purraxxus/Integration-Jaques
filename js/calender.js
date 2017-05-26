$(document).ready(function () {
    console.log("oke");


    $.getJSON("../JSON/events.json", function (json) //json bestand inladen
        {
    
            console.log("test");
            $.each(json.evenementen, function () {
                var details = "";

                details += '<div class="entry">';
                details += ' <img src="' + this.url +'" alt="" class="event-img" />';

                details += '  <div class="text">';
                details += '    <span class="title">' + this.title + '<span class="' + this.naam + '">Tom</span></span>';
                details += '    <span class="time">8 - 10am</span>';
                details += '   </div>';
                details += ' </div>';

              
 $('.entry-container').append(details);

            });

           

        });

});
