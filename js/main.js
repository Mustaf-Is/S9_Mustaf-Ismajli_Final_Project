const scrllBtn = document.getElementById('scrollButton');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', saveUserData);

//Function te get the user data and to store them in web storage (local storage in this case)
function saveUserData(e) {
    e.preventDefault();

    const data = {
        firstName: document.getElementById('inputFirstName').value,
        lastName: document.getElementById('inputLastName').value,
        email: document.getElementById('inputEmail').value,
        message: document.getElementById('inputMessage').value
    };

    //Using local storage for storing data
    localStorage.setItem('formData', JSON.stringify(data));

    alert(`Thank you ${data.firstName} ${data.lastName} for your message! We will be in touch soon.`);

    this.reset();
}