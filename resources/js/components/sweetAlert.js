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
