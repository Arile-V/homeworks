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

function course(){
    
    const courseCards = document.querySelectorAll('.card');
    console.log(courseCards);
    if(courseCards.length > 0){
        courseCards.forEach(card => {
            card.addEventListener('click', () => {
                const courseId = card.id;
                window.location.href = `courseDetail.html?courseId=${courseId}`;
            });
        });
    }
    const cardLatestclass = document.querySelectorAll('.cardLatestClass');
    console.log(cardLatestclass);
    if(cardLatestclass.length > 0){
        cardLatestclass.forEach(cardLatestclass => {
            cardLatestclass.addEventListener('click', () => {
                const courseId = cardLatestclass.id;
                window.location.href = `courseDetail.html?courseId=${courseId}`;
            });
        })
    }
}

