const icons = require("../common/icons");
// const { getClipPath, getLOGO } = require("../video/preview");
const renderLayout = require("../video/render-layouts")
const { numberFormatter, getCardColors, wrapText } = require("../common/utils");

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

    // let clipPath, previewHolder;
    // if (hide_logo === false) {
    //     clipPath = getClipPath();
    //     previewHolder = getLOGO(videoPreviewURL);
    // }

    const cardData = {
        title: wrapText(title),
        // videoPreview: {
        //     clipPath: clipPath || "",
        //     previewHolder: previewHolder || ""
        // },
        channelTitle: wrapText(channelTitle),
        views: {
            icon: hide_icons ? "" : icons.views,
            label: "Total Views",
            value: numberFormatter(viewCount)
        },
        likes: {
            icon: hide_icons ? "" : icons.likes,
            label: "Total Likes",
            value: numberFormatter(likeCount)
        },
        dislikes: {
            icon: hide_icons ? "" : icons.dislikes,
            label: "Total Dislikes",
            value: numberFormatter(dislikeCount)
        },
        comments: {
            icon: hide_icons ? "" : icons.comments,
            label: "Total Comments",
            value: numberFormatter(commentCount)
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

module.exports = renderVideoStatsCard;
