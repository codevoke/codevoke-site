import App from "./App"

const HOSTNAME_WITHOUT_PODDOMENS = "codevoke.ru";
const SERVER_URL = "https://server.com/";  // for exm

export default function AppRouter() {
    var hostname = window.location.host;
    // var port = window.location.port;
    var subdomen = hostname.replace(HOSTNAME_WITHOUT_PODDOMENS, "");

    if (subdomen == "api.") {
        var response_json = null;
        const urlParams = new URLSearchParams(window.location.search);
        var method = urlParams.get('method')
        var endpoint = urlParams.get("endpoint")
        var body = urlParams.get("body")
        const response = fetch(SERVER_URL + endpoint, {
            method: method.toUpperCase(),
            headers: {"Content-Type": "application/json"},
            body: body
        }).then((res) => {
            response_json = {
                request_data: body,
                result: "success",
                code: res.status,
                data: res.json()
            }
        })
        .catch((error) => {
            response_json = {
                request_data: body,
                result: "error",
                code: 400,
                data: error
            }
        })

        return `
            <pre><code>
                ${response_json}
            </pre></code>
        `;
    }
    else
        return (<App subdomen={subdomen} />);
}