// Script for saving and displaying medicines
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("medicineForm");
    const medicineList = document.getElementById("medicineList");

    // Load saved medicines
    let medicines = JSON.parse(localStorage.getItem("medicines")) || [];
    displayMedicines();

    // Add new medicine
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("medicineName").value.trim();
        const dosage = document.getElementById("dosage").value.trim();
        const time = document.getElementById("time").value;

        if (!name || !dosage || !time) {
            alert("Please fill all fields.");
            return;
        }

        medicines.push({ name, dosage, time });
        localStorage.setItem("medicines", JSON.stringify(medicines));
        displayMedicines();
        form.reset();
        alert("Medicine reminder saved successfully!");
    });

    // Display saved medicines
    function displayMedicines() {
        medicineList.innerHTML = "";
        medicines.forEach((med, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${med.name}</strong> - ${med.dosage} at ${med.time}
                <button onclick="deleteMedicine(${index})" class="btn" style="margin-left:10px; background-color:#dc3545;">Delete</button>
            `;
            medicineList.appendChild(li);
        });
    }

    // Delete a medicine
    window.deleteMedicine = function (index) {
        if (confirm("Are you sure you want to delete this reminder?")) {
            medicines.splice(index, 1);
            localStorage.setItem("medicines", JSON.stringify(medicines));
            displayMedicines();
        }
    };
});
