$(document).ready(function () {



    $.getJSON("../JSON/events.json", function (json) //json bestand inladen
        {

            var deze = json.evenementen;
            var data = "";


            data += '<p class="company_name_event">' + deze[0].datum + '</p>'
            data += '<p>' + deze[0].uur + '</p>'


            $('#data').append(data);


            var plaats = "";

            plaats += '<p class="company_name_event">' + deze[0].naamEvent + '</p>'

            plaats += '<p>' + deze[0].straatNummer + ' </p>'

            plaats += '<p>' + deze[0].stad + '</p>'

            plaats += '<p><a href="mailto:info@kittybons.com">contact</a></p>'


            $('#plaats').append(plaats);


            var otherEvents = "";

            otherEvents += '<div class = "example_item_title" > ' + deze[0].naam + ' </div>'
            
            otherEvents += '<div class = "example_item_description" > '+deze[0].details+'</div>'
 
             $('#otherEvent').append(otherEvents);
        
            
            
        
            
             var otherEvent1 = "";
            
            otherEvent1 += '<div class = "example_item_title" > ' + deze[1].naam + ' </div>'
            
            otherEvent1 += '<div class = "example_item_description" > '+deze[1].details+'</div>'

            $('#otherEvent1').append(otherEvent1);

            
        
        
        
        
            
            var otherEventdatum = "";
            
            otherEventdatum += '<span  class="example_item_title_on_image">'+deze[0].datum+'</span>'

            $('#otherEventDatum').append(otherEventdatum);

        
        
        
        
            var otherEventdatum1 = "";
            
            otherEventdatum1 += '<span  class="example_item_title_on_image">'+deze[1].datum+'</span>'

            $('#otherEventDatum1').append(otherEventdatum1);
            
               


        
            var jobsEvent = "";
            
            jobsEvent += '<div class="example_item_date"> <span class="example_item_title_on_image">'+deze[0].jobs[0].fuctie+'</span></div> <div class="example_item_title">'+deze[0].jobs[0].welkeJob+' </div> <div class="example_item_description">'+deze[0].jobs[0].beschrijving+'</div>'

            $('#job1').append(jobsEvent);
        
        
        
        
            
            var jobs1Event = "";
            
            jobs1Event += '<div class="example_item_date"> <span class="example_item_title_on_image">'+deze[0].jobs[1].fuctie+'</span></div> <div class="example_item_title">'+deze[0].jobs[1].welkeJob+' </div> <div class="example_item_description">'+deze[0].jobs[1].beschrijving+'</div>'

            $('#job2').append(jobs1Event);
        
        
        
        
            
            var reviewEvent = "";
            
            reviewEvent += '<p>'+deze[0].review+'</p>'

            $('#review').append(reviewEvent);
        
        
        
        
        
        });
});






function goBack() {
    window.history.back()
}
