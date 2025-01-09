/**
 * Filters antibiotics based on selected filter criteria and a text search.
 * 
 * @param {Array} filters - Array of selected filter criteria in the format "attribute:value".
 * @param {string} searchText - Text to further filter results.
 */
function filterAntibioticsByCriteria(filters, searchText = "") {
    const filteredAntibiotics = antibiotics.filter(antibiotic => {
        // Check if the antibiotic matches all the selected filters
        const matchesFilters = filters.every(filter => {
            const [attribute, value] = filter.split(":");
            return antibiotic[attribute] === value;
        });

        // If there's a search text, check if the antibiotic matches it
        if (searchText.trim()) {
            const antibioticString = Object.values(antibiotic)
                .flat() // Flatten nested arrays (like `uses` or `resistance`)
                .join(" ") // Combine all properties into a single searchable string
                .toLowerCase(); // Normalize to lowercase for case-insensitive searching

            return matchesFilters && antibioticString.includes(searchText.toLowerCase());
        }

        return matchesFilters;
    });

    // Display the filtered antibiotics
    displayFilteredAntibiotics(filteredAntibiotics);
}

/**
 * Dynamically generates filter buttons and includes a text search field.
 */
function initializeFilters() {
    // Attributes to filter by with their labels
    const attributes = [
        //{ key: "family", label: "Antibiotic Family" },
        { key: "subclass", label: "Antibiotic Subclass" },
        { key: "mechanism", label: "Mechanism of Action" },
        { key: "spectrum", label: "Spectrum" },
        { key: "gramEffect", label: "Gram Stain" },
        { key: "activityType", label: "Activity Type" }
    ];

    // Object to keep track of selected filters
    const selectedFilters = new Set();

    // Find the filters container
    const filtersDiv = document.getElementById("filters");

    // Create a container for the filter buttons
    const filtersContainer = document.createElement("div");
    filtersContainer.id = "filter-buttons";

    // Generate labeled sections for each attribute
    attributes.forEach(({ key, label }) => {
        const section = document.createElement("div");
        section.classList.add("filter-section");

        const sectionLabel = document.createElement("h3");
        sectionLabel.textContent = label;
        section.appendChild(sectionLabel);

        const uniqueValues = new Set();
        antibiotics.forEach(antibiotic => {
            if (antibiotic[key]) {
                uniqueValues.add(antibiotic[key]);
            }
        });

        uniqueValues.forEach(value => {
            const button = document.createElement("button");
            button.textContent = value;
            button.dataset.attribute = key;
            button.classList.add("filter-button");

            button.addEventListener("click", () => {
                if (button.classList.contains("selected")) {
                    button.classList.remove("selected");
                    selectedFilters.delete(`${key}:${value}`);
                } else {
                    button.classList.add("selected");
                    selectedFilters.add(`${key}:${value}`);
                }

                // Update the filtered results after selecting/deselecting buttons
                filterAntibioticsByCriteria(Array.from(selectedFilters), searchInput.value);
            });

            section.appendChild(button);
        });

        filtersContainer.appendChild(section);
    });

    // Add a text search field
    const searchDiv = document.createElement("div");
    searchDiv.classList.add("search-section");

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search text";
    searchInput.addEventListener("input", () => {
        filterAntibioticsByCriteria(Array.from(selectedFilters), searchInput.value);
    });

    searchDiv.appendChild(searchInput);
    filtersDiv.appendChild(searchDiv);

    // Add the filter buttons container
    filtersDiv.appendChild(filtersContainer);
}

/**
 * Displays filtered antibiotics as buttons in the antibiotics list section.
 * 
 * @param {Array} filteredAntibiotics - Array of filtered antibiotics.
 */
function displayFilteredAntibiotics(filteredAntibiotics) {
    const antibioticsListDiv = document.getElementById("antibiotics-list");
    antibioticsListDiv.innerHTML = ""; // Clear previous results

    filteredAntibiotics.forEach(antibiotic => {
        const button = document.createElement("button");
        button.textContent = antibiotic.name;

        // Add click event to display antibiotic details
        button.addEventListener("click", () => displayAntibioticDetails(antibiotic));

        antibioticsListDiv.appendChild(button);
    });
}

/**
 * Displays the details of a selected antibiotic in the details section.
 * 
 * @param {Object} antibiotic - Selected antibiotic object.
 */
function displayAntibioticDetails(antibiotic) {
    const detailsDiv = document.getElementById("details");
    detailsDiv.innerHTML = `
        <h2>${antibiotic.name}</h2>
        <p><strong>Family:</strong> ${antibiotic.family}</p>
        <p><strong>Subclass:</strong> ${antibiotic.subclass || "None"}</p>
        <p><strong>Mechanism:</strong> ${antibiotic.mechanism}</p>
		<p>${antibiotic.action}</p>
        <p><strong>Gram Positivity:</strong> ${antibiotic.gramEffect}</p>
        <p><strong>Activity Type:</strong> ${antibiotic.activityType}</p>
        <p><strong>Spectrum:</strong> ${antibiotic.spectrum}</p>
        <p><strong>Uses:</strong> ${antibiotic.uses.join(", ")}</p>
        <p><strong>Resistances:</strong> ${antibiotic.resistance.join(", ")}</p>
    `;
}

// Initialize the filters when the page loads
document.addEventListener("DOMContentLoaded", initializeFilters);
displayFilteredAntibiotics(antibiotics);