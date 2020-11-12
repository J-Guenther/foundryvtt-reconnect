class Reconnector {
    static async reconnect() {
        await game.webrtc.disconnect();
    }
}

Hooks.on("renderSettings", (app, html) => {
    const buttonTitle = game.i18n.localize("Reconnect.ReconnectButton");
    const reconnectButton = $('<button>' + buttonTitle + '</button>');
    html.find("button[data-action='players']").after(reconnectButton);
    reconnectButton.click(() => {
        Reconnector.reconnect();
    });
});