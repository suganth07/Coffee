let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});


const registerForm = document.querySelector('.register');
const form = document.getElementById('form');



document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.querySelector('.register');
    const form = document.getElementById('form');
    const e6 = document.getElementById('e6');

    form.addEventListener('submit', function (e) {
        const phone = document.querySelector('input[name="phone"]').value.trim();

        if (!/^\d{10}$/.test(phone)) {
            e.preventDefault();
            e6.innerText = "Phone number must be 10 digits";
            e6.style.color = "red";
        }
    });

    const loginLink = document.getElementById('login-link');
    const log1 = document.getElementById('log1');
    const registerLink = document.getElementById('register-link');
    const regLink = document.getElementById('Reg-link');
    const loginForm = document.querySelector('.login');

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });
    
    regLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.style.display = 'block';
    });

    log1.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    const registerAnchor = document.querySelector('.register-link a');
    registerAnchor.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });
});
const urlParams = new URLSearchParams(window.location.search);
    const registrationStatus = urlParams.get('registration');
    const logst = urlParams.get('login');
    const reserve=urlParams.get('Reserve');

    if (registrationStatus === 'success') {
        alert('Registration successful');
    }
    if (registrationStatus === 'failed') {
        valph();
    }
    if (logst === 'success') {
        alert('Login successful');
    }
    if (logst === 'failed') {
        alert('Account not found. Please register.');
    }
    if (reserve === 'success') {
        alert('Reservation successful');
    }
    if (reserve === 'failed') {
        alert('Account not found. Please register.');
    }

document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.getElementById('review-form');
    const reviewsContainer = document.querySelector('.reviews-container');

    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('review-name').value.trim();
        const reviewText = document.getElementById('review-text').value.trim();
        const rating = parseInt(document.getElementById('review-rating').value);

        if (!name || !reviewText || !rating) {
            alert('Please fill in all fields.');
            return;
        }

        addReview(name, reviewText, rating);
        reviewForm.reset();
    });
});

function addReview(name, review, rating) {
    const reviewBody = document.getElementById('review-body');

    // Create a new row
    const newRow = document.createElement('div');
    newRow.classList.add('row');

    // Create columns for name, review, and rating
    const nameColumn = document.createElement('div');
    nameColumn.classList.add('column');
    nameColumn.textContent = name;
    newRow.appendChild(nameColumn);

    const reviewColumn = document.createElement('div');
    reviewColumn.classList.add('column');
    reviewColumn.textContent = review;
    newRow.appendChild(reviewColumn);

    const ratingColumn = document.createElement('div');
    ratingColumn.classList.add('column');
    // Create stars for rating
    for (let i = 0; i < rating; i++) {
        const star = document.createElement('i');
        star.classList.add('fas', 'fa-star');
        ratingColumn.appendChild(star);
    }
    newRow.appendChild(ratingColumn);

    // Append the new row to the table body
    reviewBody.appendChild(newRow);
}
document.getElementById('read-more-btn').addEventListener('click', function() {
    document.getElementById('popup').classList.add('show');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('show');
});

window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.classList.remove('show');
    }
});