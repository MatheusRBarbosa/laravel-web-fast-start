/**
 * @param {string} inputId Id do campo que será mascarado
 */
function maskCep(inputId) {
    _applyMask(inputId, _maskCep);
}

/**
 * @param {string} inputId Id do campo que será mascarado
 */
function maskCpf(inputId) {
    _applyMask(inputId, _maskCpf);
}

/**
 * @param {string} inputId Id do campo que será mascarado
 */
function maskCellphone(inputId) {
    _applyMask(inputId, _maskCellphone);
}

/**
 *
 * @param {*} inputId Id do campo que será mascarado
 */
function maskCurrency(inputId) {
    _applyMask(inputId, _maskCurrency);
}

/**
 * @param {string} inputId Id do campo que será mascarado
 * @param {function} mask Function que será aplicada na mascara
 */
function _applyMask(inputId, mask) {
    const input = $(`#${inputId}`);
    input.on("keypress", () => {
        const v = input.val();
        input.val(mask(v));
    });
}

/**
 *
 */
function _maskCep(v) {
    v = v.replace(/[^0-9]/, "");
    v = v.replace(/D/g, "");
    v = v.replace(/^(\d{5})(\d)/, "$1-$2");
    return v;
}

/**
 *
 */
function _maskCellphone(v) {
    v = v.replace(/[^0-9]/, "");
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    return v;
}

/**
 *
 */
function _maskCpf(v) {
    v = v.replace(/[^0-9]/, "");
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return v;
}

/**
 *
 */
function _maskCurrency(v) {
    v = v.replace(".", "");
    v = v.replace(",", "");
    v = v.replace(/\D/g, "");
    if (v.length > 1) {
        v = new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(parseFloat(v) / 100);
    }
    return v;
}
