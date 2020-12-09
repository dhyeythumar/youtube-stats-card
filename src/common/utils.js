const themes = require("../../themes/color-themes");

const renderError = (message, secondaryMessage = "") => {
    return `<svg width="560" height="120" viewBox="0 0 560 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
        .text, a { font: 500 18px Ubuntu, 'Segoe UI', Sans-Serif; fill: #2f80ed }
        .small { font: 500 14px Ubuntu, 'Segoe UI', Sans-Serif; fill: #252525 }
        .gray { fill: #858585 }
    </style>
    <rect x="0.5" y="0.5" width="559" height="99%" rx="4" fill="#fff" stroke="#e4e2e2"/>
    <text x="25" y="45" class="text">Something is not working! file an issue at <a href="https://git.io/JIZY7">https://git.io/JIZY7</a> 
    </text>
    <text data-testid="message" x="25" y="55" class="text small">
      <tspan x="25" y="60" dy="18">${encodeHTML(message)}</tspan>
      <tspan x="25" y="82" dy="18" class="gray">${secondaryMessage}</tspan>
    </text>
    </svg>`;
};

// https://stackoverflow.com/a/48073476/10629172
const encodeHTML = (str) => {
    return str.replace(/[\u00A0-\u9999<>&](?!#)/gim, (i) => {
        return "&#" + i.charCodeAt(0) + ";";
    }).replace(/\u0008/gim, "");
}

const SECONDARY_ERROR_MESSAGES = {
    CHANNEL_NOT_FOUND: "Make sure the provided correct channel ID",
    CHANNEL_API_ERROR: "Something went wrong with YouTube Channel API"
};

class ChannelError extends Error {
    constructor(message, type) {
        super(message);
        this.type = type;
        this.secondaryMessage = SECONDARY_ERROR_MESSAGES[type] || "Uncaught Error !!";
    }
    static CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND";
    static CHANNEL_API_ERROR = "CHANNEL_API_ERROR";
}

const CONSTANTS = {
    THIRTY_MINUTES: 1800,
    TWO_HOURS: 7200,
    FOUR_HOURS: 14400,
    ONE_DAY: 86400,
};

const numberFormatter = (num) => {
    if (num >= 1000000000)
        return (num / 1000000000).toFixed(2).toString() + " B";
    else if (num >= 1000000)
        return (num / 1000000).toFixed(2).toString() + " M";
    else if (num >= 1000)
        return (num / 1000).toFixed(2).toString() + " K";
    else
        return num.toString();
}

const clampValue = (number, min, max) => {
    return Math.max(min, Math.min(number, max));
}

const parseBoolean = (value) => {
    if (value === "true") {
        return true;
    } else if (value === "false") {
        return false;
    } else {
        return value;
    }
}

const isValidHexColor = (hexColor) => {
    return new RegExp(
        /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/,
    ).test(hexColor);
}
// returns theme based colors
const getCardColors = ({
    title_color,
    text_color,
    icon_color,
    bg_color,
    theme,
    fallbackTheme = "default"
}) => {
    const selectedTheme = themes[theme] || themes[fallbackTheme];

    // get the color provided by the user else use the default color theme
    const colors = {
        titleColor: "#" + (isValidHexColor(title_color) ? title_color : selectedTheme.title_color),
        iconColor: "#" + (isValidHexColor(icon_color) ? icon_color : selectedTheme.icon_color),
        textColor: "#" + (isValidHexColor(text_color) ? text_color : selectedTheme.text_color),
        bgColor: "#" + (isValidHexColor(bg_color) ? bg_color : selectedTheme.bg_color)
    }
    return colors;
}

const wrapText = (text, maxChar = 20) => {
    if (text && text.length > maxChar) {
        return (text.substr(0, maxChar) + "...");
    }
    else
        return text;
}

module.exports = {
    renderError,
    ChannelError,
    CONSTANTS,
    numberFormatter,
    clampValue,
    parseBoolean,
    getCardColors,
    wrapText
};