module.exports = {
    //Idfk what i did here but it works i guess...
    createLogString: function (date, message) {
        return `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]: ${message}`
    },

    logToConsole: function (date, message) {
        console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]: ${message}`);
    },

    commandLogToConsole: function (date, commandName, userName) {
        console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]: ${userName} used ${commandName}-Command`);
    }
}
