function search(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() !== '') {
        window.location.href = `searchResults.html?query=${encodeURIComponent(searchInput)}`;
    }
}




