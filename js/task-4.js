const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;

    if (!elements.email.value || !elements.password.value) {
        alert(`All form fields must be filled in`)
        return;
    } 

    const userName = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    }
    console.log(userName);

    form.reset();
}
