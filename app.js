$("#submit").on("click", function (event) {
    event.preventDefault();
    var newReservation = {
    customerName : $("#customerName-input").val().trim(),
    phoneNumber : $("#phoneNumber-input").val().trim(),
    email : $("#Email-input").val().trim(),
    uniqueId : $("#uniqueId-input").val().trim()
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
            

// function validate(customerName, phoneNumber) {
    
//     if (!customerName || !phoneNumber) {
//         return false;
//     }

//     return true;
// }

