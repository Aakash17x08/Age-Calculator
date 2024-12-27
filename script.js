document.getElementById("btn").addEventListener("click", function () {
  const dob = document.getElementById("date").value; // Get date of birth
  if (!dob) {
    alert("Please select a date");
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  // Calculate age in years
  let years = today.getFullYear() - birthDate.getFullYear();

  // Adjust if the birthday hasn't happened yet this year
  let months = today.getMonth() - birthDate.getMonth();
  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    years--;
    months += 12; // Adjust months
  }

  // Calculate days
  let days = today.getDate() - birthDate.getDate();
  if (days < 0) {
    // Get the number of days in the previous month
    const prevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += prevMonth;
    months--;
  }

  // Adjust months if they go negative
  if (months < 0) {
    months += 12;
    years--;
  }

  // Display the result
  document.getElementById(
    "result"
  ).textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
});
