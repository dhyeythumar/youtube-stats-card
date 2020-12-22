// :: While adding new layout ::
// 1. Create new static function with the name you want as layout name
// 2. Put the cardData, cardStyle and metaData to correct location

export class Layouts {
    constructor() {}

    // Default layout for channel card
    static default(cardData, cardStyle, metaData) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${metaData.cardWidth}" height="${metaData.cardHeight}" viewBox="0 0 ${metaData.cardWidth} ${metaData.cardHeight}">
            <defs>
                <style>
                    ${cardStyle}
                </style>
            </defs>
            <rect data-testid="card-bg" x="0.5" y="0.5" rx="4" class="card-bg" height="99%" width="${metaData.cardWidth - 1}" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder}"/>

            <g transform="translate(${metaData.cardLogoXPos} ${metaData.cardLogoYPos})">
                <!-- add logo here if hide logo is false -->
                ${cardData.logo}
            </g>

            <g data-testid="card-title" transform="translate(${metaData.cardTitleXPos} ${metaData.cardTitleYPos})">
                <text x="0" y="0" class="title" data-testid="title">${cardData.title}</text>
            </g>

            <g data-testid="card-body" transform="translate(${metaData.cardBodyXPos} ${metaData.cardBodyYPos})">
                <g class="stagger" style="animation-delay: 450ms">
                    <g transform="translate(2 0)"  class="icon-color">
                        <!-- subscribers icon path here-->
                        ${cardData.subscribers.icon}
                    </g>

                    <text data-testid="subscriberCountLabel" class="text" transform="translate(38 15)">${cardData.subscribers.label}:</text>

                    <text data-testid="subscriberCountField" class="text" transform="translate(210 15)">${cardData.subscribers.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 600ms">
                    <g transform="translate(-2 40)" class="icon-color iconStroke-reduce">
                        <!-- total views icon path here-->
                        ${cardData.views.icon}
                    </g>

                    <text data-testid="viewCountLabel" class="text" transform="translate(38 53)">${cardData.views.label}:</text>

                    <text data-testid="viewCountField" class="text" transform="translate(210 53)">${cardData.views.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 750ms">
                    <g transform="translate(2 76)" class="icon-color">
                        <!-- total videos icon path here -->
                        ${cardData.videos.icon}
                    </g>

                    <text id="videoCountLabel" class="text" transform="translate(38 92)">${cardData.videos.label}:</text>

                    <text id="videoCountField" class="text" transform="translate(210 92)">${cardData.videos.value}</text>
                </g>
            </g>
        </svg>`;
    }

    // Center layout for channel card
    static center(cardData, cardStyle, metaData) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${metaData.cardWidth}" height="${metaData.cardHeight}" viewBox="0 0 ${metaData.cardWidth} ${metaData.cardHeight}">
            <defs>
                <style>
                    ${cardStyle}
                </style>
            </defs>
            <rect data-testid="card-bg" x="0.5" y="0.5" rx="4" class="card-bg" height="99%" width="${metaData.cardWidth - 1}" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder}"/>

            <g transform="translate(${metaData.cardLogoXPos} ${metaData.cardLogoYPos})">
                <!-- add logo here if hide logo is false -->
                ${cardData.logo}
            </g>

            <line data-name="line" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder - 1}" x2="318" transform="translate(40 124)"/>

            <g data-testid="card-title" transform="translate(0 ${metaData.cardTitleYPos})">
                <text x="50%" y="0" class="title" text-anchor="middle" data-testid="title">${cardData.title}</text>
            </g>

            <g data-testid="card-body" class="card-body" transform="translate(${metaData.cardBodyXPos} ${metaData.cardBodyYPos})">
                <g class="stagger" style="animation-delay: 450ms">
                    <g transform="translate(16 0)" class="icon-color">
                        <!-- subscribers icon path here-->
                        ${cardData.subscribers.icon}
                    </g>

                    <text data-testid="subscriberCountLabel" class="text" transform="translate(50 15)">${cardData.subscribers.label}:</text>

                    <text data-testid="subscriberCountField" class="text" transform="translate(222 15)">${cardData.subscribers.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 600ms">
                    <g transform="translate(12 41)" class="icon-color iconStroke-reduce">
                        <!-- total views icon path here-->
                        ${cardData.views.icon}
                    </g>

                    <text data-testid="viewCountLabel" class="text" transform="translate(50 55)">${cardData.views.label}:</text>

                    <text data-testid="viewCountField" class="text" transform="translate(222 55)">${cardData.views.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 750ms">
                    <g transform="translate(16 78)" class="icon-color">
                        <!-- total videos icon path here -->
                        ${cardData.videos.icon}
                    </g>

                    <text id="videoCountLabel" class="text" transform="translate(50 94)">${cardData.videos.label}:</text>

                    <text id="videoCountField" class="text" transform="translate(222 94)">${cardData.videos.value}</text>
                </g>
            </g>
        </svg>`;
    }

    // Extruded layout for channel card
    static extruded(cardData, cardStyle, metaData) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${metaData.cardWidth}" height="${metaData.cardHeight}" viewBox="0 0 ${metaData.cardWidth} ${metaData.cardHeight}">
            <defs>
                <style>
                    ${cardStyle}
                </style>
            </defs>
            <rect data-testid="card-bg" x="0.5" y="${metaData.cardYPos}" rx="4" class="card-bg" height="${metaData.cardHeight - metaData.cardYPos}" width="${metaData.cardWidth - 1}" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder}"/>

            <g transform="translate(${metaData.cardLogoXPos} ${metaData.cardLogoYPos})" style="z-index:10">
                <!-- add logo here if hide logo is false -->
                ${cardData.logo}
            </g>

            <g data-testid="card-title" transform="translate(0 ${metaData.cardTitleYPos})">
                <text x="50%" y="0" class="title" text-anchor="middle" data-testid="title">${cardData.title}</text>
            </g>

            <g data-testid="card-body" class="card-body" transform="translate(${metaData.cardBodyXPos} ${metaData.cardBodyYPos})">
                <g class="stagger" style="animation-delay: 450ms">
                    <g transform="translate(16 0)" class="icon-color">
                        <!-- subscribers icon path here-->
                        ${cardData.subscribers.icon}
                    </g>

                    <text data-testid="subscriberCountLabel" class="text" transform="translate(50 15)">${cardData.subscribers.label}:</text>

                    <text data-testid="subscriberCountField" class="text" transform="translate(222 15)">${cardData.subscribers.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 600ms">
                    <g transform="translate(12 41)" class="icon-color iconStroke-reduce">
                        <!-- total views icon path here-->
                        ${cardData.views.icon}
                    </g>

                    <text data-testid="viewCountLabel" class="text" transform="translate(50 55)">${cardData.views.label}:</text>

                    <text data-testid="viewCountField" class="text" transform="translate(222 55)">${cardData.views.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 750ms">
                    <g transform="translate(16 78)" class="icon-color">
                        <!-- total videos icon path here -->
                        ${cardData.videos.icon}
                    </g>

                    <text id="videoCountLabel" class="text" transform="translate(50 94)">${cardData.videos.label}:</text>

                    <text id="videoCountField" class="text" transform="translate(222 94)">${cardData.videos.value}</text>
                </g>
            </g>
        </svg>`;
    }
}