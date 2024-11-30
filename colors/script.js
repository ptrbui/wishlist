document.addEventListener("DOMContentLoaded", () => {
    const colorSpans = document.querySelectorAll("span[data-color]");
    let activeDropdown = null;

    colorSpans.forEach(span => {
        span.addEventListener("click", () => {
            const color = span.getAttribute("data-color");
            const dropdown = document.getElementById(`${color}-dropdown`);

            // Close the currently active dropdown if it's not the same
            if (activeDropdown && activeDropdown !== dropdown) {
                activeDropdown.style.display = "none";
            }

            // Toggle the clicked dropdown
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
                activeDropdown = null;
            } else {
                dropdown.style.display = "block";
                activeDropdown = dropdown;
            }
        });
    });
});
