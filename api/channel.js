import fetchChannelStats from "../src/fetchers/channelStats-fetcher.js";
import renderChannelStatsCard from "../src/cards/channel-card.js";
import { renderError, parseBoolean, clampValue, CONSTANTS } from "../src/common/utils.js";
import { config } from "dotenv";
config();

export default async (req, res) => {
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
    res.setHeader("Content-Security-Policy", "img-src data:; style-src 'unsafe-inline'; script-src 'unsafe-inline'");

    try {
        const stats = await fetchChannelStats(channelid);

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
