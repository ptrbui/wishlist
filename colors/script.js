document.addEventListener("DOMContentLoaded", () => {
    const colorSpans = document.querySelectorAll("span[data-color], span[data-link]");

    colorSpans.forEach(span => {
        span.addEventListener("click", (event) => {
            const link = span.getAttribute("data-link");

            if (link) {
                // Open the link in a new window
                window.open(link, "_blank");
                return; // Exit early to avoid toggling dropdown
            }

            // Handle dropdown toggling for spans without a data-link
            const color = span.getAttribute("data-color");
            const dropdown = document.getElementById(`${color}-dropdown`);

            if (dropdown) {
                const isDropdownVisible = dropdown.style.display === "block";
                // Hide all dropdowns
                document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");

                // Toggle current dropdown
                dropdown.style.display = isDropdownVisible ? "none" : "block";
            }

            // Prevent default behavior for dropdown spans
            event.preventDefault();
        });
    });
});
