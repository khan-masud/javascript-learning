const form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userInfo = {
        name,
        email,
        password
    };
})