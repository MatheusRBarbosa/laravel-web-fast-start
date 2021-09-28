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
        const endpoint = url('login');
        request(endpoint, 'POST', obj, _onLoginSuccess, _onLoginFail);
    }
}

function _onLoginSuccess(token) {
    setIsLoading(false, 'login-button');
    redirect('');
}

function _onLoginFail(error) {
    setIsLoading(false, 'login-button');
    toast('Ops!', error.responseJSON.error, 'danger');
}