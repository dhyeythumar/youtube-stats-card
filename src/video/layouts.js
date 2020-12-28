// :: While adding new layout ::
// 1. Create new static function with the name you want as layout name
// 2. Put the cardData, cardStyle and metaData to correct location

export class Layouts {
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
                    <g transform="translate(0 3)" class="icon-color iconStroke-reduce">
                        <!-- total views icon path here-->
                        ${cardData.views.icon}
                    </g>

                    <text data-testid="viewCountLabel" class="text" transform="translate(38 16)">${cardData.views.label}:</text>

                    <text data-testid="viewCountField" class="text" transform="translate(150 16)">${cardData.views.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 600ms">
                    <g transform="translate(6 40)" class="icon-color">
                        <!-- total likes icon path here-->
                        ${cardData.likes.icon}
                    </g>

                    <text data-testid="likeCountLabel" class="text" transform="translate(38 54)">${cardData.likes.label}:</text>

                    <text data-testid="likeCountField" class="text" transform="translate(150 54)">${cardData.likes.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 750ms">
                    <g transform="translate(6 80)" class="icon-color">
                        <!-- total dislikes icon path here-->
                        ${cardData.dislikes.icon}
                    </g>

                    <text data-testid="dislikeCountLabel" class="text" transform="translate(38 92)">${cardData.dislikes.label}:</text>

                    <text data-testid="dislikeCountField" class="text" transform="translate(150 92)">${cardData.dislikes.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 900ms">
                    <g transform="translate(7 120)" class="icon-color">
                        <!-- total comments icon path here-->
                        ${cardData.comments.icon}
                    </g>

                    <text data-testid="commentCountLabel" class="text" transform="translate(38 130)">${cardData.comments.label}:</text>

                    <text data-testid="commentCountField" class="text" transform="translate(150 130)">${cardData.comments.value}</text>
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
                    <g transform="translate(0 0)" class="icon-color">
                        <!-- total likes icon path here-->
                        ${cardData.likes.icon}
                    </g>

                    <text data-testid="likeCountLabel" class="text" transform="translate(32 15)">${cardData.likes.label}:</text>

                    <text data-testid="likeCountField" class="text" transform="translate(128 15)">${cardData.likes.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 600ms">
                    <g transform="translate(0 40)" class="icon-color">
                        <!-- total dislikes icon path here-->
                        ${cardData.dislikes.icon}
                    </g>

                    <text data-testid="dislikeCountLabel" class="text" transform="translate(32 53)">${cardData.dislikes.label}:</text>

                    <text data-testid="dislikeCountField" class="text" transform="translate(128 53)">${cardData.dislikes.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 450ms">
                    <g transform="translate(236 2)" class="icon-color iconStroke-reduce">
                        <!-- total views icon path here-->
                        ${cardData.views.icon}
                    </g>

                    <text data-testid="viewCountLabel" class="text" transform="translate(273 15)">${cardData.views.label}:</text>

                    <text data-testid="viewCountField" class="text" transform="translate(390 15)">${cardData.views.value}</text>
                </g>

                <g class="stagger" style="animation-delay: 600ms">
                    <g transform="translate(242 42)" class="icon-color">
                        <!-- total comments icon path here-->
                    ${cardData.comments.icon}
                    </g>

                    <text data-testid="commentCountLabel" class="text" transform="translate(273 53)">${cardData.comments.label}:</text>

                    <text data-testid="commentCountField" class="text" transform="translate(390 53)">${cardData.comments.value}</text>
                </g>
            </g>
        </svg>`;
    }
}