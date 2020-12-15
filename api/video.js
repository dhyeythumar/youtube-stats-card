const fetchVideoStats = require("../src/fetchers/videoStats-fetcher.js");
const renderVideoStatsCard = require("../src/cards/video-card");
const { renderError, parseBoolean, clampValue, CONSTANTS } = require("../src/common/utils");

// :: TODO list ::
// 1. Is there any other efficient way to render card layouts dynamically??

module.exports = async (req, res) => {
    const {
        videoid,
        layout,
        hide_channelname,
        hide_icons,
        hide_preview,
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
        const stats = await fetchVideoStats(videoid);

        // Cache not working in vercel dev env
        const cacheSeconds = clampValue(
            parseInt(cache_seconds || CONSTANTS.TWO_HOURS, 10),
            CONSTANTS.TWO_HOURS,
            CONSTANTS.ONE_DAY
        );

        res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);

        return res.send(
            await renderVideoStatsCard(stats, {
                layout,
                hide_channelname: parseBoolean(hide_channelname),
                hide_icons: parseBoolean(hide_icons),
                hide_preview: parseBoolean(hide_preview),
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
