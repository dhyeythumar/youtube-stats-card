const getCommonStyle = (colors, addExtraCSS = '') => {
    return `
    .title {
        font: 500 22px Ubuntu, Sans-Serif;
        fill: ${colors.titleColor};
        animation: fadeInAnimation 0.8s ease-in-out forwards;
    }
    .card-bg {
        fill: ${colors.bgColor};
    }
    .stagger {
        opacity: 0;
        animation: fadeInAnimation 0.3s ease-in-out forwards;
    }
    .text {
        font: 500 16px Ubuntu, Sans-Serif;
        fill: ${colors.textColor};
    }
    .bold {
        font-weight: 600;
    }
    .icon-color {
        fill: ${colors.iconColor};
        stroke: ${colors.iconColor};
    }
    .iconStroke-reduce {
        stroke-width: 0.1px;
        stroke: ${colors.bgColor};
    }
    @keyframes fadeInAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    ${addExtraCSS}`;
};

export { getCommonStyle };
