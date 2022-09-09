var _table = null; // Singleton da tabela
var _currentPage = 1; // Pagina atual

var _tableId = null; // Id da tabela para ser instanciada
var _dataResource = null; // Url da requests para carregar os dados
var _colFields = []; // nome dos campos para serem plotados na tabela (dentro de data)
var _orderParam = null; // Chave para ordenar dados
var _actionsPolicies = {
    // Politica de acesso nas acoes da tabela
    details: false,
    edit: false,
    delete: false
};

var _canAccessActions = false;

//-------------------------------------------------------//
// Metodos para serem implementados pelas telas:         //
// - detailsData : Handler para acao de detalhes         //
// - editData : Handler para acao de edicao              //
// - deleteData : Handler para acao de exclusao          //
//-------------------------------------------------------//

/**
 * Configura tabela
 * @param {string} id Id da tabela
 * @param {string} dataResource Nome do recurso que será utilizado para buscar os dados
 * @param {string[]} colFields Nome dos campos que serão exibidos na tabela. Ex: ["id", "name", "created_at"]
 * @param {object} orderParam Chave para ordenar os dados. Ex: {key: "createdAt", index: 1}
 * @param {object} actionsPolicies Politicas de acesso a acoes da tabela. Default: {details: false, edit: false, delete: false}
 */
function configureTable(
    id,
    dataResource,
    colFields,
    orderParam = null,
    actionsPolicies = _actionsPolicies
) {
    _tableId = id;
    _dataResource = dataResource;
    _colFields = colFields;
    _orderParam = orderParam;
    _actionsPolicies = actionsPolicies;
    _canAccessActions =
        actionsPolicies.details ||
        actionsPolicies.edit ||
        actionsPolicies.delete;

    _configurePages();
    _configureFilters();
}

/**
 *
 */
function configureTableData(data) {
    setTimeout(() => {
        _configureTableData(data);
    }, 100);
}

/**
 *
 */
function goToPage(page) {
    _currentPage = page;
    const filters = [];
    if (_orderParam) {
        filters.push(_getOrderByFilter());
    }
    _innerFilter(filters);
}

/**
 *
 */
function orderBy() {
    const filters = [];
    if (_orderParam) {
        filters.push(_getOrderByFilter(true));
    }

    _innerFilter(filters);
}

/**
 *
 */
function filter(e = null) {
    if (e) {
        e.preventDefault();
    }

    const filters = [];
    if (_orderParam) {
        filters.push(_getOrderByFilter());
    }
    _innerFilter(filters);
}

/**
 *
 */
function _configurePages() {
    _configurePagination();
    _setCurrentPage();
}

/**
 *
 */
function _configureFilters() {
    const params = new URLSearchParams(window.location.search);

    if (params.has("search")) {
        $("#search").val(params.get("search"));
    }

    if (_orderParam != null && params.has(_orderParam.key)) {
        const newIcon = params.get(_orderParam.key) === "desc" ? "up" : "down";

        const dateFilterIcon = $("#order-filter-icon");
        dateFilterIcon.removeClass();
        dateFilterIcon.addClass(`bi bi-caret-${newIcon}`);
    }
}

/**
 *
 */
function _configurePagination() {
    $("a.page-link").each((i, obj) => {
        obj = $(obj);
        const page = obj.attr("href").split("=")[1];

        obj.removeAttr("href");
        obj.attr("onclick", `goToPage(${page})`);
    });
}

/**
 * @param {Array} customFilers Array de filtros, contem objetos de chave e valor
 * @param {Object} customFilers.key Chave do filtro
 * @param {Object} customFilers.value Valor do filtro
 */
function _innerFilter(customFilers = []) {
    const data = normalizedFormData("filter-form");
    let query = `${_dataResource}?page=${_currentPage}`;

    Object.keys(data).forEach(key => {
        let value = data[key];
        if (Array.isArray(value)) {
            value = value.join(",");
        }

        query += `&${key}=${value}`;
    });

    customFilers.forEach(filter => {
        query += `&${filter.key}=${filter.value}`;
    });

    redirect(query);
}

