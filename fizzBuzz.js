/*global $ */
'use strict';
$(function(){  
  // const trimmedArray = fizzBuzzArray.slice(1, fizzBuzzArray.length);
  // console.log(trimmedArray);
  //console.log(fizzBuzzArray);

  function fizzBuzzSequence(){
    const fizzBuzzArray = [];
    function fizzBuzz(countTo){
      countTo = $('#number-choice').val();     
      for(let i = 1; i <= countTo; i++){    
        //     switch(i){
        //         case (i % 15 === 0): 
        //             return ('fizzbuzz');
        //         case (i % 5 === 0):
        //             return ('buzz');
        //         case (i % 3 === 0):
        //             return ('bizz');
        //         default:
        //             return i;            
        //     };
        // } 
        if(i % 15 === 0){
          fizzBuzzArray.push('fizzbuzz');
        }      
        else if(i % 5 === 0){
          fizzBuzzArray.push('buzz');
        } 
        else if(i % 3 === 0){
          fizzBuzzArray.push('fizz');
        }
        else{
          fizzBuzzArray.push(i);
        }
        fizzBuzzArray.slice(1, fizzBuzzArray.length);   
        //return fizzBuzzArray;    
      }   
    }
    fizzBuzzArray.forEach(item => {
      if(item === 'fizz'){
        $('.fizz-buzz-item').addClass('.fizz').add('<span>fizz</span>');
      }
      else if(item === 'buzz'){
        $('.fizz-buzz-item').addClass('.buzz').add('<span>buzz</span>');
      }
      else if(item === 'fizzbuzz'){
        $('.fizz-buzz-item').addClass('.fizzbuzz').add('<span>fizzbuzz</span>');
      }
      else {
        $('.fizz-buzz-item').insert('<span></span>');
      }
    });
    
  }

});
