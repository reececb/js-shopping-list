$(function(){
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      const listItem = $('#shopping-list-entry').val();
      $('#shopping-list-entry').val(" ");
    //When the form is submitted, an entire new list item will be added to our unordered list.
      $('.shopping-list').append(
          `<li>
            <span class="shopping-item">${listItem}</span>
                <div class="shopping-item-controls">
                 <button class="shopping-item-toggle">
                <span class="button-label">check</span>
                </button>
                 <button class="shopping-item-delete">
                 <span class="button-label">delete</span>
                </button>
                </div>
            </li>`);
    });
    //When the "check" button is clicked, it will toggle a class that will display a line through the item on the list.
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
      event.preventDefault();
       $(this).closest('li').find(".shopping-item").toggleClass('.shopping-item__checked');
    });
//When the "delete" button is clicked, it will remove the list item from our unordered list.
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
        $(this).closest('li').remove();
    });
});
//When the "check" button is clicked, it will toggle a class that will display a line through the item on the list.