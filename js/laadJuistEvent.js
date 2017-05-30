var welkEvent;
var storage = localStorage.getItem('eventNaam');
console.log(storage);


$.getJSON("JSON/events.json", function (json) //json bestand inladen
    {

        welkEvent = json.evenementen;
    
        for(i=0; i<welkEvent.length; i++){
            
            if (storage == welkEvent[i].naam) {
                console.log("test");
                
                 var deze = json.evenementen;



            var titelEvent = "";

            titelEvent += '<h1 id="naam_company">' + welkEvent[i].naam + ' </h1>'


            $('#naamEvent').append(titelEvent);






            var data = "";

            data += '<p class="company_name_event">' + welkEvent[i].datum + '</p>'
            data += '<p>' + welkEvent[i].uur + '</p>'


            $('#data').append(data);


            var plaats = "";

            plaats += '<p class="company_name_event">' + welkEvent[i].naamEvent + '</p>'

            plaats += '<p>' + welkEvent[i].straatNummer + ' </p>'

            plaats += '<p>' + welkEvent[i].stad + '</p>'

            plaats += '<p><a href="mailto:info@kittybons.com">contact</a></p>'


            $('#plaats').append(plaats);


            var otherEvents = "";

            otherEvents += '<div class = "example_item_title" > ' + welkEvent[i].naam + ' </div>'

            otherEvents += '<div class = "example_item_description" > ' + welkEvent[i].details + '</div>'

            $('#otherEvent').append(otherEvents);





            var otherEvent1 = "";

            otherEvent1 += '<div class = "example_item_title" > ' + welkEvent[i].naam + ' </div>'

            otherEvent1 += '<div class = "example_item_description" > ' + welkEvent[i].details + '</div>'

            $('#otherEvent1').append(otherEvent1);







            var otherEventdatum = "";

            otherEventdatum += '<span  class="example_item_title_on_image">' + welkEvent[i].datum + '</span>'

            $('#otherEventDatum').append(otherEventdatum);





            var otherEventdatum1 = "";

            otherEventdatum1 += '<span  class="example_item_title_on_image">' + welkEvent[i].datum + '</span>'

            $('#otherEventDatum1').append(otherEventdatum1);





            var jobsEvent = "";

            jobsEvent += '<div class="example_item_date"> <span class="example_item_title_on_image">' + welkEvent[i].jobs[0].fuctie + '</span></div> <div class="example_item_title">' + welkEvent[i].jobs[0].welkeJob + ' </div> <div class="example_item_description">' + welkEvent[i].jobs[0].beschrijving + '</div>'

            $('#job1').append(jobsEvent);





            var jobs1Event = "";

            jobs1Event += '<div class="example_item_date"> <span class="example_item_title_on_image">' + welkEvent[i].jobs[1].fuctie + '</span></div> <div class="example_item_title">' + welkEvent[i].jobs[1].welkeJob + ' </div> <div class="example_item_description">' + welkEvent[i].jobs[1].beschrijving + '</div>'

            $('#job2').append(jobs1Event);





            var reviewEvent = "";

            reviewEvent += '<p>' + welkEvent[i].review + '</p>'

            $('#review').append(reviewEvent);




            }
            
            
        }







    });


