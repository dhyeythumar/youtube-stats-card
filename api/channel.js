require("dotenv").config();
const fetchChannelStats = require("../src/fetchers/channelStats-fetcher");
const renderChannelStatsCard = require("../src/cards/channel-card");
const { renderError, parseBoolean, clampValue, CONSTANTS } = require("../src/common/utils");

// :: TODO list ::
// 1. check id channel id is NULL [Done]
// 2. Cache is not working in vercel dev
// 3. How to change the layout theme dynamically [Done]

module.exports = async (req, res) => {
    const {
        channelid,
        layout,
        custom_title,
        hide_icons,
        hide_logo,
        hide_border,
        title_color,
        icon_color,
        text_color,
        bg_color,
        theme,
        cache_seconds,
    } = req.query;

    res.setHeader("Content-Type", "image/svg+xml");

    try {
        const stats = await fetchChannelStats(channelid);

        // Cache not working in vercel dev env
        const cacheSeconds = clampValue(
            parseInt(cache_seconds || CONSTANTS.TWO_HOURS, 10),
            CONSTANTS.TWO_HOURS,
            CONSTANTS.ONE_DAY
        );
        res.setHeader("Cache-Control", `public, max-age=${10000}`);

        return res.send(
            renderChannelStatsCard(stats, {
                layout,
                custom_title,
                hide_icons: parseBoolean(hide_icons),
                hide_logo: parseBoolean(hide_logo),
                hide_border: parseBoolean(hide_border),
                title_color,
                icon_color,
                text_color,
                bg_color,
                theme
            })
        );
    } catch (err) {
        return res.send(renderError(err.message, err.secondaryMessage));
    }
};
