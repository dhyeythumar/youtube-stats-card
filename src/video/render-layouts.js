const { layoutNames, Layouts } = require("./layouts")
const { getCommonStyle } = require("../common/getStyles")

const getCustomStyle = (colors) => {
    return `
    .sub-title {
        font: 400 16px Ubuntu, 'Segoe UI', Sans-Serif;
        fill: ${colors.titleColor};
        animation: fadeInAnimation 0.8s ease-in-out forwards;
    }`;
}

const renderLayout = (cardData, colors, metaData, layout) => {

    const customStyle = getCustomStyle(colors);
    const cardStyle = getCommonStyle(colors, customStyle);

    let selectedLayout = layout;
    if (layout != "default") {
        selectedLayout = layoutNames.includes(layout) ? layout : "default";
    }

    // :: add/modify specific values for the specific layout ::
    if (selectedLayout === "default") {
        // height & width for this layout
        metaData.cardHeight = 265;
        metaData.cardWidth = 490;

        // title's (x, y) pos for this layout
        metaData.cardTitleXPos = 30;
        metaData.cardTitleYPos = 50;

        // if no channel name then shift body up & reduce card height
        if (cardData.channelTitle === "") {
            // metaData.cardHeight -= 30; // modify image height also
            metaData.cardBodyYPos -= 30;
        }
        // if no icon then shift body left
        if (cardData.views.icon === "") {
            metaData.cardBodyXPos -= 38;
        }
        return Layouts.default(cardData, cardStyle, metaData);
    }
    else if (selectedLayout === "compact") {
        metaData.cardHeight = 252;
        metaData.cardWidth = 618;

        // video preview's (x, y) pos for this layout
        metaData.cardVideoPreviewXPos = 30;
        metaData.cardVideoPreviewYPos = 30;

        metaData.cardTitleXPos = 266;
        metaData.cardTitleYPos = 50;

        if (cardData.views.icon === "") {
            metaData.cardBodyXPos -= 32;
        }
        if (cardData.videoPreview === "") {
            metaData.cardHeight -= 52;
            metaData.cardWidth -= 94;
            metaData.cardTitleXPos -= 236;
            metaData.cardBodyYPos -= 52;
        }
        return Layouts.compact(cardData, cardStyle, metaData);
    }
}

module.exports = renderLayout;