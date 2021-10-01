
(function () {
    setTimeout(_initState, 10);
})()

/**
 * 
 */
function _initState() {
    $(`nav a[href$="${location.pathname}"]`).addClass('active');
}