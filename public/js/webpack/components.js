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
var _cachedValue = null;
var _isLoading = false;

/**
 * @return boolean
 */
function getIsLoading() {
    return _isLoading;
}

/**
 * 
 * @param {boolean} is True if loading is active
 * @param {string} id Id of element to replace with the loading svg
 * @param {any} defaultValue Default value to replace loading when is done
 */
function setIsLoading(is, id, defaultValue = null) {
    _isLoading = is;
    is ? _startLoading(id) : _stopLoading(id, defaultValue);
}

function _startLoading(id) {
    _cachedValue = $(`#${id}`).html();
    $(`#${id}`).html(_getLoading());
}

function _stopLoading(id, defaultValue = null) {
    const value = defaultValue ? defaultValue : _cachedValue;
    $(`#${id}`).html(value);
}

function _getLoading() {
    return `<div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            `;
}
/**
 * 
 * @param {string} recurso 
 */
function url(recurso) {
    const protocolo = window.location.protocol;
    const host = window.location.host;

    const url = `${protocolo}//${host}/${recurso}`;
    return url;
}

/**
 * 
 * @param {string} url 
 * @param {Object} data 
 */
function redirectPost(url, data, csrf) {
    const csrfToken = { '_token': csrf };
    data = { ...data, ...csrfToken }

    var form = document.createElement('form');
    document.body.appendChild(form);
    form.method = 'post';
    form.action = url;
    for (var name in data) {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = data[name];
        form.appendChild(input);
    }
    form.submit();
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
    const headers = csrf ? { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } : null
    $.ajax({
        url: rota,
        headers,
        type: metodo,
        data: data,
        success: success,
        error: fail
    });
}
