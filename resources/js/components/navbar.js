
var _navOptionsToggled = false;

/**
 * Toggle or unToggle navbar options
 */
function toggleNavOptions() {
    const options = $('#nav-options');
    navOptionsToggled ? options.hide() : options.show();
    navOptionsToggled = !navOptionsToggled;
}