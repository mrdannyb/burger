$(function () {
  console.log("burgerfront loaded");
  $("#post-burger").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger-in").val().trim()
    };

    if (newBurger !== "") {
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,

      }).then(function () {
        location.reload();
      }).fail(function (error) {
        console.log(error);
      });
    };
  });

  $(".change-devoured").on("click", function (event) {
    var id = $(this).data('id');
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(function () {
      console.log("yummy");
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data('id');
    console.log(id);
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function () {
      console.log("I've outgrown that one");
      location.reload();
    })
  })
});
