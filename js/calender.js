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
                details += '    <span class="title">' + this.naamEvent + '<span class="' + this.naam + '"></span></span>';
                details += '    <span class="time">' + this.uur + '</span>';
                details += '   </div>';
                details += ' </div>';

              
 $('.entry-container').append(details);

            });

           });

// add 7 days to the calendar    

  $(".next-day").click(function () {
    $(".day span").html(function (i, val) {
        return +val + 7;
        
   });
      });
    
   
  $(".prev-day").click(function () {
    $(".day span").html(function (i, val) {
      return +val - 7
      
    });
    });

    
    
});

