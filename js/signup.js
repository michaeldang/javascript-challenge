/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/
//function validateForm(event) {
//    console.log("HI");
//    var occField = signupForm.occupation;
//    var otherOccField = signupForm.occupationOther;
//    var selectedOccupation = occField[occField.selectedIndex].value;
//    var isValid = true;
//    alert("false");
//    try {
//        if (selectedOccupation == "other" && (otherOccField.value == null || otherOccField.value == "" )) {
//            otherOccField.className('form-control invalid');
//            event.preventDefault();
//            event.returnValue = false;
//            return false;
//        } else {
//        }
//    } catch (exception) {
//        event.preventDefault();
//        event.returnValue = false;
//        return false;
//    }
//}

document.addEventListener("DOMContentLoaded", function() {
    var signupForm = document.forms["signup"];
    var stateElement = signupForm.state;
    for (var index = 0; index < usStates.length; index++) {
        var stateName = usStates[index].name;
        var stateCode = usStates[index].code;
        var stateOption = document.createElement("OPTION");
        stateOption.value = stateCode;
        stateOption.text = stateName;
        stateElement.appendChild(stateOption);
    }

    signupForm.occupation.addEventListener("change", function() {
        var occField = signupForm.occupation;
        var otherOccField = signupForm.occupationOther;
        var selectedOccupation = occField[occField.selectedIndex].value;
        if (selectedOccupation == "other") {
            otherOccField.style.display = "block";
        } else {
            otherOccField.value = "";
            otherOccField.style.display = "none";
        }
    });

    signupForm.cancelButton.addEventListener("click", function() {
        if (window.confirm("Are you sure that you want to leave?")) {
            location.replace("http://google.com");
        }
    });

    function validateForm(event) {
        console.log("HI");
        var occField = signupForm.occupation;
        var otherOccField = signupForm.occupationOher;
        var selectedOccupation = occField[occField.selectedIndex].value;
        var isValid = true;
        alert("false");
        try {
            if (selectedOccupation == "other" && (otherOccField.value == null || otherOccField.value == "" )) {
                otherOccField.className('form-control invalid');
                event.preventDefault();
                event.returnValue = false;
                return false;
            } else {
            }
        } catch (exception) {
            event.preventDefault();
            event.returnValue = false;
            return false;
        }
    }

    signupForm.addEventListener("submit", validateForm);
});