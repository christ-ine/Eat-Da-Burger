$(function () {
    $(".eat-burger").on("click", function (event) {
        // event.preventDefault();
        console.log("working")
        var id = $(this).data("id");
        

        var newEatState = {
            devoured: 1
        }

        $.ajax("/api/burgers/" +id, {
            type: "PUT",
            data: newEatState
        }).then(function(){
            console.log("changed status to ", newEatState)
            location.reload();
        })

    })
})