/**
 *
 */
function _configureTableData(data) {
    const orderFilter = _getOrderFilter();
    const orderIndex = _orderParam ? _orderParam.index : 0;

    _table = $(`#${_tableId}`).DataTable({
        searching: false,
        info: false,
        paging: false,
        columnDefs: _configureColumnDefs(),
        order: [[orderIndex, orderFilter]]
    });

    _renderData(data);
}

/**
 *
 */
function _configureColumnDefs() {
    const columnDefs = [];
    let size = _colFields.length;
    if (_colFields.indexOf("_ACTIONS") > -1) {
        size = _canAccessActions ? size : size - 1;
    }

    for (i = 1; i < size; i++) {
        let col = {
            targets: i - 1,
            className:
                _colFields[i] == "_ACTIONS"
                    ? "actions text-center align-middle"
                    : "text-center align-middle",
            orderable: false
        };

        columnDefs.push(col);
    }

    return columnDefs;
}

/**
 * @param {boolean} invert Inverte resposta
 */
function _getOrderFilter() {
    const params = new URLSearchParams(window.location.search);
    let orderFilter = null;

    if (params.has(_orderParam.key)) {
        return params.get(_orderParam.key);
    }

    if (_orderParam.defaultValue != null) {
        return _orderParam.defaultValue;
    }

    orderFilter = $("#order-filter-icon");
    orderFilter = orderFilter[0].className.split("-")[2];
    return orderFilter === "down" ? "desc" : "asc";
}

/**
 * @param {boolean} invert Inverte o filtro
 */
function _getOrderByFilter(invert = false) {
    let orderFilter = _getOrderFilter();

    if (invert) {
        orderFilter = orderFilter === "asc" ? "desc" : "asc";
    }

    filter = {
        key: _orderParam.key,
        value: orderFilter
    };

    return filter;
}

/**
 *
 */
function _renderData(data = null) {
    if (data) {
        _handleIndexRequest(data.data, true);
    } else {
        const endpoint = url(_dataResource);
        request(endpoint, "GET", null, _handleIndexRequest);
    }
}

/**
 *
 */
function _handleIndexRequest(response) {
    for (let data of response) {
        _addIndicationInTable(data);
    }

    _table.draw();
    enableTooltips();
}

/**
 *
 */
function _addIndicationInTable(data) {
    const row = _prepareRow(data);
    _table.row.add(row).node().id = data[_colFields[0]];
}

/**
 *
 */
function _prepareRow(data) {
    const row = [];

    for (let key of _colFields) {
        if (key == "_ACTIONS" && _canAccessActions) {
            row.push(_renderActions(data));
        } else if (key == "createdAt") {
            let date = data["created_at"] ?? null;
            date = date ? formatBrDate(date) : data["createdAt"];
            row.push(date);
        } else if (key != "id") {
            row.push(data[key]);
        }
    }
    return row;
}

/**
 *
 */
function _setCurrentPage() {
    const params = new URLSearchParams(window.location.search);
    _currentPage = 1;
    if (params.has("page")) {
        _currentPage = params.get("page");
    }
}

/**
 *
 */
function _renderActions(data) {
    let detailsTemplate = "";
    let editTemplate = "";
    let deleteTemplate = "";
    const dataString = JSON.stringify(data);

    if (_actionsPolicies.details) {
        detailsTemplate = `
            <a onclick='detailsData(${dataString})'>
                <i class="bi bi-info-square" data-bs-toggle="tooltip" data-bs-placement="top" title="Detalhes"></i>
            </a>
        `;
    }

    if (_actionsPolicies.edit) {
        editTemplate = `
            <a onclick='editData(${dataString})'>
                <i class="bi bi-pencil-square" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar"></i>
            </a>
        `;
    }

    if (_actionsPolicies.delete) {
        deleteTemplate = `
            <a onclick='deleteData(${dataString})'>
                <i class="bi bi-trash" data-bs-toggle="tooltip" data-bs-placement="top" title="Apagar"></i>
            </a>
        `;
    }

    return `${detailsTemplate}${editTemplate}${deleteTemplate}`;
}
