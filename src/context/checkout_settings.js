import Context from "./app_context";

const CheckoutSettings = () => {}
CheckoutSettings.onError = (message) => {
    alert(message);
}
CheckoutSettings.init = (token) => {
    const loadConf = (token) => {
        Context.init();
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', Context.confUrl() + '/' + token);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    return;
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                return;
                alert('error');
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send();
        });
    }

    return loadConf(token)

}

export default CheckoutSettings;