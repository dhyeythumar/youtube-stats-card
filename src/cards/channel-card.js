import icons from '../common/icons.js';
import renderLayout from '../channel/render-layouts.js';
import { URL2Base64, numberFormatter, getCardColors, wrapText } from '../common/utils.js';

const renderChannelStatsCard = async (stats = {}, options = {}) => {
    const { title, logoURL, viewCount, subscriberCount, videoCount } = stats;
    const {
        layout = 'default',
        custom_title,
        hide_icons = false,
        hide_logo = false,
        hide_border = false,
        title_color,
        icon_color,
        text_color,
        bg_color,
        theme = 'default',
    } = options;

    // returns color theme based on colors with proper overrides and defaults
    const colors = getCardColors({
        title_color,
        icon_color,
        text_color,
        bg_color,
        theme,
    });

    const cardData = {
        title: wrapText(custom_title) || wrapText(title),
        logo: hide_logo ? '' : await URL2Base64(logoURL),
        body: {
            subscribers: {
                icon: hide_icons ? '' : icons.subscribers,
                label: 'Subscribers',
                value: numberFormatter(subscriberCount),
            },
            views: {
                icon: hide_icons ? '' : icons.views,
                label: 'Total Views',
                value: numberFormatter(viewCount),
            },
            videos: {
                icon: hide_icons ? '' : icons.videos,
                label: 'Total Public Videos',
                value: numberFormatter(videoCount),
            },
        },
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
        cardBodyYPos: 0,
    };

    return renderLayout(cardData, colors, metaData, layout);
};

export default renderChannelStatsCard;
