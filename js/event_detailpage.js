$(document).ready(function () {


    $.getJSON("../JSON/events.json", function (json) //json bestand inladen
        {
    
            
            
                var deze = json.evenementen;
                var data = "";
        

                data += '<p class="company_name_event">' + deze[0].datum + '</p>'
                data +='<p>'+deze[0].uur+'</p>'
    
              
                $('#data').append(data);

       
                var plaats = "";

                plaats +=  '<p class="company_name_event">' + deze[0].naamEvent + '</p>'
                    
                plaats += '<p>'  + deze[0].straatNummer + ' </p>'
                
                plaats += '<p>' + deze[0].stad + '</p>'
        
                plaats += '<p><a href="mailto:info@kittybons.com">contact</a></p>'
      
        
                $('#plaats').append(plaats);

       












        });

});



function goBack() {
      window.history.back()
    } 