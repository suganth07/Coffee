const loginLink = document.getElementById('login-link');
const loginForm = document.querySelector('.login');
const log1 = document.getElementById('log1');
const registerLink = document.getElementById('register-link');
const registerForm = document.querySelector('.register');

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

const form = document.getElementById('form');
const log = document.getElementById('login');

const urlParams = new URLSearchParams(window.location.search);
const registrationStatus = urlParams.get('registration');
const logst = urlParams.get('login');
const reserve=urlParams.get('Reserve');
const user=urlParams.get('user');

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const e1 = document.getElementById('e1');
    const e6 = document.getElementById('e6');

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });
    
    log1.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    log.addEventListener('submit', function(e){
        const name=document.querySelector('input[name="username"]').value.trim();
        const pass=document.querySelector('input[name="password"]').value.trim();

        if (name === '') {
            l1.innerText = 'Username cannot be empty.';
            l1.style.color = "red";
            l1.style.fontSize=20;
            setTimeout(5000);
        }

        if (passwordValue === '' || passwordValue.length < 8) {
        
            l2.innerText = 'Password cannot be empty.';
            l2.style.color = "red";
            l2.style.fontSize=20;
        }

    })

    form.addEventListener('submit', function (e) {
        const name = document.querySelector('input[name="username"]').value.trim();
        const phone = document.querySelector('input[name="phone"]').value.trim();
        const emailValue=document.querySelector('input[name="email"]').value.trim();
        const passwordValue=document.querySelector('input[name="password"]').value.trim();
        const cpasswordValue=document.querySelector('input[name="confirm_password"]').value.trim();

        if( !/^[A-Za-z\s]+$/.test(name)){
            e1.innerText =  'Username must contain only characters';
            e1.style.color = "red";
        }
        if (name === '') {
            e1.innerText = 'Username cannot be empty.';
            e1.style.color = "red";
            e1.style.fontSize=20;
        }
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (emailValue === '' || !emailPattern.test(emailValue)) {
        e2.innerText = 'Email cannot be empty.';
        e2.style.color = "red";
        e2.style.fontSize=20;
    }
    if (passwordValue === '' || passwordValue.length < 8) {
        
        e3.innerText = 'Password must be at least 8 characters long and cannot be empty.';
        e3.style.color = "red";
        e3.style.fontSize=20;
    }
    
    if (cpasswordValue !== passwordValue) {
        e4.innerText = 'Password doesnt match.';
        e4.style.color = "red";
        e4.style.fontSize=20;
      }

    if (!/^\d{10}$/.test(phone)) {
        e.preventDefault();
        e5.innerText = "Phone number must be 10 digits";
        e5.style.color = "red";
    }
    });
});

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
    nameColumn.classList.add('na');
    nameColumn.textContent = name;
    newRow.appendChild(nameColumn);

    const reviewColumn = document.createElement('div');
    reviewColumn.classList.add('rev');
    reviewColumn.textContent = review;
    newRow.appendChild(reviewColumn);

    const ratingColumn = document.createElement('div');
    ratingColumn.classList.add('rat');
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

document.addEventListener('DOMContentLoaded', function() {
    const readMoreLink = document.querySelector('.read-more');
    const readLessLink = document.querySelector('.read-less');
    const extraContent = document.querySelector('.extra-content');

    readMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        extraContent.style.display = 'inline';
        readMoreLink.style.display = 'none';
        readLessLink.style.display = 'inline';
    });

    readLessLink.addEventListener('click', function(event) {
        event.preventDefault();
        extraContent.style.display = 'none';
        readMoreLink.style.display = 'inline';
        readLessLink.style.display = 'none';
    });
});

document.getElementById('cross').addEventListener('click',function(){
    loginForm.style.display='none';
    registerForm.style.display='none';
})

document.getElementById('crossr').addEventListener('click',function(){
    loginForm.style.display='none';
    registerForm.style.display='none';
})

if (registrationStatus === 'success') {
    alert('Registration successful');
}

if (logst === 'success') {
    alert('Login successful');
}
if (logst === 'failed') {
    alert('Account not found. Please register.');
    registerForm.style.display="block";
}
{
if (reserve === 'success') {
    alert('Reservation successful');
}
else if (reserve === 'failed') {
    alert('Reservation Failed');
}
}
if(user==='notfound'){
    alert('Email not found. Please register.');
    registerForm.style.display="block";
}