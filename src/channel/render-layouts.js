const { layoutNames, getlayout } = require("./layouts")
const { getCommonStyle } = require("../common/getStyles")

const getCustomStyle = (colors) => {
    return `
    .circle-rim {
        stroke: ${colors.titleColor};
        stroke-dasharray: 250;
        fill: none;
        stroke-width: 4;
        stroke-linecap: round;
        opacity: 1;
        transform-origin: 30px 30px;
        transform: rotate(-90deg);
        animation: logoAnimation 1s forwards ease-in-out;
    }
    @keyframes logoAnimation {
        from {
            stroke-dashoffset: 251;
        }
        to {
            stroke-dashoffset: 0;
        }
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
        metaData.cardHeight = 214;
        metaData.cardWidth = 450;

        // logo's (x, y) pos for this layout
        metaData.cardLogoXPos = 30;
        metaData.cardLogoYPos = 30;

        // title's (x, y) pos for this layout
        metaData.cardTitleXPos = 140;
        metaData.cardTitleYPos = 50;

        // if no icon then shift body left by 36
        if (cardData.views.icon === "") {
            metaData.cardBodyXPos -= 36;
        }
        // if no logo then shift title & body left by 40
        if (cardData.logo.clipPath === "") {
            metaData.cardTitleXPos -= 40;
            metaData.cardBodyXPos -= 40;
        }
    }
    else if (selectedLayout === "center") {
        metaData.cardBorder = 2;
        // height & width for this layout
        metaData.cardHeight = 312;
        metaData.cardWidth = 400;

        // logo's (x, y) pos for this layout
        metaData.cardLogoXPos = 160;
        metaData.cardLogoYPos = 25;

        // title's (x, y) pos for this layout
        // x co-ord is auto centered
        metaData.cardTitleYPos = 162;

        // TODO :: find a better way to center body's x co-ord
        metaData.cardBodyXPos -= 12;

        // if no icon then shift body left by 18
        if (cardData.views.icon === "") {
            metaData.cardBodyXPos -= 18;
        }
        // if no logo then shift title & body up by 102
        if (cardData.logo.clipPath === "") {
            metaData.cardTitleYPos -= 102;
            metaData.cardBodyYPos -= 102;
            metaData.cardHeight -= 102;
            metaData.cardBorder = 1;  // if no logo then no line
        }
    }

    return getlayout(cardData, cardStyle, metaData, selectedLayout);
}

module.exports = renderLayout;


/*
----------- object skeleton for cardData -----------
cardData = {
    title,
    logo: {
        clipPath, logoHolder
    },
    subscribers: {
        icon, label, value
    },
    views: {
        icon, label, value
    },
    videos: {
        icon, label, value
    }
}

----------- object skeleton for color -----------
colors = {
    titleColor, iconColor, textColor, bgColor
}

----------- object skeleton for metaData -----------
metaData = {
    cardBorder, cardTitleXPos, cardBodyXPos, cardHeight, cardWidth,
}
*/