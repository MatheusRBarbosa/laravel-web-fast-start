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
function sweetAlert(type, title, message, callback = null, customOpts = {}) {
    let alert = _getAlertFn(type);
    callback ? alert(title, message, customOpts).then(callback) : alert(title, message, customOpts);
}

function _success(title, message, customOpts = {}) {
    return Swal.fire({
        title,
        html: message,
        confirmButtonColor: 'var(--primary)',
        confirmButtonText: 'OK',
        icon: 'success'
    });
}

function _error(title, message, customOpts = {}) {
    return Swal.fire({
        title,
        html: message,
        confirmButtonColor: 'var(--primary)',
        confirmButtonText: 'OK',
        icon: 'error'
    });
}

function _warning(title, message, customOpts = {}) {
    return Swal.fire({
        title,
        html: message,
        confirmButtonColor: 'var(--primary)',
        confirmButtonText: 'OK',
        showCancelButton: true,
        cancelButtonText: 'Voltar',
        icon: 'warning'
    });
}

function _info(title, message, customOpts = {}) {
    return Swal.fire({
        title,
        html: message,
        confirmButtonColor: 'var(--primary)',
        confirmButtonText: 'OK',
        icon: 'info'
    });
}

function _question(title, message, customOpts = {}) {
    return Swal.fire({
        title,
        html: message,
        confirmButtonColor: 'var(--primary)',
        confirmButtonText: 'OK',
        icon: 'question'
    });
}

function _custom(title, message, customOpts = {}) {
    return Swal.fire({
        title,
        html: message,
        confirmButtonColor: 'var(--primary)',
        confirmButtonText: customOpts.confirmButtonText,
        showCancelButton: customOpts.showCancelButton,
        cancelButtonText: customOpts.cancelButtonText,
        icon: customOpts.icon
    });
}

function _getAlertFn(type) {
    if (type === 'success') {
        return _success;
    } else if (type === 'error') {
        return _error;
    } else if (type === 'warning') {
        return _warning;
    } else if (type === 'info') {
        return _info;
    } else if (type === 'question') {
        return _question;
    } else if (type === 'custom') {
        return _custom;
    }
}

/**
 * 
 * @param {string} header 
 * @param {string} message 
 * @param {string} event  
 * @param {string} time
 * @param {string} template Template visual do toast, deve ser acompanhado pela view 
 */
function toast(header, message, event = 'default', time = 'just now', template = 'default') {
    let toast = null;

    if (template === 'default') {
        toast = _defaultToast(header, message, event, time);
    }

    toast.show()
}

/**
 * 
 * @param {string} header 
 * @param {string} message
 * @param {string} time
 */
function _defaultToast(header, message, event, time) {
    const eventClasses = _getEventClasses(event);
    const defaultToast = $('#default-toast');
    defaultToast.addClass(eventClasses);

    $('#default-toast-title').html(header);
    $('#default-toast-message').html(message);
    $('#default-toast-time').html(time);

    return new bootstrap.Toast(defaultToast);
}

/**
 * 
 * @param {string} event 
 */
function _getEventClasses(event) {
    if (event === 'default') {
        return '';
    } else if (event === 'danger') {
        return 'bg-danger text-white';
    } else if (event === 'success') {
        return 'bg-success text-white';
    } else if (event === 'primary') {
        return 'bg-primary';
    }
}
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

/**
 * 
 */
function get422FirstError(error) {
    const obj = error.responseJSON.errors;
    const key = Object.keys(obj)[0];
    return obj[key];
}
