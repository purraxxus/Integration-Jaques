var welkEvent;
var storage = localStorage.getItem('eventNaam');
console.log(storage);


$.getJSON("JSON/events.json", function (json) //json bestand inladen
    {

        welkevent = json.evenementen;
    
    

       

        for(i=0; i<welkevent.length; i++){
            
            
            if (storage == welkEvent.naam) {
                console.log("test");
            }
            
            
        }







    });


