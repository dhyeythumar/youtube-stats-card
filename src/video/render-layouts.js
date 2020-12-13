const { layoutNames, getlayout } = require("./layouts")
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
            metaData.cardHeight -= 30;
            metaData.cardBodyYPos -= 30;
        }

        // if no icon then shift body left
        if (cardData.views.icon === "") {
            metaData.cardBodyXPos -= 38;
        }
    }

    return getlayout(cardData, cardStyle, metaData, selectedLayout);
}

module.exports = renderLayout;