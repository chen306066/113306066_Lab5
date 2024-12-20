let gradeData = [];

function addGrade() {
    const mathInput = document.getElementById('math');
    const englishInput = document.getElementById('english');
    const math = parseFloat(mathInput.value);
    const english = parseFloat(englishInput.value);

    if (isNaN(math) || isNaN(english)) {
        alert('Please enter valid numbers for both Math and English grades.');
        return;
    }

    // Add grade data
    gradeData.push({ math, english });

    // Clear inputs
    mathInput.value = '';
    englishInput.value = '';

    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById('gradeTableBody');
    tableBody.innerHTML = '';

    let totalMath = 0;
    let totalEnglish = 0;

    gradeData.forEach((data, index) => {
        const average = ((data.math + data.english) / 2).toFixed(2);
        totalMath += data.math;
        totalEnglish += data.english;

        const row = `<tr>
            <td>${index + 1}</td>
            <td>${data.math}</td>
            <td>${data.english}</td>
            <td>${average}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });

    const mathAverage = (totalMath / gradeData.length).toFixed(2);
    const englishAverage = (totalEnglish / gradeData.length).toFixed(2);
    const overallAverage = ((totalMath + totalEnglish) / (2 * gradeData.length)).toFixed(2);

    document.getElementById('mathAverage').textContent = isNaN(mathAverage) ? '0.00' : mathAverage;
    document.getElementById('englishAverage').textContent = isNaN(englishAverage) ? '0.00' : englishAverage;
    document.getElementById('overallAverage').textContent = isNaN(overallAverage) ? '0.00' : overallAverage;
}
