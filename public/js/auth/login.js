/**
 * 
 */
function login(event) {
    event.preventDefault();
    let formIsValid = validateForm('login-form');

    if (formIsValid && !getIsLoading()) {
        const obj = {
            'email': $('#email').val(),
            'password': $('#password').val()
        };

        setIsLoading(true, 'login-button');
        const endpoint = url('api/login');
        request(endpoint, 'POST', obj, _onLoginSuccess, _onLoginFail);
    }
}

function _onLoginSuccess(token) {
    console.log(token);
    setIsLoading(false, 'login-button');
}

function _onLoginFail(error) {
    showToast('Ops!', error.responseJSON.error, 'danger');
    setIsLoading(false, 'login-button');
}