document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');

    // Function to handle search
    const handleSearch = () => {
        const location = searchInput.value;
        if (location) {
            window.location.href = `search_results.html?location=${encodeURIComponent(location)}`;
        }
    };
    
    // Click event for search button
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }

    // Enter key event for search input
    if (searchInput) {
        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                handleSearch();
            }
        });
    }

    // Update location on search results page
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get('location');
    
    if (location) {
        const searchLocationElement = document.getElementById('search-location');
        if (searchLocationElement) {
            searchLocationElement.textContent = location;
        }
    }
});