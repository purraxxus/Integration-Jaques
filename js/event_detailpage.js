$(document).ready(function () {
    console.log("oke");


    $.getJSON("../JSON/events.json", function (json) //json bestand inladen
        {
    
            
            
                var deze = json.evenementen;
                var data = "";
        console.log(deze);

                data += '<p class="company_name_event">' + deze[0].datum + '</p>'
                data +='<p>'+deze[0].uur+'</p>'
        
//console.log(data);
              
 $('#data').append(data);

       

           
          



                var plaats = "";

                plaats +=  '<p class="company_name_event">' + deze[0].naamEvent + '</p>'
                    
                plaats += '<p>'  + deze[0].staatNummer + ' </p>'
                
                plaast += '<p>' + deze[0].data + '</p>'
        
                plaats += '<p><a href="mailto:info@kittybons.com">contact</a></p>'
      
        

             console.log(plaats);
 $('#plaats').append(plaats);

       












        });

});
