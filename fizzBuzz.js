/* eslint-disable no-console */
/*global $ */
'use strict';
$(function(){
  $('#number-chooser').submit(event => {
    event.preventDefault();
    //console.log ('event prevent default is triggered');
    const countTo = $('#number-choice').val();
    $('.js-results').empty();
    //console.log('count until ', typeof countTo);
    //fizzBuzz(countTo);
    const results = fizzBuzz(parseInt(countTo));
    //console.log(results);
    results.forEach(item => { 
      $('.js-results').append(`<span class = 'fizz-buzz-item ${item}'>${item}</span>`); 
    });
  });
  
  function fizzBuzz(count){
    let fizzBuzzArray = [];
    //console.log('inside the fizz buzz function with the value of count being ' +  count);     
    for(let i = 1; i <= count; i++){  
      console.log(i);      
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
      //fizzBuzzArray.slice(1, fizzBuzzArray.length);
      //console.log(' the array after slicing is ' + fizzBuzzArray);       
    }   
    return fizzBuzzArray;   
  }
});
