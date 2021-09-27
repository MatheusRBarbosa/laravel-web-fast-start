var _cachedValue = null;
var _isLoading = false;

/**
 * @return boolean
 */
function getIsLoadign() {
    return _isLoading;
}

/**
 * 
 * @param {boolean} is True if loading is active
 * @param {string} id Id of element to replace with the loading svg
 * @param {any} defaultValue Default value to replace loading when is done
 */
function isLoading(is, id, defaultValue = null) {
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
    return `<svg class="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>s
    </svg>`;
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
