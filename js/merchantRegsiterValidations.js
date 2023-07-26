document
  .getElementById("registration-form")
  .addEventListener("submit",  (e)=> {
    e.preventDefault();
    // Reset error messages on form submission
    const errorMessages = document.getElementsByClassName("error-message");
    for (let i = 0; i < errorMessages.length; i++) {
      errorMessages[i].innerHTML  = "";
    }

    // Custom validation logic
    const firstnameInput = document.getElementById("firstname");
    if (!firstnameInput.validity.valid) {
      e.preventDefault();
      document.getElementById("firstname-error").innerHTML  =
        "Please enter a valid FirstName (letters only).";
    }

    const lastnameInput = document.getElementById("lastname");
    if (!lastnameInput.validity.valid) {
      e.preventDefault();
      document.getElementById("lastname-error").innerHTML   =
        "Please enter a valid LastName (letters only).";
    }

    const emailInput = document.getElementById("email");
    if (!emailInput.validity.valid) {
      e.preventDefault();
      document.getElementById("email-error").innerHTML   =
        "Please enter a valid email address (e.g., example@example.com).";
    }

    const phoneInput = document.getElementById("numberphone");
    if (!phoneInput.validity.valid) {
      e.preventDefault();
      document.getElementById("numberphone-error").innerHTML   =
        "Please enter a valid 10-digit phone number.";
    }

    const provinceInput = document.getElementById("merchant-province");
    if (!provinceInput.validity.valid) {
      e.preventDefault();
      document.getElementById("province-error").innerHTML  =
        "Please select a Province.";
    }

    const districtInput = document.getElementById("district");
    if (!districtInput.validity.valid) {
      e.preventDefault();
      document.getElementById("district-error").innerHTML  =
        "Please enter a valid District.";
    }

    const sectorInput = document.getElementById("sector");
    if (!sectorInput.validity.valid) {
      e.preventDefault();
      document.getElementById("sector-error").innerHTML  =
        "Please enter a valid Sector.";
    }

    const cellInput = document.getElementById("cell");
    if (!cellInput.validity.valid) {
      event.preventDefault();
      document.getElementById("cell-error").innerHTML   =
        "Please enter a valid Cell.";
    }

    const villageInput = document.getElementById("village");
    if (!villageInput.validity.valid) {
      event.preventDefault();
      document.getElementById("village-error").innerHTML=
        "Please enter a valid Village.";
    }

    // Additional validation checks for checkbox inputs
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][name="birthday-materials"]'
    );
    let atLeastOneChecked = false;
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        atLeastOneChecked = true;
        break;
      }
    }
    if (!atLeastOneChecked) {
      e.preventDefault();
      document.getElementById("materials-error").innerHTML   =
        "Please select at least one material.";
    }
  });
