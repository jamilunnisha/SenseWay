document.addEventListener("DOMContentLoaded", () => {
    const profileForm = document.getElementById("profileForm");

    profileForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Collect user input
        const userProfile = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            mobility: document.getElementById("mobility").value,
            sensory: {
                avoidLoudAreas: document.getElementById("loudAreas").checked,
                minimizeCrowdedZones: document.getElementById("crowdedZones").checked,
                preferWellLit: document.getElementById("wellLit").checked
            },
            triggers: {
                loudNoises: document.getElementById("loudNoises").checked,
                brightLights: document.getElementById("brightLights").checked,
                largeCrowds: document.getElementById("largeCrowds").checked
            },
            health: document.getElementById("health").value,
            emergency: {
                contactName: document.getElementById("emergency").value,
                contactPhone: document.getElementById("emergencyPhone").value
            }
        };

        // Store in local storage
        localStorage.setItem("userProfile", JSON.stringify(userProfile));

        alert("Profile saved successfully!");
    });

    // Load saved data on page load
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
        document.getElementById("name").value = savedProfile.name;
        document.getElementById("email").value = savedProfile.email;
        document.getElementById("mobility").value = savedProfile.mobility;
        document.getElementById("loudAreas").checked = savedProfile.sensory.avoidLoudAreas;
        document.getElementById("crowdedZones").checked = savedProfile.sensory.minimizeCrowdedZones;
        document.getElementById("wellLit").checked = savedProfile.sensory.preferWellLit;
        document.getElementById("loudNoises").checked = savedProfile.triggers.loudNoises;
        document.getElementById("brightLights").checked = savedProfile.triggers.brightLights;
        document.getElementById("largeCrowds").checked = savedProfile.triggers.largeCrowds;
        document.getElementById("health").value = savedProfile.health;
        document.getElementById("emergency").value = savedProfile.emergency.contactName;
        document.getElementById("emergencyPhone").value = savedProfile.emergency.contactPhone;
    }
});
