/**
 *
 * @param {string} resource
 */
function url(resource) {
    const protocolo = window.location.protocol;
    const host = window.location.host;

    const url = `${protocolo}//${host}/${resource}`;
    return url;
}

/**
 *
 * @param {string} resource
 */
function redirect(resource) {
    const endpoint = url(resource);
    window.location.href = endpoint;
}

/**
 *
 * @param {string} url
 * @param {Object} data
 */
function redirectPost(url, data, csrf) {
    const csrfToken = { _token: csrf };
    data = { ...data, ...csrfToken };

    var form = document.createElement("form");
    document.body.appendChild(form);
    form.method = "post";
    form.action = url;
    for (var name in data) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = data[name];
        form.appendChild(input);
    }
    form.submit();
}

/**
 * @param {string} value
 */
function normalizeNumber(value) {
    return value.replace(/[^\d]/g, "");
}

/**
 *
 * @param {string} rota
 * @param {string} metodo
 * @param {Object} data
 * @callback success
 * @callback fail
 */
function request(rota, metodo, data, success, fail = null, csrf = true) {
    const headers = csrf
        ? { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") }
        : null;
    $.ajax({
        url: rota,
        headers,
        type: metodo,
        data: data,
        success: success,
        error: fail
    });
}

/**
 * @param {Object} error
 * @param {string} buttonId Id do botão para parar loading
 */
function onFail(error, buttonId = null) {
    console.log("change password error >> ", error);

    sweetAlert("error", "Ops!", getErrorMessage(error));

    if (buttonId) {
        setIsLoading(false, buttonId);
    }
}

/**
 *
 */
function formatBrDate(date) {
    let splitter = date.includes("T") ? "T" : null;
    if (!splitter) {
        splitter = date.includes(" ") ? " " : null;
    }

    date = date.split(splitter);
    date = date[0].split("-");

    const day = date[2];
    const month = date[1];
    const year = date[0];

    return `${day}/${month}/${year}`;
}

/**
 *
 */
function getErrorMessage(error) {
    return error.status == 422
        ? _get422FirstError(error)
        : error.responseJSON.error || error.responseJSON.message;
}

/**
 *
 */
function _get422FirstError(error) {
    const obj = error.responseJSON.errors;
    const key = Object.keys(obj)[0];
    return obj[key];
}
