// List of all layout available
const layoutNames = ["default", "center"];

// :: While adding new layout ::
// Put the cardData, cardStyle and metaData to correct position
// Add the new layout name to above `layoutNames` list !!

const getlayout = (cardData, cardStyle, metaData, layout) => {
    const layouts = {
        default: `
            <svg xmlns="http://www.w3.org/2000/svg" width="${metaData.cardWidth}" height="${metaData.cardHeight}" viewBox="0 0 ${metaData.cardWidth} ${metaData.cardHeight}">
                <defs>
                    <style>
                        ${cardStyle}
                    </style>
                    <!-- add clip path here if hide logo is false -->
                    ${cardData.logo.clipPath}
                </defs>
                <rect data-testid="card-bg" x="0.5" y="0.5" rx="4" class="card-bg" height="99%" width="${metaData.cardWidth - 1}" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder}"/>

                <g transform="translate(${metaData.cardLogoXPos} ${metaData.cardLogoYPos})">
                    <!-- add logo here if hide logo is false -->
                    ${cardData.logo.logoHolder}
                </g>

                <g data-testid="card-title" transform="translate(${metaData.cardTitleXPos} ${metaData.cardTitleYPos})">
                    <text x="0" y="0" class="title" data-testid="title">${cardData.title}</text>
                </g>

                <g data-testid="card-body" transform="translate(${metaData.cardBodyXPos} ${metaData.cardBodyYPos})">
                    <g class="stagger" style="animation-delay: 450ms">
                        <g data-testid="subscriberIcon" transform="translate(-148 520)" class="icon-color iconStroke">
                            <!-- subscribers icon here-->
                            ${cardData.subscribers.icon}
                        </g>

                        <text data-testid="subscriberCountLabel" class="text" transform="translate(178 103)">${cardData.subscribers.label}:</text>

                        <text data-testid="subscriberCountField" class="text" transform="translate(350 103)">${cardData.subscribers.value}</text>
                    </g>

                    <g class="stagger" style="animation-delay: 600ms">
                        <g data-testid="viewIcon" transform="translate(138 128)" class="icon-color">
                            <!-- total views icon here-->
                            ${cardData.views.icon}
                        </g>

                        <text data-testid="viewCountLabel" class="text" transform="translate(178 141)">${cardData.views.label}:</text>

                        <text data-testid="viewCountField" class="text" transform="translate(350 141)">${cardData.views.value}</text>
                    </g>

                    <g class="stagger" style="animation-delay: 750ms">
                        <g data-testid="videoIcon" class="icon-color iconStroke" transform="translate(142 164)">
                            <!-- total videos icon here -->
                            ${cardData.videos.icon}
                        </g>

                        <text id="videosCountLabel" class="text" transform="translate(178 180)">${cardData.videos.label}:</text>

                        <text id="videosCountField" class="text" transform="translate(350 180)">${cardData.videos.value}</text>
                    </g>
                </g>
            </svg>`,
        center: `
            <svg xmlns="http://www.w3.org/2000/svg" width="${metaData.cardWidth}" height="${metaData.cardHeight}" viewBox="0 0 ${metaData.cardWidth} ${metaData.cardHeight}">
                <defs>
                    <style>
                        ${cardStyle}
                    </style>
                    <!-- add clip path here if hide logo is false -->
                    ${cardData.logo.clipPath}
                </defs>
                <rect data-testid="card-bg" x="0.5" y="0.5" rx="4" class="card-bg" height="99%" width="${metaData.cardWidth - 1}" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder}"/>

                <g transform="translate(${metaData.cardLogoXPos} ${metaData.cardLogoYPos})">
                    <!-- add logo here if hide logo is false -->
                    ${cardData.logo.logoHolder}
                </g>

                <line data-name="line" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder - 1}" x2="318" transform="translate(40 124)"/>

                <g data-testid="card-title" transform="translate(0 ${metaData.cardTitleYPos})">
                    <text x="50%" y="0" class="title" text-anchor="middle" data-testid="title">${cardData.title}</text>
                </g>

                <g data-testid="card-body" class="card-body" transform="translate(${metaData.cardBodyXPos} ${metaData.cardBodyYPos})">
                    <g class="stagger" style="animation-delay: 450ms">
                        <g data-testid="subscriberIcon" transform="translate(-205 620)" class="icon-color iconStroke">
                            <!-- subscribers icon path here-->
                            ${cardData.subscribers.icon}
                        </g>

                        <text data-testid="subscriberCountLabel" class="text" transform="translate(118 203)">${cardData.subscribers.label}:</text>

                        <text data-testid="subscriberCountField" class="text" transform="translate(290 203)">${cardData.subscribers.value}</text>
                    </g>

                    <g class="stagger" style="animation-delay: 600ms">
                        <g data-testid="viewIcon" transform="translate(80 229)" class="icon-color">
                            <!-- total views icon path here-->
                            ${cardData.views.icon}
                        </g>

                        <text data-testid="viewCountLabel" class="text" transform="translate(118 243)">${cardData.views.label}:</text>

                        <text data-testid="viewCountField" class="text" transform="translate(290 243)">${cardData.views.value}</text>
                    </g>

                    <g class="stagger" style="animation-delay: 750ms">
                        <g data-testid="videoIcon" class="icon-color iconStroke" transform="translate(84 266)">
                            <!-- total videos icon path here -->
                            ${cardData.videos.icon}
                        </g>

                        <text id="videosCountLabel" class="text" transform="translate(118 282)">${cardData.videos.label}:</text>

                        <text id="videosCountField" class="text" transform="translate(290 282)">${cardData.videos.value}</text>
                    </g>
                </g>
            </svg>`,
    }
    return layouts[layout];
}

module.exports = { layoutNames, getlayout };