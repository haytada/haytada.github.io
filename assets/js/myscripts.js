function getServerInfo() {
    const url = "https://api.mcsrvstat.us/2/mc.sunsetreef.co.uk";

    fetch(url).then(res => res.json()).then(body => {
        var motd = body.motd.html;
        var players = body.players.online;
        var version = body.version;
        if(body.online === true) {
            var serverMsg = `The server is currently <b>ONLINE</b> with ${players} players.<br><i>${version}</i>`
        } else {
            var serverMsg = `The server is currently <b>OFFLINE</b>.<br><i>${version}</i>`
        }

        document.getElementById("motd").innerHTML = serverMsg;
    })
}