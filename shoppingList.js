/* eslint-disable no-console */
/*global $ */
'use strict';
$(function(){
  $('#js-shopping-list-form').submit(event =>{
    event.preventDefault();
    addItem();
  });

  $('.shopping-list').on('click','.shopping-item-delete', function(event){
    event.preventDefault();
    event.currentTarget.closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    //event.preventDefault();
    $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked'); // $(event.currentTarget id used fso that additional jQuery methods can be called and used)
  });
  
  function addItem(){
    const item = $('#shopping-list-entry').val();
    console.log('item to be added is', item);
    $('.shopping-list').append(
      `<li>
          <span class="shopping-item">${item}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
  }  
});