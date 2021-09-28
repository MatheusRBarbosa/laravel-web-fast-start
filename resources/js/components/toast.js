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