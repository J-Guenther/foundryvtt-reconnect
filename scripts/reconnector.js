class Reconnector {
    static reconnect() {
        console.log("Clicked reconnect!");
    }
}

Hooks.on("renderSettings", (app, html) => {
    const buttonTitle = game.i18n.localize("Reconnect.ReconnectButton");
    const reconnectButton = $('<button>${' + buttonTitle + '}</button>');
    html.find("button[data-action='players']").after(reconnectButton);
    importButton.click(() => {
        Reconnector.reconnect;
    });
});