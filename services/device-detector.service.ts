/**
 * функция определяет тип устройства
 * @param req
 */
export function isMobile(req) {
    return (req
        ? req.headers['user-agent']
        : navigator.userAgent).match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    );
}

/**
 * функция определяет браузер на сервере по userAgent
 * @param req
 */
export function isIe(req) {
    if (req) {
        return (req.headers['user-agent'].indexOf('MSIE') !== -1 || req.headers['user-agent'].indexOf('Trident/') > 0);
    }
    return isIeClient();
}

/**
 * функция определяет браузер клиента на клиенте если IE/Edge вернет версию браузера или false
 */
export function isIeClient() {
    if (typeof window === 'undefined') {
        return false;
    }
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    const trident = ua.indexOf('Trident/');
    if (trident > 0) {
        const rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    const edge = ua.indexOf('Edge/');
    if (edge > 0) {
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    return false;
}
