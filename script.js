function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(document.getElementById("main-form"));
  let finalData = {};

  for (const [key, value] of formData) {
    finalData[key] = value;
  }
  fetch("https://reqres.in/api/jayatri", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(finalData),
  })
    .then(function (res) {
      console.log(res);
      alert("Form submitted successfully");
    })
    .catch(function (error) {
      console.log(error);
      alert("Could not submit form data");
    });
}
