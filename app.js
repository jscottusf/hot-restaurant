$("#submit").on("click", function (event) {
    event.preventDefault();

    customerName = $("#customerName-input").val().trim();
    phoneNumber = $("#phoneNumber-input").val().trim();
    email = $("#Email-input").val().trim();
    uniqueId = $("#uniqueId-input").val().trim();

    if (validate(customerName, phoneNumber)) {
        var newReservation = {
            customerName,
            phoneNumber,
            email,
            uniqueId
        }
    }
    else{
        alert('Customer name and phone number are required to make a reservation')
    }
  
 apitables
    $.post("/api/tables", newReservation,
    function(data) {
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
            

})

function validate(customerName, phoneNumber) {
    
    if (!customerName || !phoneNumber) {
        return false;
    }

    return true;
}

