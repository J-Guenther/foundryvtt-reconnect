class Reconnector {
    static async reconnect() {
        await game.webrtc.disconnect();
        await game.webrtc.connect();
    }
}

Hooks.on("renderSettings", (app, html) => {
    const buttonTitle = game.i18n.localize("Reconnect.ReconnectButton");
    const reconnectButton = $('<button><i class="fas fa-sync"></i>' + buttonTitle + '</button>');
    html.find("button[data-action='players']").after(reconnectButton);
    $('#settings-game').find("button[data-action='modules']").after(reconnectButton);
    reconnectButton.click(() => {
        console.log("Attempt webrtc reconnection");
        Reconnector.reconnect();
    });
});