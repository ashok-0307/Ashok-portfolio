function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  // Send form data asynchronously
  fetch(event.target.action, {
    method: "POST",
    body: new FormData(event.target),
  })
    .then((response) => {
      if (response.ok) {
        document.getElementById("result").innerText =
          "Email sent successfully.";
      } else {
        document.getElementById("result").innerText =
          "Failed to send email. Please try again.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("result").innerText =
        "An error occurred. Please try again later.";
    });
}

// Function to view resume
function openResume() {
  window.open("/resume/ashokkumar-cv.pdf", "_blank");
}
