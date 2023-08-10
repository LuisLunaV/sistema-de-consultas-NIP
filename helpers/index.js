const { generateSmsPayload, statusSmsPayload } = require("./generate-sms");
const { initigPolling }                        = require('./init-polling.js');

module.exports = {
    generateSmsPayload, 
    statusSmsPayload,
    initigPolling
}