const icons = require("../common/icons");
const renderLayout = require("../video/render-layouts")
const { numberFormatter, getCardColors, wrapText } = require("../common/utils");

const getVideoPreview = (url) => {
    return `<image transform="translate(20 0)" style="border-radius:4px" width="470" height="263" href="${url}"/>`;
}
const getGradientBG = (bgColor) => {
    return `
    <linearGradient id="linear-gradient" x1="1" y1="0.5" x2="0" y2="0.5" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="${bgColor}" stop-opacity="0.6"/>
        <stop offset="0.4" stop-color="${bgColor}" stop-opacity="0.92"/>
        <stop offset="0.6" stop-color="${bgColor}" stop-opacity="0.96"/>
        <stop offset="0.8" stop-color="${bgColor}" stop-opacity="100"/>
    </linearGradient>`;
}
const getGradientStyle = () => {
    return `.gradient{
        fill: url(#linear-gradient);
    }`;
}

const renderVideoStatsCard = (stats = {}, options = {}) => {
    const {
        title,
        videoPreviewURL,
        channelTitle,
        viewCount,
        likeCount,
        dislikeCount,
        commentCount,
        publishedAt
    } = stats;
    const {
        layout = "default",
        hide_channelname = false,
        hide_icons = false,
        hide_preview = false,
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

    let preview, gradientBG, gradientStyle;
    if (hide_preview === false) {
        preview = getVideoPreview(videoPreviewURL);
        gradientBG = getGradientBG(colors.bgColor);
        gradientStyle = getGradientStyle();
    }

    const cardData = {
        title: wrapText(title),
        videoPreview: {
            preview: preview || "",
            gradientBG: gradientBG || "",
            gradientStyle: gradientStyle || ""
        },
        channelTitle: hide_channelname ? "" : wrapText(channelTitle),
        views: {
            icon: hide_icons ? "" : icons.views,
            label: "Views",
            value: numberFormatter(viewCount)
        },
        likes: {
            icon: hide_icons ? "" : icons.likes,
            label: "Likes",
            value: numberFormatter(likeCount)
        },
        dislikes: {
            icon: hide_icons ? "" : icons.dislikes,
            label: "Dislikes",
            value: numberFormatter(dislikeCount)
        },
        comments: {
            icon: hide_icons ? "" : icons.comments,
            label: "Comments",
            value: numberFormatter(commentCount)
        }
    };

    // info about how the card should behave dynamically
    const metaData = {
        cardBorder: hide_border ? 0 : 1,
        // !! have to modify this in render-layout script !!
        cardHeight: 0,
        cardWidth: 0,
        cardTitleXPos: 0,
        cardTitleYPos: 0,
        cardBodyXPos: 0,
        cardBodyYPos: 0
    };

    return renderLayout(cardData, colors, metaData, layout);
};

module.exports = renderVideoStatsCard;
