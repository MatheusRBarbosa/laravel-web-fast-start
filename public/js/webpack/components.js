function validateForm(t){let n=!0,o=document.querySelectorAll(`#${t}`);return Array.prototype.slice.call(o).forEach(function(t){t.checkValidity()||(n=!1),t.classList.add("was-validated")}),n}var _cachedValue=null,_isLoading=!1;function getIsLoading(){return _isLoading}function setIsLoading(t,n,o=null){_isLoading=t,t?_startLoading(n):_stopLoading(n,o)}function _startLoading(t){_cachedValue=$(`#${t}`).html(),$(`#${t}`).html(_getLoading())}function _stopLoading(t,n=null){const o=n||_cachedValue;$(`#${t}`).html(o)}function _getLoading(){return'<div class="spinner-border spinner-border-sm" role="status">\n                <span class="visually-hidden">Loading...</span>\n            </div>\n            '}function sweetAlert(t,n,o,e=null,r={}){let i=_getAlertFn(t);e?i(n,o,r).then(e):i(n,o,r)}function _success(t,n,o={}){return Swal.fire({title:t,html:n,confirmButtonColor:"var(--primary)",confirmButtonText:"OK",icon:"success"})}function _error(t,n,o={}){return Swal.fire({title:t,html:n,confirmButtonColor:"var(--primary)",confirmButtonText:"OK",icon:"error"})}function _warning(t,n,o={}){return Swal.fire({title:t,html:n,confirmButtonColor:"var(--primary)",confirmButtonText:"OK",showCancelButton:!0,cancelButtonText:"Voltar",icon:"warning"})}function _info(t,n,o={}){return Swal.fire({title:t,html:n,confirmButtonColor:"var(--primary)",confirmButtonText:"OK",icon:"info"})}function _question(t,n,o={}){return Swal.fire({title:t,html:n,confirmButtonColor:"var(--primary)",confirmButtonText:"OK",icon:"question"})}function _custom(t,n,o={}){return Swal.fire({title:t,html:n,confirmButtonColor:"var(--primary)",confirmButtonText:o.confirmButtonText,showCancelButton:o.showCancelButton,cancelButtonText:o.cancelButtonText,icon:o.icon})}function _getAlertFn(t){return"success"===t?_success:"error"===t?_error:"warning"===t?_warning:"info"===t?_info:"question"===t?_question:"custom"===t?_custom:void 0}function toast(t,n,o="default",e="just now",r="default"){let i=null;"default"===r&&(i=_defaultToast(t,n,o,e)),i.show()}function _defaultToast(t,n,o,e){const r=_getEventClasses(o),i=$("#default-toast");return i.addClass(r),$("#default-toast-title").html(t),$("#default-toast-message").html(n),$("#default-toast-time").html(e),new bootstrap.Toast(i)}function _getEventClasses(t){return"default"===t?"":"danger"===t?"bg-danger text-white":"success"===t?"bg-success text-white":"primary"===t?"bg-primary":void 0}function url(t){return`${window.location.protocol}//${window.location.host}/${t}`}function redirect(t){const n=url(t);window.location.href=n}function redirectPost(t,n,o){const e={_token:o};n={...n,...e};var r=document.createElement("form");for(var i in document.body.appendChild(r),r.method="post",r.action=t,n){var a=document.createElement("input");a.type="hidden",a.name=i,a.value=n[i],r.appendChild(a)}r.submit()}function request(t,n,o,e,r=null,i=!0){const a=i?{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}:null;$.ajax({url:t,headers:a,type:n,data:o,success:e,error:r})}function get422FirstError(t){const n=t.responseJSON.errors;return n[Object.keys(n)[0]]}