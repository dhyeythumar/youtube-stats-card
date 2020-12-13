const icons = require("../common/icons");
const renderLayout = require("../channel/render-layouts")
const { numberFormatter, getCardColors, wrapText } = require("../common/utils");


// Channel logo elements
const getLOGO = (url) => {
    return {
        clipPath:
            `<clipPath id="imgholder" transform="translate(0 0)">
                <circle class="card-logo" cx="40" cy="40" r="40"/>
            </clipPath>`,
        logoHolder:
            `<image transform="translate(0 0)" width="80" height="80" href="${url}" clip-path="url(#imgholder)"/>
            <g data-testid="card-logo" transform="translate(0 20)">
                <circle class="circle-rim" cx="40" cy="40" r="40"/>
            </g>`,
    };
}

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

    let logo;
    if (hide_logo === false) {
        logo = getLOGO(logoURL);
    }

    const cardData = {
        title: wrapText(custom_title) || wrapText(title),
        logo: logo || "",
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
