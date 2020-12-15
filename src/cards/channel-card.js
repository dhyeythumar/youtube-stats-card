const icons = require("../common/icons");
const renderLayout = require("../channel/render-layouts")
const { URL2Base64, numberFormatter, getCardColors, wrapText } = require("../common/utils");

// Channel logo elements
const getLOGO = (imageBlob) => {
    return `<foreignObject transform="translate(0 0)" width="80" height="80">
        <div xmlns="http://www.w3.org/1999/xhtml">
            <img width="100%" height="100%" src="${imageBlob}" style="border-radius:50%" />
        </div>
    </foreignObject>
    <g data-testid="card-logo" transform="translate(0 20)">
        <circle class="circle-rim" cx="40" cy="40" r="40"/>
    </g>`;
}

const renderChannelStatsCard = async (stats = {}, options = {}) => {
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

    const cardData = {
        title: wrapText(custom_title) || wrapText(title),
        logo: hide_logo ? "" : getLOGO(await URL2Base64(logoURL)),
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
