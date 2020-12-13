// List of all layout available for video stats card
const layoutNames = ["default"];

// :: While adding new layout ::
// Put the cardData, cardStyle and metaData to correct location
// Add the new layout name to above `layoutNames` list !!

const getlayout = (cardData, cardStyle, metaData, layout) => {
    const layouts = {
        default: `
            <svg xmlns="http://www.w3.org/2000/svg" width="${metaData.cardWidth}" height="${metaData.cardHeight}" viewBox="0 0 ${metaData.cardWidth} ${metaData.cardHeight}">
                <defs>
                    <style>
                        ${cardStyle}
                        ${cardData.videoPreview.gradientStyle}
                    </style>
                    ${cardData.videoPreview.gradientBG}
                </defs>
                <!-- add video preview here if hide preview is false -->
                ${cardData.videoPreview.preview}

                <rect data-testid="card-bg" x="0.5" y="0.5" rx="4" class="card-bg gradient" id="linear-gradient"  height="99%" width="${metaData.cardWidth - 1}" stroke="#e4e2e2" stroke-opacity="${metaData.cardBorder}"/>

                <g data-testid="card-title" transform="translate(${metaData.cardTitleXPos} ${metaData.cardTitleYPos})">
                    <text x="0" y="0" class="title" data-testid="title">${cardData.title}</text>
                    <text x="0" y="24" class="sub-title" data-testid="sub-title">${cardData.channelTitle}</text>
                </g>

                <g data-testid="card-body" transform="translate(${metaData.cardBodyXPos} ${metaData.cardBodyYPos})">
                    <g class="stagger" style="animation-delay: 450ms">
                        <g data-testid="viewIcon" transform="translate(30 113)" class="icon-color iconStroke-reduce">
                            <!-- total views icon path here-->
                            ${cardData.views.icon}
                        </g>

                        <text data-testid="viewCountLabel" class="text" transform="translate(68 126)">${cardData.views.label}:</text>

                        <text data-testid="viewCountField" class="text" transform="translate(180 126)">${cardData.views.value}</text>
                    </g>

                    <g class="stagger" style="animation-delay: 600ms">
                        <g data-testid="likeIcon" transform="translate(36 150)" class="icon-color" stroke-width="0.7" >
                            <!-- total likes icon path here-->
                            ${cardData.likes.icon}
                        </g>

                        <text data-testid="likeCountLabel" class="text" transform="translate(68 164)">${cardData.likes.label}:</text>

                        <text data-testid="likeCountField" class="text" transform="translate(180 164)">${cardData.likes.value}</text>
                    </g>

                    <g class="stagger" style="animation-delay: 750ms">
                        <g data-testid="dislikeIcon" transform="translate(36 188)" class="icon-color" stroke-width="0.7">
                            <!-- total dislikes icon path here-->
                            ${cardData.dislikes.icon}
                        </g>

                        <text data-testid="dislikeCountLabel" class="text" transform="translate(68 202)">${cardData.dislikes.label}:</text>

                        <text data-testid="dislikeCountField" class="text" transform="translate(180 202)">${cardData.dislikes.value}</text>
                    </g>

                    <g class="stagger" style="animation-delay: 900ms">
                        <g data-testid="commentIcon" transform="translate(37 230)" class="icon-color" stroke-width="0.8">
                            <!-- total comments icon path here-->
                            ${cardData.comments.icon}
                        </g>

                        <text data-testid="commentCountLabel" class="text" transform="translate(68 240)">${cardData.comments.label}:</text>

                        <text data-testid="commentCountField" class="text" transform="translate(180 240)">${cardData.comments.value}</text>
                    </g>
                </g>
            </svg>`
    }
    return layouts[layout];
}

module.exports = { layoutNames, getlayout };