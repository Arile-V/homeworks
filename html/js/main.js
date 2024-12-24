function search(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() !== '') {
        window.location.href = `searchResults.html?query=${encodeURIComponent(searchInput)}`;
    }
}


function checkPassword() {
    const enteredPassword = document.getElementById('adminPassword').value;
    const correctPassword = 'admin123';

    if (enteredPassword === correctPassword) {
        document.getElementById('login').style.display = 'none';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

