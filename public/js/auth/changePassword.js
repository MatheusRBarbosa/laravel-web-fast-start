(function () {
    setTimeout(() => {
        _setEmail();
        toast("Sucesso!", "Código enviado para o seu e-mail.", "success");
    }, 250);
})();

/**
 *
 */
function sendPassword(event) {
    event.preventDefault();

    let formIsValid = validateForm("newPassword-form");

    if (formIsValid) {
        const obj = {
            email: $("#email").val(),
            code: $("#code").val(),
            password: $("#password").val(),
        };

        const passwordConfirm = $("#password-confirm").val();
        passwordIsValid = _validatePassword(obj.password, passwordConfirm);

        if (passwordIsValid && !getIsLoading()) {
            setIsLoading(true, "newPassword-button");
            const endpoint = url("change-password");
            request(
                endpoint,
                "PUT",
                obj,
                _onChangePasswordSuccess,
                _onChangePasswordFail
            );
        }
    }
}

/**
 *
 */
function _setEmail() {
    const params = new URLSearchParams(window.location.search);
    if (params.has("email")) {
        const email = params.get("email");
        $("#email").val(email);
    }
}

/**
 *
 * @param {string} password
 * @param {string} confirmation
 */
function _validatePassword(password, confirmation) {
    if (password !== confirmation) {
        toast("Ops...", "A senha e sua confirmação não batem", "danger");
        return false;
    }

    return true;
}

/**
 *
 */
function _onChangePasswordSuccess(response) {
    sweetAlert(
        "success",
        "Senha alterada com sucesso!",
        "Você pode fazer o login agora.",
        (r) => redirect("login")
    );
    setIsLoading(false, "newPassword-button");
}

/**
 *
 */
function _onChangePasswordFail(error) {
    sweetAlert("error", "Ops!", getErrorMessage(error));
    setIsLoading(false, "newPassword-button");
}
