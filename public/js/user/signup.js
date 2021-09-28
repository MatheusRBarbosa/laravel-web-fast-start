/**
 * 
 */
function signup(event) {
    event.preventDefault();
    let formIsValid = validateForm('signup-form');

    if (formIsValid) {

        const obj = {
            'name': $("#name").val(),
            'email': $('#email').val(),
            'password': $('#password').val()
        };

        const passwordConfirm = $('#password-confirm').val();
        passwordIsValid = _validatePassword(obj.password, passwordConfirm);

        if (passwordIsValid && !getIsLoading()) {
            setIsLoading(true, 'signup-button');
            const endpoint = url('api/signup');
            request(endpoint, 'POST', obj, _onSignupSuccess, _onSignupFail);
        }

    }
}

/**
 * 
 */
function _onSignupSuccess(response) {
    setIsLoading(false, 'signup-button');
    sweetAlert('success', 'User created', 'You can login now', (r) => redirect('login'));
}

/**
 * 
 */
function _onSignupFail(error) {
    console.log("Signup error >> ", error);

    const msg = error.status == 422 ? get422FirstError(error) : error.responseJSON.error;

    sweetAlert('error', 'Ops!', msg);
    setIsLoading(false, 'signup-button');
}

/**
 * 
 * @param {string} password 
 * @param {string} confirmation 
 */
function _validatePassword(password, confirmation) {
    if (password !== confirmation) {
        toast('Ops...', 'Password and confirmation doesnt match', 'danger');
        return false;
    }

    return true;
}