var navOptionsToggled = false;
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

/**
 * 
 */
function toggleNavOptions() {
    const options = $('#nav-options');
    navOptionsToggled ? options.hide() : options.show();
    navOptionsToggled = !navOptionsToggled;
}