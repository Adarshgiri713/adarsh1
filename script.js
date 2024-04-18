document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(this);

    // Convert form data to JSON object
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // Send POST request to API endpoint
    fetch("https://api.example.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to submit form");
        }
      })
      .then((data) => {
        // Handle API response
        console.log(data);
        alert("Form submitted successfully");
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
        alert("Failed to submit form");
      });
  });
