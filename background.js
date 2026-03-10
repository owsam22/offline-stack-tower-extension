function checkConnection() {
    if (navigator.onLine) {
        chrome.tabs.create({ url: "game.html" });
    }
}
setInterval(checkConnection, 5000);