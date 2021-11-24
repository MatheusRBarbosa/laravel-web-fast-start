/**
 *
 */
function validateForm(id) {
    let valid = true;
    let forms = document.querySelectorAll(`#${id}`);

    Array.prototype.slice.call(forms).forEach(function(form) {
        if (!form.checkValidity()) {
            valid = false;
        }

        form.classList.add("was-validated");
    });

    return valid;
}

/**
 *
 */
function datepicker(id) {
    $(`#${id}`).datepicker({
        format: "dd/mm/yyyy",
        todayBtn: "linked",
        // language: "pt-BR",
        autoclose: true,
        todayHighlight: true
    });
}

/**
 *
 */
function formatDate(date) {
    const day = date.split("/")[0];
    const month = date.split("/")[1];
    const year = date.split("/")[2];

    return `${year}-${month}-${day}`;
}

/**
 * @param {string} formId
 * @return {array} newData
 */
function normalizedFormData(formId) {
    const data = $(`#${formId}`).serializeArray();
    let newData = {};

    data.forEach(obj => {
        let value = null;
        data.forEach(obj2 => {
            if (obj.name == obj2.name) {
                if (value == null) {
                    value = obj2.value;
                } else {
                    if (typeof value == "string") {
                        const oldValue = value;
                        value = [oldValue, obj2.value];
                    } else {
                        value.push(obj2.value);
                    }
                }
            }
        });
        newData[obj.name] = value;
    });

    return newData;
}

/**
 *
 */
function toFormData(o) {
    const formData = new FormData();
    for (let key in o) {
        formData.append(key, o[key]);
    }
    return formData;
}
