//you need to write JavaScript that provides the following experience: when a user selects one of the thumbnail images 
//using the mouse or keyboard, that image should be displayed in the full-size image container at the top. Updating the 
//image should also update its alt attribute. To test keyboard interactivity, you can Tab to one of the thumbnails and press the Enter key.
/*global $ */
'use strict';
function pictureChanger(){
    $('.thumbnail').on('click', function(event){
        const newSrc = $(this).find('img').attr('src');
        const newAlt = $(this).find('img').attr('alt');
        
        $('.hero img').attr('src', newSrc).attr('alt', newAlt);

    });
    
};

$(pictureChanger);