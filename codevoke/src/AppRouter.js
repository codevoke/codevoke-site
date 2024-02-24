const HOSTNAME_WITHOUT_PODDOMENS = "codevoke.ru";

export default function AppRouter() {
    var hostname = window.location.host;
    var port = window.location.port;
    var subdomen = hostname.replace(HOSTNAME_WITHOUT_PODDOMENS, "");

    return `
        hostname: ${hostname};<br>
        port: ${port};<br>
        subdomen: ${subdomen}.<br>
    `;
}