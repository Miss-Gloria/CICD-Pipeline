// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select the form
  const form = document.getElementById("survey-form");

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default submission for custom handling

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("number").value;
    const relationship = document.getElementById("dropdown").value;
    const recommendation = document.querySelector(
      'input[name="recommendation"]:checked'
    )?.value;
    const favoriteFeatures = Array.from(
      document.querySelectorAll('input[name="favorite-feature"]:checked')
    ).map((input) => input.value);
    const comments = document.getElementById("comments").value.trim();

    // Perform basic validations
    if (!name || !email || !recommendation) {
      alert("Please fill out all required fields.");
      return;
    }

    if (age && (age < 13 || age > 70)) {
      alert("Age must be between 13 and 70 if provided.");
      return;
    }

    // Collect and display user inputs
    const surveyData = {
      name,
      email,
      age: age || "Not provided",
      relationship: relationship || "Not provided",
      recommendation,
      favoriteFeatures: favoriteFeatures.length ? favoriteFeatures : ["None"],
      comments: comments || "No comments",
    };

    console.log("Survey Data:", surveyData);
    alert("Thank you for submitting the form!");

    // Clear the form after submission
    form.reset();
  });

  // Enhance dropdown interactivity
  const dropdown = document.getElementById("dropdown");
  dropdown.addEventListener("change", () => {
    if (dropdown.value) {
      console.log(`Relationship selected: ${dropdown.value}`);
    }
  });
});
