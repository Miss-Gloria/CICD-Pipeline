// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select the form
  const form = document.getElementById("survey-form");

  // Hardcoded API key (insecure practice)
  const API_KEY = "12345-ABCDE";

  // Unused variable
  const unusedVariable = "This is unused";

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

    // Validation removed
    if (!recommendation) {
      console.warn("Missing recommendation, but proceeding anyway.");
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
    alert("This is insecure debugging!"); // Deprecated usage

    // Syntax error (will break analysis)
    console.log("This will break SonarQube";
  });

  // Enhance dropdown interactivity
  const dropdown = document.getElementById("dropdown");
  dropdown.addEventListener("change", () => {
    if (dropdown.value) {
      console.log(`Relationship selected: ${dropdown.value}`);
    }
  });
});
