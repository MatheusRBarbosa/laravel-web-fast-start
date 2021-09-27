/**
 * 
 */
function login(event) {
    event.preventDefault();
    let formIsValid = validateForm('login-form');

    if (formIsValid && !getIsLoading()) {
        console.log(event);
        setIsLoading(true, 'login-button');
    }
}