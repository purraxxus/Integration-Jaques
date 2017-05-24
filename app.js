 $(document).ready(function(){
      $('.entry').filter(':nth-child(n+4)').addClass('hide_event');
    
      $('.entry-container').on('click','li.day day-names',function(){
        $(this)
        .next()
         .slideDown(200)
          .siblings('div.entry')
           .slideUp(200);
      })
      });      