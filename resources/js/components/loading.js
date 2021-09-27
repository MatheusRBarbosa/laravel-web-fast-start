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