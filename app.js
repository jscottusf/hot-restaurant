$("#submit").on("click", function (event) {
    event.preventDefault();
    var newReservation = {
    customerName : $("#customerName-input").val().trim(),
    phoneNumber : $("#phoneNumber-input").val().trim(),
    customerEmail : $("#Email-input").val().trim(),
    customerID : $("#uniqueId-input").val().trim()
    };
  
    console.log(newReservation);
    $.post("/api/tables", newReservation)
        .then(function(data) {
            if (data) {
                alert("Adding Reservation");
            } else {
                alert("Sorry, you are wait-listed")
            }
        
        $("#customerName-input").val("");
        $("#phoneNumber-input").val("");
        $("#Email-input").val("");
        $("#uniqueId-input").val("");
        });

});

