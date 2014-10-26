/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/
var signupForm = document.forms["signup"];
var occField = signupForm.occupation;
var otherOccField = signupForm.occupationOther;
var stateField = signupForm.state;

document.addEventListener("DOMContentLoaded", function() {
    for (var index = 0; index < usStates.length; index++) {
        var stateName = usStates[index].name;
        var stateCode = usStates[index].code;
        var stateOption = document.createElement("OPTION");
        stateOption.value = stateCode;
        stateOption.text = stateName;
        stateField.appendChild(stateOption);
    }

    signupForm.occupation.addEventListener("change", function() {
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

    signupForm.addEventListener("submit", validateForm);
});

function validateForm(event) {
    var selectedOccupation = occField[occField.selectedIndex].value.trim();
    var selectedState = stateField[stateField.selectedIndex].value.trim();
    var isValid = true;
    var zipCodeTest = new RegExp('^\\d{5}$');
    var dateOfBirth;
    if (selectedOccupation.length == 0) {
        signupForm.occupation.className = "form-control invalid";
    } else {
        signupForm.occupation.className = "form-control";
        if (selectedOccupation == "other") {
            signupForm.occupationOther.className = "form-control invalid";
            var otherOccField = signupForm.occupationOther;
            var otherOcc = signupForm.occupationOther.value;
            if (otherOcc.trim().length == 0) {
                isValid = false;
            }
        } else {
            signupForm.occupationOther.className = "form-control";
        }
    }
    if (signupForm.firstName.value.trim().length == 0) {
        signupForm.firstName.className = "form-control invalid";
        isValid = false;
    } else {
        signupForm.firstName.className = "form-control";
    }
    if (signupForm.lastName.value.trim().length == 0) {
        signupForm.lastName.className = "form-control invalid";
        isValid = false;
    } else {
        signupForm.lastName.className = "form-control";
    }
    if (signupForm.address1.value.trim().length == 0) {
        signupForm.address1.className = "form-control invalid";
        isValid = false;
    } else {
        signupForm.address1.className = "form-control";
    }
    if (signupForm.city.value.trim().length == 0) {
        signupForm.city.className = "form-control invalid";
        isValid = false;
    } else {
        signupForm.city.className = "form-control";
    }
    if (selectedState.length == 0) {
        signupForm.state.className = "form-control invalid";
        isValid = false;
    }
    if (!zipCodeTest.test(signupForm.zip.value.trim())) {
        signupForm.zip.className = "form-control invalid";
        isValid = false;
    }
    if (signupForm.birthdate.value) {
        dateOfBirth = signupForm.birthdate.value;
        var today = new Date();
        var ageYears = today.getFullYear() - dateOfBirth.getFullYear();
        var ageDays = today.getDate() - dateOfBirth.getUTCDate();
        var ageMonths = today.getMonth() - dateOfBirth.getUTCMonth();
        if (ageMonths < 0 || (ageMonths == 0 && ageDays < 0)) {
            ageYears--;
        }
        signupForm.birthdate.className = "form-control invalid";
        isValid = false;
        if (ageYears < 13) {
            signupForm.birthdate.className = "form-control invalid";
        } else {
            signupForm.birthdate.className = "form-control";
        }
    } else {
        signupForm.birthdate.className = "form-control invalid";
    }
    if(!isValid) {
        event.preventDefault();
        event.returnValue = false;
        return false;
    }
}
