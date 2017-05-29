$(document).ready(function () {
<<<<<<< Updated upstream


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

=======
  console.log("oke");
  $.getJSON("../JSON/events.json", function (json) //json bestand inladen
    {
      var deze = json.evenementen;
      var data = "";
      console.log(deze);
      data += '<p class="company_name_event">' + deze[0].datum + '</p>'
      data += '<p>' + deze[0].uur + '</p>'
        //console.log(data);
      $('#data').append(data);
      var plaats = "";
      plaats += '<p class="company_name_event">' + deze[0].naamEvent + '</p>'
      plaats += '<p>' + deze[0].staatNummer + ' </p>'
      plaast += '<p>' + deze[0].data + '</p>'
      plaats += '<p><a href="mailto:info@kittybons.com">contact</a></p>'
      console.log(plaats);
      $('#plaats').append(plaats);
    });
>>>>>>> Stashed changes
});

<<<<<<< HEAD


function goBack() {
      window.history.back()
    } 
=======
function goBack() {
  window.history.back()
}
>>>>>>> b8d0f93b0c64cbe98ee2a06f43540adb67fbc676
