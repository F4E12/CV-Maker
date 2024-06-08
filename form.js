document.addEventListener('DOMContentLoaded', () => {
    let workHistoryCount = 0;
    let educationCount = 0;

    document.getElementById('add-work-history').addEventListener('click', () => {
        workHistoryCount++;
        const workHistorySection = document.getElementById('work-history-section');
        const div = document.createElement('div');
        div.classList.add('work-history');
        div.innerHTML = `
            <h3>Job ${workHistoryCount}</h3>
            <label for="job${workHistoryCount}-title">Job Title:</label>
            <input type="text" id="job${workHistoryCount}-title" name="job${workHistoryCount}_title" required><br>
            <label for="job${workHistoryCount}-company">Company:</label>
            <input type="text" id="job${workHistoryCount}-company" name="job${workHistoryCount}_company" required><br>
            <label for="job${workHistoryCount}-location">Location:</label>
            <input type="text" id="job${workHistoryCount}-location" name="job${workHistoryCount}_location" required><br>
            <label for="job${workHistoryCount}-dates">Dates:</label>
            <input type="text" id="job${workHistoryCount}-dates" name="job${workHistoryCount}_dates" required><br>
            <label for="job${workHistoryCount}-duties">Duties:</label>
            <textarea id="job${workHistoryCount}-duties" name="job${workHistoryCount}_duties" rows="4" required></textarea><br>
            <button type="button" class="remove-work-history">Remove Job ${workHistoryCount}</button>
        `;
        workHistorySection.appendChild(div);
    });

    document.getElementById('add-education').addEventListener('click', () => {
        educationCount++;
        const educationSection = document.getElementById('education-section');
        const div = document.createElement('div');
        div.classList.add('education');
        div.innerHTML = `
            <h3>Education ${educationCount}</h3>
            <label for="education${educationCount}-details">Details:</label>
            <textarea id="education${educationCount}-details" name="education${educationCount}_details" rows="4" required></textarea><br>
            <button type="button" class="remove-education">Remove Education ${educationCount}</button>
        `;
        educationSection.appendChild(div);
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-work-history')) {
            event.target.parentElement.remove();
            workHistoryCount--;
        }
        if (event.target.classList.contains('remove-education')) {
            event.target.parentElement.remove();
            educationCount--;
        }
    });
});
