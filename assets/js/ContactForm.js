document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const comments = document.getElementById('comments').value;

            localStorage.setItem('formData', JSON.stringify({
                firstName,
                lastName,
                email,
                phoneNumber,
                comments
            }));

            alert('Thanks! We will get back to you shortly.');
        }

        form.classList.add('was-validated');
    }, false);
});
