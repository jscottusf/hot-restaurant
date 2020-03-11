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
})

function validate(customerName, phoneNumber) {
    
    if (!customerName || !phoneNumber) {
        return false;
    }

    return true;
}
