/**
 * 
 */
function validateForm(id) {
    let valid = true;
    let forms = document.querySelectorAll(`#${id}`)

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            if (!form.checkValidity()) {
                valid = false;
            }

            form.classList.add('was-validated')
        })

    return valid;
}