$(function () {
    $(".eat-burger").on("click", function (event) {
        event.preventDefault();
        console.log("working")
        var id = $(this).data("id");

        var newEatState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" +id, {
            type: "PUT",
            data: newEatState
        }).then(function(){
            console.log("changed status to ", newEatState)
            location.reload();
        })

    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burgerInput").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
})