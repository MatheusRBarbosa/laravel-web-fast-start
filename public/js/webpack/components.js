var _cachedValue=null;function isLoading(t,n,a=null){t?_startLoading(n):_stopLoading(n,a)}function _startLoading(t){_cachedValue=$(`#${t}`).html(),$(`#${t}`).html(_getLoading())}function _stopLoading(t,n=null){const a=n||_cachedValue;$(`#${t}`).html(a)}function _getLoading(){return'<svg class="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">\n        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\n        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>s\n    </svg>'}
