const { layoutNames, getlayout } = require("./layouts")

const renderLayout = (cardData, colors, metaData, layout) => {

    let selectedLayout = layout;
    if (layout != "default") {
        selectedLayout = layoutNames.includes(layout) ? layout : "default";
    }

    // :: add/modify specific values for the specific layout ::
    if (selectedLayout === "default") {
        metaData.cardTitleXPos = 140;  // x pos for this layout
        if (cardData.logo.clipPath === "") {
            metaData.cardTitleXPos -= 40;
            metaData.cardBodyXPos -= 40;
        }
        metaData.cardHeight = 214;
        metaData.cardWidth = 450;
    }

    return getlayout(cardData, colors, metaData, selectedLayout);
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