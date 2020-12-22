const { Layouts } = require("./layouts");
const { getCommonStyle } = require("../common/getStyles");
const { YTStatsRequestError } = require("../common/utils");

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

const renderLayout = (cardData, colors, metaData, selectedLayout) => {

    const customStyle = getCustomStyle(colors);
    const cardStyle = getCommonStyle(colors, customStyle);

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

        // body's (x, y) pos for this layout
        metaData.cardBodyXPos = 140;
        metaData.cardBodyYPos = 88;

        // if no icon then shift body left
        if (cardData.views.icon === "") {
            metaData.cardBodyXPos -= 36;
        }
        // if no logo then shift title & body left
        if (cardData.logo === "") {
            metaData.cardTitleXPos -= 40;
            metaData.cardBodyXPos -= 40;
        }
        return Layouts.default(cardData, cardStyle, metaData);
    }
    else if (selectedLayout === "center") {
        metaData.cardBorder = 2;
        metaData.cardHeight = 312;
        metaData.cardWidth = 400;

        metaData.cardLogoXPos = 160;
        metaData.cardLogoYPos = 25;

        // title's x co-ord is auto centered
        metaData.cardTitleYPos = 162;

        // TODO :: find a better way to center body's x co-ords
        metaData.cardBodyXPos = 68;
        metaData.cardBodyYPos = 188;

        if (cardData.views.icon === "") {
            metaData.cardBodyXPos -= 18;
        }
        if (cardData.logo === "") {
            metaData.cardHeight -= 98;
            metaData.cardTitleYPos -= 102;
            metaData.cardBodyYPos -= 102;
            metaData.cardBorder = 1;  // if no logo then no line
        }
        return Layouts.center(cardData, cardStyle, metaData);
    }
    else if(selectedLayout === "extruded") {
        metaData.cardYPos = 40;
        metaData.cardHeight = 276;
        metaData.cardWidth = 400;

        metaData.cardLogoXPos = 160;
        metaData.cardLogoYPos = 2;

        // title's x co-ord is auto centered
        metaData.cardTitleYPos = 122;

        // TODO :: find a better way to center body's x co-ords
        metaData.cardBodyXPos = 68;
        metaData.cardBodyYPos = 148;

        if (cardData.views.icon === "") {
            metaData.cardBodyXPos -= 18;
        }
        if (cardData.logo === "") {
            metaData.cardYPos = 0.5;
            metaData.cardHeight -= 62;
            metaData.cardTitleYPos -= 62;
            metaData.cardBodyYPos -= 62;
        }
        return Layouts.extruded(cardData, cardStyle, metaData);
    }
    else {
        throw new YTStatsRequestError("The selected Layout doesn't exists !!", YTStatsRequestError.LAYOUT_NOT_FOUND
        );
    }
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