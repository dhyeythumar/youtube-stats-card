// :: While adding new layout ::
// 1. Create new static function in Layouts class with the name you want as layout name
// 2. Put the cardData, cardStyle and metaData to correct location

export class Components {
    constructor() {}

    static getLogo = (imageBlob, logoXPos, logoYPos) => {
        if(imageBlob === "") {
            return "";
        }
        else {
            return `<g transform="translate(${logoXPos} ${logoYPos})">
                <foreignObject transform="translate(0 0)" width="80" height="80">
                    <div xmlns="http://www.w3.org/1999/xhtml">
                        <img width="100%" height="100%" src="${imageBlob}" style="border-radius:50%" />
                    </div>
                </foreignObject>
                <g data-testid="card-logo" transform="translate(0 20)">
                    <circle class="circle-rim" cx="40" cy="40" r="40"/>
                </g>
            </g>`;
        }
    }

    static getBody = (body) => {
        return `
        <g class="stagger" style="animation-delay: 450ms">
            <g transform="translate(4 0)" class="icon-color">
                <!-- subscribers icon path here-->
                ${body.subscribers.icon}
            </g>
            <text data-testid="subscriberCountLabel" class="text" transform="translate(38 15)">
                ${body.subscribers.label}:
            </text>
            <text data-testid="subscriberCountField" class="text" transform="translate(210 15)">
                ${body.subscribers.value}
            </text>
        </g>
        <g class="stagger" style="animation-delay: 600ms">
            <g transform="translate(0 40)" class="icon-color iconStroke-reduce">
                <!-- total views icon path here-->
                ${body.views.icon}
            </g>
            <text data-testid="viewCountLabel" class="text" transform="translate(38 53)">
                ${body.views.label}:
            </text>
            <text data-testid="viewCountField" class="text" transform="translate(210 53)">
                ${body.views.value}
            </text>
        </g>
        <g class="stagger" style="animation-delay: 750ms">
            <g transform="translate(4 76)" class="icon-color">
                <!-- total videos icon path here -->
                ${body.videos.icon}
            </g>
            <text id="videoCountLabel" class="text" transform="translate(38 92)">
                ${body.videos.label}:
            </text>
            <text id="videoCountField" class="text" transform="translate(210 92)">
                ${body.videos.value}
            </text>
        </g>`;
    }
}

export class Layouts {
    constructor() {}

    // Default layout for channel card
    static default(cardTitle, cardLogo, cardBody, cardStyle, metaData) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${metaData.cardWidth}" height="${metaData.cardHeight}" viewBox="0 0 ${metaData.cardWidth} ${metaData.cardHeight}">
            <defs>
                <style>
                    ${cardStyle}
                </style>
            </defs>
            <rect data-testid="card-bg" x="0.5" y="0.5" rx="4" class="card-bg" height="99%" width="${metaData.cardWidth - 1}" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder}"/>

            ${cardLogo}

            <g data-testid="card-title" transform="translate(${metaData.cardTitleXPos} ${metaData.cardTitleYPos})">
                <text x="0" y="0" class="title" data-testid="title">${cardTitle}</text>
            </g>

            <g data-testid="card-body" transform="translate(${metaData.cardBodyXPos} ${metaData.cardBodyYPos})">
                ${cardBody}
            </g>
        </svg>`;
    }

    // Center layout for channel card
    static center(cardTitle, cardLogo, cardBody, cardStyle, metaData) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${metaData.cardWidth}" height="${metaData.cardHeight}" viewBox="0 0 ${metaData.cardWidth} ${metaData.cardHeight}">
            <defs>
                <style>
                    ${cardStyle}
                </style>
            </defs>
            <rect data-testid="card-bg" x="0.5" y="0.5" rx="4" class="card-bg" height="99%" width="${metaData.cardWidth - 1}" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder}"/>

            ${cardLogo}

            <line data-name="line" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder - 1}" x2="318" transform="translate(40 124)"/>

            <g data-testid="card-title" transform="translate(0 ${metaData.cardTitleYPos})">
                <text x="50%" y="0" class="title" text-anchor="middle" data-testid="title">${cardTitle}</text>
            </g>

            <foreignObject width="100%" height="100" class="card-body" transform="translate(0 ${metaData.cardBodyYPos})">
                <svg id="body_svg" xmlns="http://www.w3.org/2000/svg" style="height: inherit; display: block; margin: 0 auto;">
                    <g data-testid="card-body" transform="translate(${metaData.cardBodyXPos} 0)">
                        ${cardBody}
                    </g>
                </svg>
            </foreignObject>

            <script type="text/javascript">
                window.addEventListener("load", function() {
                    const body = document.getElementById("body_svg");
                    body.setAttribute("width", body.getBBox().width);
                });
            </script>
        </svg>`;
    }

    // Extruded layout for channel card
    static extruded(cardTitle, cardLogo, cardBody, cardStyle, metaData) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${metaData.cardWidth}" height="${metaData.cardHeight}" viewBox="0 0 ${metaData.cardWidth} ${metaData.cardHeight}">
            <defs>
                <style>
                    ${cardStyle}
                </style>
            </defs>
            <rect data-testid="card-bg" x="0.5" y="${metaData.cardYPos}" rx="4" class="card-bg" height="${metaData.cardHeight - metaData.cardYPos}" width="${metaData.cardWidth - 1}" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder}"/>

            ${cardLogo}

            <g data-testid="card-title" transform="translate(0 ${metaData.cardTitleYPos})">
                <text x="50%" y="0" class="title" text-anchor="middle" data-testid="title">${cardTitle}</text>
            </g>

            <foreignObject width="100%" height="100" class="card-body" transform="translate(0 ${metaData.cardBodyYPos})">
                <svg id="body_svg" xmlns="http://www.w3.org/2000/svg" style="height: inherit; display: block; margin: 0 auto;">
                    <g data-testid="card-body" transform="translate(${metaData.cardBodyXPos} 0)">
                        ${cardBody}
                    </g>
                </svg>
            </foreignObject>

            <script type="text/javascript">
                window.addEventListener("load", function() {
                    const body = document.getElementById("body_svg");
                    body.setAttribute("width", body.getBBox().width);
                });
            </script>
        </svg>`;
    }
}