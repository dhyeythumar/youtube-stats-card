const icons = require("../common/icons");
const { getClipPath, getLOGO } = require("../channel/logo");
const renderLayout = require("../channel/render-layouts")
const { numberFormatter, getCardColors, wrapText } = require("../common/utils");

const renderChannelStatsCard = (stats = {}, options = {}) => {
    const {
        title,
        logoURL,
        viewCount,
        subscriberCount,
        videoCount,
        publishedAt,
        channelStatus
    } = stats;
    const {
        layout = "default",
        custom_title,
        hide_icons = false,
        hide_logo = false,
        hide_border = false,
        title_color,
        icon_color,
        text_color,
        bg_color,
        theme = "default"
    } = options;

    // returns color theme based on colors with proper overrides and defaults
    const colors = getCardColors({
        title_color,
        icon_color,
        text_color,
        bg_color,
        theme,
    });

    let clipPath, logoHolder;
    if (hide_logo === false) {
        clipPath = getClipPath();
        logoHolder = getLOGO(logoURL);
    }

    const cardData = {
        title: wrapText(custom_title) || wrapText(title),
        logo: {
            clipPath: clipPath || "",
            logoHolder: logoHolder || ""
        },
        subscribers: {
            icon: hide_icons ? "" : icons.subscribers,
            label: "Subscribers",
            value: numberFormatter(subscriberCount)
        },
        views: {
            icon: hide_icons ? "" : icons.views,
            label: "Total Views",
            value: numberFormatter(viewCount)
        },
        videos: {
            icon: hide_icons ? "" : icons.videos,
            label: "Total Public Videos",
            value: numberFormatter(videoCount)
        }
    };

    // info about how the card should behave dynamically
    const metaData = {
        cardBorder: hide_border ? 0 : 1,
        // !! have to modify this in render-layout script !!
        cardHeight: 0,
        cardWidth: 0,
        cardLogoXPos: 0,
        cardLogoYPos: 0,
        cardTitleXPos: 0,
        cardTitleYPos: 0,
        cardBodyXPos: 0,
        cardBodyYPos: 0
    };

    return renderLayout(cardData, colors, metaData, layout);
};

module.exports = renderChannelStatsCard;
