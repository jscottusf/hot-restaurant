$("#submit").on("click", function (event) {
    event.preventDefault();
    var newReservation = {
        customerName = $("#customerName-input").val().trim(),
        phoneNumber = $("#phoneNumber-input").val().trim(),
        email = $("#Email-input").val().trim(),
        uniqueId = $("#uniqueId-input").val().trim(),
    }

    $.post("/api/tables", newReservation)
        .then(function(data) {
          console.log("index.html", data);
          alert("Adding reservation...");
        });
})

function validate(newReservation){
    console.log(newReservation)

    //if (!customerName || !phoneNumber)
}
