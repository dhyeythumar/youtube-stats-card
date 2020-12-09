// List of all layout available
const layoutNames = ["default", "test"];

// :: While adding new layout ::
// Put the cardData, colors and metaData to correct position
// Add the new layout name to above `layoutNames` list !!

const getlayout = (cardData, colors, metaData, layout) => {
    const layouts = {
        default: `
            <svg xmlns="http://www.w3.org/2000/svg" width="${metaData.cardWidth}" height="${metaData.cardHeight}" viewBox="0 0 ${metaData.cardWidth} ${metaData.cardHeight}">
            <defs>
                <style>
                    .title {
                        font: 500 22px Ubuntu, 'Segoe UI', Sans-Serif;
                        fill: ${colors.titleColor};
                        animation: fadeInAnimation 0.8s ease-in-out forwards;
                    }

                    .stagger {
                        opacity: 0;
                        animation: fadeInAnimation 0.3s ease-in-out forwards;
                    }

                    .text {
                        font: 500 16px Ubuntu, 'Segoe UI', Sans-Serif;
                        fill: ${colors.textColor};
                    }

                    .bold {
                        font-weight: 600;
                    }

                    .icon-color {
                        fill: ${colors.iconColor};
                    }
                    .iconStroke {
                        stroke-width: 0.5px;
                        stroke: ${colors.iconColor};
                    }

                    .circle-rim {
                        stroke: ${colors.iconColor};
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
                    }
                    @keyframes fadeInAnimation {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                </style>
                <!-- add clip path here if hide logo is false -->
                ${cardData.logo.clipPath}
            </defs>

            <rect data-testid="card-bg" x="0.5" y="0.5" rx="4" class="card-bg" height="99%" width="${metaData.cardWidth - 1}" stroke="#e4e2e2" fill="${colors.bgColor}" stroke-opacity="${metaData.cardBorder}"/>

            <!-- add logo here if hide logo is false -->
            ${cardData.logo.logoHolder}

            <g data-testid="card-title" transform="translate(${metaData.cardTitleXPos} 50)">
                <text x="0" y="0" class="title" data-testid="title">${cardData.title}</text>
            </g>

            <g data-testid="card-body" transform="translate(${metaData.cardBodyXPos} 0)">
                <g class="stagger" style="animation-delay: 450ms">
                    <!-- subscribers icon here-->
                    ${cardData.subscribers.icon}
                    <text data-testid="subscriberCountLabel" class="text" transform="translate(178 103)">${cardData.subscribers.label}:</text>

                    <text data-testid="subscriberCountField" class="text" transform="translate(350 103)">${cardData.subscribers.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 600ms">
                    <!-- total views icon here-->
                    ${cardData.views.icon}
                    <text data-testid="viewCountLabel" class="text" transform="translate(178 141)">${cardData.views.label}:</text>

                    <text data-testid="viewCountField" class="text" transform="translate(350 141)">${cardData.views.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 750ms">
                    <!-- total videos icon here -->
                    ${cardData.videos.icon}
                    <text id="videosCountLabel" class="text" transform="translate(178 180)">${cardData.videos.label}:</text>

                    <text id="videosCountField" class="text" transform="translate(350 180)">${cardData.videos.value}</text>
                </g>
            </g>
            </svg>`,
        test: `
            <svg width="560" height="120" viewBox="0 0 560 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text, a { font: 500 18px Ubuntu, 'Segoe UI', Sans-Serif; fill: #2f80ed }
                .small { font: 500 14px Ubuntu, 'Segoe UI', Sans-Serif; fill: #252525 }
                .gray { fill: #858585 }
            </style>
            <rect x="0.5" y="0.5" width="559" height="99%" rx="4" fill="#fff" stroke="#e4e2e2"/>
            <text x="25" y="45" class="text">Something is not working! file an issue at <a href="https://git.io/JIZY7">https://git.io/JIZY7</a> 
            </text>
            <text data-testid="message" x="25" y="55" class="text small">
                <tspan x="25" y="60" dy="18">HIIII</tspan>
                <tspan x="25" y="82" dy="18" class="gray">HJLL</tspan>
            </text>
            </svg>`,
    }
    return layouts[layout];
}

module.exports = { layoutNames, getlayout };