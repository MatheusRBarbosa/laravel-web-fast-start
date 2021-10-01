
(function () {
    setTimeout(_initState, 10);
})()

/**
 * 
 */
function _initState() {
    const item = $(`nav a[href$="${location.pathname}"]`).addClass('active');
}