const channelAPI = require("./channel")

module.exports = async (req, res) => {
    return await channelAPI(req, res);
}
