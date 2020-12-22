// List of all layout available for video stats card
const layoutNames = ["default", "compact"];

// :: While adding new layout ::
// 1. Create new static function with the name you want as layout name
// 2. Put the cardData, cardStyle and metaData to correct location
// 3. Add the new layout name to above `layoutNames` list !!

class Layouts {
    constructor() {}

    // Default layout for video card
    static default(cardData, cardStyle, metaData) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${metaData.cardWidth}" height="${metaData.cardHeight}" viewBox="0 0 ${metaData.cardWidth} ${metaData.cardHeight}">
            <defs>
                <style>
                    ${cardStyle}
                </style>
            </defs>

            <rect data-testid="card-bg" x="0.5" y="0.5" rx="4" class="card-bg" height="99%" width="${metaData.cardWidth - 1}" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder}"/>

            <!-- add video preview here if hide preview is false -->
            ${cardData.videoPreview}

            <g data-testid="card-title" transform="translate(${metaData.cardTitleXPos} ${metaData.cardTitleYPos})">
                <text x="0" y="0" class="title" data-testid="title">${cardData.title}</text>
                <text x="0" y="24" class="sub-title" data-testid="sub-title">${cardData.channelTitle}</text>
            </g>

            <g data-testid="card-body" transform="translate(${metaData.cardBodyXPos} ${metaData.cardBodyYPos})">
                <g class="stagger" style="animation-delay: 450ms">
                    <g transform="translate(30 113)" class="icon-color iconStroke-reduce">
                        <!-- total views icon path here-->
                        ${cardData.views.icon}
                    </g>

                    <text data-testid="viewCountLabel" class="text" transform="translate(68 126)">${cardData.views.label}:</text>

                    <text data-testid="viewCountField" class="text" transform="translate(180 126)">${cardData.views.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 600ms">
                    <g transform="translate(36 150)" class="icon-color">
                        <!-- total likes icon path here-->
                        ${cardData.likes.icon}
                    </g>

                    <text data-testid="likeCountLabel" class="text" transform="translate(68 164)">${cardData.likes.label}:</text>

                    <text data-testid="likeCountField" class="text" transform="translate(180 164)">${cardData.likes.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 750ms">
                    <g transform="translate(36 190)" class="icon-color">
                        <!-- total dislikes icon path here-->
                        ${cardData.dislikes.icon}
                    </g>

                    <text data-testid="dislikeCountLabel" class="text" transform="translate(68 202)">${cardData.dislikes.label}:</text>

                    <text data-testid="dislikeCountField" class="text" transform="translate(180 202)">${cardData.dislikes.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 900ms">
                    <g transform="translate(37 230)" class="icon-color">
                        <!-- total comments icon path here-->
                        ${cardData.comments.icon}
                    </g>

                    <text data-testid="commentCountLabel" class="text" transform="translate(68 240)">${cardData.comments.label}:</text>

                    <text data-testid="commentCountField" class="text" transform="translate(180 240)">${cardData.comments.value}</text>
                </g>
            </g>
        </svg>`;
    }

    // Compact layout for video card
    static compact(cardData, cardStyle, metaData) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${metaData.cardWidth}" height="${metaData.cardHeight}" viewBox="0 0 ${metaData.cardWidth} ${metaData.cardHeight}">
            <defs>
                <style>
                ${cardStyle}
                </style>
            </defs>
            <rect data-testid="card-bg" x="0.5" y="0.5" rx="4" class="card-bg" height="99%" width="${metaData.cardWidth - 1}" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder}"/>

            <g transform="translate(${metaData.cardVideoPreviewXPos} ${metaData.cardVideoPreviewYPos})">
                ${cardData.videoPreview}
            </g>

            <g data-testid="card-title" transform="translate(${metaData.cardTitleXPos} ${metaData.cardTitleYPos})">
                <text x="0" y="0" class="title" data-testid="title">${cardData.title}</text>
                <text x="0" y="24" class="sub-title" data-testid="sub-title">${cardData.channelTitle}</text>
            </g>

            <g data-testid="card-body" transform="translate(${metaData.cardBodyXPos} ${metaData.cardBodyYPos})">
                <g class="stagger" style="animation-delay: 450ms">
                    <g transform="translate(30 166)" class="icon-color">
                        <!-- total likes icon path here-->
                        ${cardData.likes.icon}
                    </g>

                    <text data-testid="likeCountLabel" class="text" transform="translate(62 181)">${cardData.likes.label}:</text>

                    <text data-testid="likeCountField" class="text" transform="translate(158 181)">${cardData.likes.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 450ms">
                    <g transform="translate(266 168)" class="icon-color iconStroke-reduce">
                        <!-- total views icon path here-->
                        ${cardData.views.icon}
                    </g>

                    <text data-testid="viewCountLabel" class="text" transform="translate(303 181)">${cardData.views.label}:</text>

                    <text data-testid="viewCountField" class="text" transform="translate(421 181)">${cardData.views.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 600ms">
                    <g transform="translate(30 206)" class="icon-color">
                        <!-- total dislikes icon path here-->
                        ${cardData.dislikes.icon}
                    </g>

                    <text data-testid="dislikeCountLabel" class="text" transform="translate(62 219)">${cardData.dislikes.label}:</text>

                    <text data-testid="dislikeCountField" class="text" transform="translate(158 219)">${cardData.dislikes.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 600ms">
                    <g transform="translate(273 208)" class="icon-color">
                        <!-- total comments icon path here-->
                    ${cardData.comments.icon}
                    </g>

                    <text data-testid="commentCountLabel" class="text" transform="translate(303 219)">${cardData.comments.label}:</text>

                    <text data-testid="commentCountField" class="text" transform="translate(421 219)">${cardData.comments.value}</text>
                </g>
            </g>
        </svg>`;
    }
}

module.exports = { layoutNames, Layouts };