document.getElementById('btn').addEventListener('click', function () {
    const dob = document.getElementById('date').value;
    if (!dob) {
        alert('Please select a date');
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    const day = today.getDate() - birthDate.getDate();

    let ageInYears = age;
    if (month < 0 || (month === 0 && day < 0)) {
        ageInYears--;
    }

    document.getElementById('result').textContent = `Your age is ${ageInYears} years`;
});