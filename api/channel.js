const fetchChannelStats = require("../src/fetchers/channelStats-fetcher");
const renderChannelStatsCard = require("../src/cards/channel-card");
const { renderError, parseBoolean, clampValue, CONSTANTS } = require("../src/common/utils");

// :: TODO list ::
// 1. Is there any other efficient way to render card layouts dynamically??

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

    // External resources (e.g. images, stylesheets) cannot be loaded, though they can be used if inlined through BlobBuilder object URLs or data: URIs.

    // script-src 'strict-dynamic' 'nonce-rAnd0m123' 'unsafe-inline' http: https:;
    // object-src 'none';
    // base-uri 'none';
    // img-src https: data:;
    // require-trusted-types-for 'script';

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Content-Security-Policy", "img-src https: data:;");
    res.setHeader("Access-Control-Allow-Origin", "*");

    try {
        const stats = await fetchChannelStats(channelid);

        // Cache not working in vercel dev env
        const cacheSeconds = clampValue(
            parseInt(cache_seconds || CONSTANTS.TWO_HOURS, 10),
            CONSTANTS.TWO_HOURS,
            CONSTANTS.ONE_DAY
        );

        res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);

        return res.send(
            await renderChannelStatsCard(stats, {
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
