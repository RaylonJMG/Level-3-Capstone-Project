/**************************************************************
 * @summary Redirects the SPA to the root path
 * @param rootPath Set this to the correct root path
 * @description
 * Useful when an SPA page is refreshed.
 * Load this module through 404.html to redirect on 404 errors.
 * By redirecting to the root path, 404 errors are removed.
 * Use Redirect.js to redirect to the path where the 404 occured.
 **************************************************************/

const rootPath = "/react-navigation";
const path = window.location.pathname;
window.localStorage.setItem("redirect", path);
window.location.replace(rootPath);
