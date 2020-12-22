const icons = require("../common/icons");
const renderLayout = require("../video/render-layouts")
const { URL2Base64, numberFormatter, getCardColors, wrapText } = require("../common/utils");

const hexToRGB = (hex) => {
    return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
}

const getVideoPreview = (imageBlob) => {
    return `
    <foreignObject width="206" height="116">
        <div xmlns="http://www.w3.org/1999/xhtml">
            <img width="206" height="116" src="${imageBlob}" style="border-radius: 4px" />
        </div>
    </foreignObject>`;
}

const getGradientVideoPreview = (imageBlob, bgColor) => {
    const RGB = hexToRGB(bgColor);
    return `
    <style>
        .bg-size { 
            width: 490px;
            height: 263px;
            border-radius: 4px;
        }
        .gradient-bg {
            background: linear-gradient(to right, 
                rgba(${RGB[0]}, ${RGB[1]}, ${RGB[2]}, 1)0%, 
                rgba(${RGB[0]}, ${RGB[1]}, ${RGB[2]}, 0.99)25%, 
                rgba(${RGB[0]}, ${RGB[1]}, ${RGB[2]}, 0.88)50%, 
                rgba(${RGB[0]}, ${RGB[1]}, ${RGB[2]}, 0.77)75%, 
                rgba(${RGB[0]}, ${RGB[1]}, ${RGB[2]}, 0.66)100%
            );
        }
    </style>
    <foreignObject transform="translate(0 0)" class="bg-size">
        <div xmlns="http://www.w3.org/1999/xhtml" class="bg-size">
            <img src="${imageBlob}" class="bg-size" />
            <div style="position: relative; top: -267px;" class="bg-size gradient-bg"></div>
        </div>
    </foreignObject>`;
}

const renderVideoStatsCard = async (stats = {}, options = {}) => {
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

    let videoPreview;
    if (hide_preview === false) {
        if (layout === "default") {
            videoPreview = getGradientVideoPreview(await URL2Base64(videoPreviewURL), colors.bgColor);
        }
        else {
            videoPreview = getVideoPreview(await URL2Base64(videoPreviewURL));
        }
    }

    const cardData = {
        title: wrapText(title, 30),
        videoPreview: videoPreview || "",
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
        cardVideoPreviewXPos: 0,
        cardVideoPreviewYPos: 0,
        cardTitleXPos: 0,
        cardTitleYPos: 0,
        cardBodyXPos: 0,
        cardBodyYPos: 0
    };

    return renderLayout(cardData, colors, metaData, layout);
};

module.exports = renderVideoStatsCard;
