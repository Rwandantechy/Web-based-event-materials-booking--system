const checkboxes = document.querySelectorAll(".check-event-material");
const minSelected = 1; // Minimum number of checkboxes required

function validateCheckboxes() {
  const checkedCount = Array.from(checkboxes).filter(
    (checkbox) => checkbox.checked
  ).length;
  return checkedCount >= minSelected;
}

// Add event listener to validate checkboxes on form submission
document
  .querySelector("#registration-form")
  .addEventListener("submit", function (e) {
    if (!validateCheckboxes()) {
      e.preventDefault();
      alert(`Please select at least ${minSelected} materials.`);
    }
  });

// Receiving and displaying Entered Data.
document
  .getElementById("registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const firstName = document.querySelector('input[name="FirstName"]').value;
    const lastName = document.querySelector('input[name="LastName"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const province = document.querySelector("#merchant-province").value;
    const district = document.querySelector('input[name="District"]').value;
    const sector = document.querySelector('input[name="Sector"]').value;
    const cell = document.querySelector('input[name="Cell"]').value;
    const village = document.querySelector('input[name="Village"]').value;
    const material = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.nextSibling.textContent.trim())
      .join(", ");

    // Create HTML markup to display form data
    const formDataHTML = `
      <h2 class="heading-of-the-data">Registered Information:</h2>
      <div class="data-section">
        <p class="actual-data"><strong>First Name:</strong> ${firstName}</p>
        <p class="actual-data"><strong>Last Name:</strong> ${lastName}</p>
        <p class="actual-data"><strong>Email:</strong> ${email}</p>
        <ol class="actual-data">
          <li><strong>${material}</strong></li>
        </ol>
        <p class="actual-data"><strong>Permanent Address:</strong> ${province},<br> ${district},<br> ${sector},<br> ${cell},<br> ${village}</p>
      </div>`;

    // Display form data in the container element
    const formDataContainer = document.getElementById("form-data-container");
    formDataContainer.innerHTML = formDataHTML;
  });
